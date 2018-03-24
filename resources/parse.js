const regExPatterns = {
    'array': /(?<=\[).+?(?=\])/gim,
    'arrayCommas': /\[([^\[\]]*?),([^\]\]]*?)\]/gim,
    'comment': /(\/\/)(.*?)(?=\n)/g,
    'blockComment': /(\/\*)(.*?)(\*\/)/gs,
    'digitalIn':    /(?<=DIGITAL_INPUT)(.*?)(?=;)/gmsi,
    'digitalOut':   /(?<=DIGITAL_OUTPUT)(.*?)(?=;)/gmsi,
    'analogIn':     /(?<=ANALOG_INPUT)(.*?)(?=;)/gmsi,
    'analogOut':    /(?<=ANALOG_OUTPUT)(.*?)(?=;)/gmsi,
    'stringIn':     /(?<=STRING_INPUT)(.*?)(?=;)/gmsi,
    'stringOut':    /(?<=STRING_OUTPUT)(.*?)(?=;)/gmsi,
	'bufferIn':     /(?<=BUFFER_INPUT)(.*?)(?=;)/gmsi,
	'allIO':		/(DIGITAL_INPUT|ANALOG_INPUT|STRING_INPUT|BUFFER_INPUT|DIGITAL_OUTPUT|ANALOG_OUTPUT|STRING_OUTPUT)(.*?)(;)/gmsi,
    'paramFull':    /(?:integer_parameter|long_integer_parameter|signed_integer_parameter|signed_long_integer_parameter|string_parameter)(.*?)(;)/gmis,
    'paramType':    /(integer_parameter|long_integer_parameter|signed_integer_parameter|signed_long_integer_parameter|string_parameter)/gsim,
    'constants':    /(?<=#DEFINE_CONSTANT )(.*?)(?=\n)/g,
};


myInputSignals = [];
myOutputSignals = [];
myParameters = [];

let myConstants = {};

//strip comments
let filtered = myText.replace(regExPatterns['comment'], '');
filtered = filtered.replace(regExPatterns['blockComment'], '');
filtered = filtered.replace(regExPatterns['arrayCommas'], '[$2]');

//constants
let constants = filtered.match(regExPatterns['constants'])
if(constants) {
	constants.forEach(element => {
		element = element.split(' ');
		myConstants[element[0]] = element[1];
	});
}


//separate out ot each group in order
let parsedAll = filtered.match(regExPatterns['allIO']);

console.log(parsedAll);

//if we find, then go through each group and parse the specific element and add to main IO
if (parsedAll) {
	parsedAll.forEach(element => {
		//do this better eventually
		if (element.match(regExPatterns['digitalIn'])) {
			IOParse(element.match(regExPatterns['digitalIn'])[0], 'blue', 'input');
		}
		else if(element.match(regExPatterns['digitalOut'])){
			IOParse(element.match(regExPatterns['digitalOut'])[0], 'blue', 'output');
		}
		else if(element.match(regExPatterns['analogIn'])){
			IOParse(element.match(regExPatterns['analogIn'])[0], 'red', 'input');
		}
		else if(element.match(regExPatterns['analogOut'])){
			IOParse(element.match(regExPatterns['analogOut'])[0], 'red', 'output');
		}
		else if(element.match(regExPatterns['stringIn'])){
			IOParse(element.match(regExPatterns['stringIn'])[0], 'black', 'input');
		}
		else if(element.match(regExPatterns['stringOut'])){
			IOParse(element.match(regExPatterns['stringOut'])[0], 'black', 'output');
		}
		else if(element.match(regExPatterns['bufferIn'])) {
			IOParse(element.match(regExPatterns['bufferIn'])[0], 'black', 'input');
		}
	});
}


if(filtered.match(regExPatterns['paramFull'])){
	paramParse(filtered.match(regExPatterns['paramFull']))
}


function paramParse(input){
    input.forEach(element => {
        let parsed = element.replace(regExPatterns['paramType'], '');
        parsed = parsed.replace(/\s/g, '').replace(';','').split(',');
        parsed.forEach(item => {
            myParameters.push(item);
        })
    });
}


function IOParse(input, type, io) {
    let parsed = input.replace(/\s/g, '').replace(';', '').split(',');
    parsed.forEach(element => {
        let array = element.match(regExPatterns['array']);
        if (array) {
            let sigName = element.split('[',)[0];
            let tempArrayLength = array[array.length-1];
            let arrayLength;

            //special case for string/buffer input size vs full array size
            if(type==='black' && io === 'input' && array.length === 1) {
                myInputSignals.push({
                    'name': sigName,
                    'type': type,
                    });
            }
            else {
                if (isNaN(tempArrayLength)){
					//handle if constant is mistyped or otherwise doesn't exist.
					if (typeof myConstants[tempArrayLength] !== 'undefined'){
						arrayLength = myConstants[tempArrayLength];
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
                    if(io === 'input'){
                        myInputSignals.push({
                            'name': sigName + `[${i+1}]`,
                            'type':  type,
                        });  
                    }
                    else if (io === 'output') {
                        myOutputSignals.push({
                            'name': sigName + `[${i+1}]`,
                            'type':  type,
                        });
                    }
                }
            }
            
        }
        else {
            if(element.toLowerCase() === '_skip_'){
                if(io === 'input'){
                    myInputSignals.push({
                        'name': '',
                        'type': 'clear',
                    })
                }
                else if (io === 'output') {
                    myOutputSignals.push({
                        'name': '',
                        'type': 'clear',
                    })
                }
            }
            else {
                if(io === 'input'){
                    myInputSignals.push({
                        'name': element,
                        'type': type,
                        });
                }
                else if (io === 'output') {
                    myOutputSignals.push({
                        'name': element,
                        'type': type,
                        });
                }
            }
        }
    });
    
}