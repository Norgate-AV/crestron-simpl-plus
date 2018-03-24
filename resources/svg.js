const sigSpacing = 50;
const paramSpacing = 10;


let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let svgNS = svg.namespaceURI;

let maxSignals = ((myInputSignals > myOutputSignals) ? myInputSignals.length : myOutputSignals.length);
svg.setAttribute('width', 1000);
svg.setAttribute('height', maxSignals*sigSpacing + 100);


let rect = document.createElementNS(svgNS,'rect');
rect.setAttribute('x',200);
rect.setAttribute('y',10);
rect.setAttribute('width',500);
rect.setAttribute('height',maxSignals*sigSpacing+20);
rect.setAttribute('fill','rgb(175,175,175)');
//rect.setAttribute('stroke', 'black')
svg.appendChild(rect);



for (let i = 0; i < myInputSignals.length; i++) {
    let element = myInputSignals[i];
    createInput(sigSpacing*(i+1), element['type'], element['name']);

}

for (let i = 0; i < myOutputSignals.length; i++) {
    const element = myOutputSignals[i];
    createOutput(sigSpacing*(i+1), element['type'], element['name']);
}

for (let i = 0; i < myParameters.length; i++) {    
    const element = myParameters[i];
    createParam(sigSpacing*i, element);
}

document.body.appendChild(svg);

function createParam(y, name) {
    let paramBox = document.createElementNS(svgNS, 'rect');
    paramBox.setAttribute('x', 300);
    paramBox.setAttribute('y', y+10);
    paramBox.setAttribute('width', 300);
    paramBox.setAttribute('height', 50);
    paramBox.setAttribute('stroke', 'black');
    paramBox.setAttribute('fill', 'rgb(125,125,125)');

    let paramText = document.createElementNS(svgNS, 'text');
    paramText.innerHTML = name;
    paramText.setAttribute('x', 410);
    paramText.setAttribute('y', y+40);
    paramText.setAttribute('fill', 'black');
    paramText.setAttribute('font-family', 'Verdana');
    paramText.setAttribute('font-size', 14);

    svg.appendChild(paramBox);
    svg.appendChild(paramText);
}

function createInput(y, style,  name) {
    createLine(20, y, style, name);

}

function createOutput(y, style, name) {
    createLine(670, y, style, name);
}


function createLine(x, y, style, name) {
    let line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x);
    line.setAttribute('y1', y);
    line.setAttribute('x2', x+200);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', style);
    

    let textX;
    if (x < 500 ){
        textX = 150;
    }
    else {
        textX = 650;
    }
    let text = document.createElementNS(svgNS, 'text');
    text.innerHTML = name;
    text.setAttribute('x', textX);
    text.setAttribute('y', y-10);
    text.setAttribute('fill', 'black');
    text.setAttribute('font-family', 'Verdana');
    text.setAttribute('font-size', 14);


    svg.appendChild(line);
    svg.appendChild(text);
}