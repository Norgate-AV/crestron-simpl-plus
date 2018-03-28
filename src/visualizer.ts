import * as vscode from 'vscode';


export class SVGCreator {

    private parser: VisualizerParse;
    private svgElement: string;
    private sigSpacing = 50;
    //private paramSpacing = 10;

    constructor(parser: VisualizerParse) {
        this.parser = parser;
        this.svgElement = '';
    }

    private initSVG(){
        let maxSignals = (
            (this.parser.myInputSignals > this.parser.myOutputSignals) ? 
            this.parser.myInputSignals.length : this.parser.myOutputSignals.length);
        this.svgElement = `<svg width="1000" height="` + (maxSignals*this.sigSpacing+100) + `">`;
        this.svgElement += this.createRect(200, 10, 500, (maxSignals*this.sigSpacing+20), "rgb(175,175,175)", "clear");
    }

    private createLine(x: number, y: number, stroke: SigTypes){
        return `<line x1="${x}" y1="${y}" x2="${x+200}" y2="${y}" stroke="${stroke}"></line>`;
    }
    private createText(x:number, y:number, text: string){
        return `<text x="${x}" y="${y}" fill="black" font-family="Verdana" font-size="14">${text}</text>`;
    }
    private createRect(x: number, y: number, width:number, height: number, fill: string, stroke: string){
        return `<rect x="${x}" y="${y}" width="${width}" height="${height}" stroke="${stroke}" fill="${fill}"></rect>`;
    }

    private createParam(ySpacing: number, name: string){
        this.svgElement += this.createRect(300, ySpacing+10, 300, this.sigSpacing, "rgb(125,125,125)", "black");
        this.svgElement += this.createText(410, ySpacing+40, name);
    }

    private createInput(ySpacing: number, name: string, type: SigTypes) {
        this.svgElement += this.createLine(20, ySpacing, type);
        this.svgElement += this.createText(150, ySpacing-10, name);
    }
    
    private createOutput(ySpacing: number, name: string, type: SigTypes) {
        this.svgElement += this.createLine(670, ySpacing, type);
        this.svgElement += this.createText(650, ySpacing-10, name);
    }
    
    public returnSVG():string {
        
        this.initSVG();

        for (let i = 0; i < this.parser.myParameters.length; i++) {
            const element = this.parser.myParameters[i];
            if (element !== "_skip_"){
                this.createParam(this.sigSpacing*i, element);
            }
        }

        for (let i = 0; i < this.parser.myInputSignals.length; i++) {
            const element = this.parser.myInputSignals[i];
            this.createInput(this.sigSpacing*(i+1), element.name, element.type);
        }

        for (let i = 0; i < this.parser.myOutputSignals.length; i++) {
            const element = this.parser.myOutputSignals[i];
            this.createOutput(this.sigSpacing*(i+1), element.name, element.type);
        }

        let body = `<body style="background-color:white; zoom:0.7">` 
            + this.svgElement
            + `</svg>`
            +`<br />`
            +`SIMPL+ Visualizer`
            + `</body>`;

        return body;
    }
}

enum SigTypes {
    "digital" = "blue",
    "analog" = "red",
    "string" = "black",
    "_skip_" = "clear"
}

enum IOTypes {
    "input",
    "output"
}

interface SimplSignal {
    name: string;
    type: SigTypes;
}

interface Constant {
    [constName: string]: string;
}

interface RegExSignals {
    pattern: RegExp;
    type: SigTypes;
    io: IOTypes;
}



export class VisualizerParse {

    public fileText: string = '';
    public myInputSignals: SimplSignal[] = [];
    public myOutputSignals: SimplSignal[] = [];
    public myParameters: string[] = [];
    public myConstants: Constant = {};

    private myRegExSignals: RegExSignals[] = [];

    private regExPatterns = {
        'array':        /\[(.+?)\]/gim,
        'arrayCommas':  /\[([^\[\]]*?),([^\]\]]*?)\]/gim,
        'comment':    /(\/\/)(.*?)(?=\r\n)/g,
        'blockComment': /(\/\*)([\S\s]*?)(\*\/)/g,
        'digitalIn':    /DIGITAL_INPUT([\S\s]*?)(?=;)/gmi,
        'digitalOut':   /DIGITAL_OUTPUT([\S\s]*?)(?=;)/gmi,
        'analogIn':     /ANALOG_INPUT([\S\s]*?)(?=;)/gmi,
        'analogOut':    /ANALOG_OUTPUT([\S\s]*?)(?=;)/gmi,
        'stringIn':     /STRING_INPUT([\S\s]*?)(?=;)/gmi,
        'stringOut':    /STRING_OUTPUT([\S\s]*?)(?=;)/gmi,
        'bufferIn':     /BUFFER_INPUT([\S\s]*?)(?=;)/gmi,
        'allIO':		/(DIGITAL_INPUT|ANALOG_INPUT|STRING_INPUT|BUFFER_INPUT|DIGITAL_OUTPUT|ANALOG_OUTPUT|STRING_OUTPUT)([\S\s]*?)(;)/gmi,
        'paramFull':    /(?:integer_parameter|long_integer_parameter|signed_integer_parameter|signed_long_integer_parameter|string_parameter)([\S\s]*?)(;)/gmi,
        'paramType':    /(integer_parameter|long_integer_parameter|signed_integer_parameter|signed_long_integer_parameter|string_parameter)/gmi,
        'constants':    /#DEFINE_CONSTANT(.*?)(?=\r\n)/g,
    };


    constructor(){
        this.myRegExSignals.push( {pattern: this.regExPatterns['digitalIn'], type: SigTypes.digital, io: IOTypes.input });
        this.myRegExSignals.push( {pattern: this.regExPatterns['digitalOut'], type: SigTypes.digital, io: IOTypes.output });
        this.myRegExSignals.push( {pattern: this.regExPatterns['analogIn'], type: SigTypes.analog, io: IOTypes.input });
        this.myRegExSignals.push( {pattern: this.regExPatterns['analogOut'], type: SigTypes.analog, io: IOTypes.output });
        this.myRegExSignals.push( {pattern: this.regExPatterns['stringIn'], type: SigTypes.string, io: IOTypes.input });
        this.myRegExSignals.push( {pattern: this.regExPatterns['stringOut'], type: SigTypes.string, io: IOTypes.output });
        this.myRegExSignals.push( {pattern: this.regExPatterns['bufferIn'], type: SigTypes.string, io: IOTypes.input });
    }

    public parseSimplPlus(){
        const editor = vscode.window.activeTextEditor;
        if(editor) {
            this.fileText = editor.document.getText();

            let filtered = this.fileText.replace(this.regExPatterns['blockComment'], '');
            filtered = filtered.replace(this.regExPatterns['comment'], '');
            filtered = filtered.replace(this.regExPatterns['arrayCommas'], '[$1]');

            //constants
            let constants = filtered.match(this.regExPatterns['constants']);
            if(constants) {
                constants.forEach(element => {
                    let myConst = element.replace(this.regExPatterns['constants'], '$1').split(/\s+/g);
                    this.myConstants[myConst[1]] = myConst[2];
                });
            }


            //separate out ot each group in order
            let parsedAll = filtered.match(this.regExPatterns['allIO']);

            //if we find, then go through each group and parse the specific element and add to main IO
            if (parsedAll) {
                parsedAll.forEach(element => {
                    //do this better eventually
                    this.myRegExSignals.forEach(regExSig => {
                        let sig = regExSig.pattern.exec(element);
                        if (sig) {
                            this.IOParse(sig[1], regExSig.type, regExSig.io);
                        }
                    });
                });
            }

            let param;
            if(param = filtered.match(this.regExPatterns['paramFull'])){
                this.paramParse(param);
            }
        }
        
    }

    private paramParse(input: RegExpMatchArray){
        input.forEach(element => {
            let type = this.regExPatterns['paramType'].exec(element);
            let parsed = element.replace(this.regExPatterns['paramType'], '');
            let filtered = parsed.replace(/\s/g, '').replace(';','').split(',');
            filtered.forEach(item => {
                // this.myParameters.push(item);

                let matchLength = item.match(this.regExPatterns['array']);
                let array = this.regExPatterns['array'].exec(item);
                if (array && matchLength && type) {
                    let paramName = item.split('[',)[0];
                    let tempArrayLength = array[1];
                    let arrayLength;
                    //special case for a singular string parameter... size vs array
                    if(type[1].match(/string_parameter/gi) && matchLength.length === 1) {
                        this.myParameters.push(paramName);
                    }
                    else {
                        if (isNaN(Number(tempArrayLength))) {
                            //handle if constant is mistyped or otherwise doesn't exist.
                            if (typeof this.myConstants[tempArrayLength] !== 'undefined'){
                                arrayLength = this.myConstants[tempArrayLength];
                            }
                            else {
                                arrayLength = 1;
                                paramName += `[${tempArrayLength}]`;
                            }
                        }
                        else {
                            arrayLength = tempArrayLength;
                        }

                        for (let i = 0; i < arrayLength; i++) {
                            this.myParameters.push(paramName+`[${i+1}]`);                        
                        }
                    }
                }
                else {
                    this.myParameters.push(item);
                }
            });
        });
    }

    private IOParse(input: string, type: SigTypes, io: IOTypes) {
        let parsed = input.replace(/\s/g, '').replace(';', '').split(',');
        parsed.forEach(element => {
            let matchLength = element.match(this.regExPatterns['array']);
            let array = this.regExPatterns['array'].exec(element);
            if (array && matchLength) {
                let sigName = element.split('[',)[0];
                let tempArrayLength = array[1];
                let arrayLength;
    
                //special case for string/buffer input size vs full array size
                if(type===SigTypes.string && io === IOTypes.input && matchLength.length === 1) {
                    this.myInputSignals.push({
                        'name': sigName,
                        'type': type,
                        });
                }
                else {
                    //if array length is a constant isntead of number
                    if (isNaN(Number(tempArrayLength))){
                        //handle if constant is mistyped or otherwise doesn't exist.
                        if (typeof this.myConstants[tempArrayLength] !== 'undefined'){
                            arrayLength = this.myConstants[tempArrayLength];
                        }
                        else {
                            arrayLength = 1;
                            sigName += `[${tempArrayLength}]`;
                        }
                    }
                    else {
                        arrayLength = tempArrayLength;
                    }
    
                    for (let i = 0; i < arrayLength; i++) {
                        if(io === IOTypes.input){
                            this.myInputSignals.push({
                                'name': sigName + `[${i+1}]`,
                                'type':  type,
                            });  
                        }
                        else if (io === IOTypes.output) {
                            this.myOutputSignals.push({
                                'name': sigName + `[${i+1}]`,
                                'type':  type,
                            });
                        }
                    }
                }
                
            }
            else {
                if(element.toLowerCase() === '_skip_'){
                    if(io === IOTypes.input){
                        this.myInputSignals.push({
                            'name': '',
                            'type': SigTypes._skip_,
                        });
                    }
                    else if (io === IOTypes.output) {
                        this.myOutputSignals.push({
                            'name': '',
                            'type': SigTypes._skip_,
                        });
                    }
                }
                else {
                    if(io === IOTypes.input){
                        this.myInputSignals.push({
                            'name': element,
                            'type': type,
                            });
                    }
                    else if (io === IOTypes.output) {
                        this.myOutputSignals.push({
                            'name': element,
                            'type': type,
                            });
                    }
                }
            }
        });
        
    }
}