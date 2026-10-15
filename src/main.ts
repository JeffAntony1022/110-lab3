import Konva from "konva";

// first we need to create a stage
const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
});

// then create layer
const layer = new Konva.Layer();

// create our shape
// const circle = new Konva.Circle({
//     x: stage.width() / 2,
//     y: stage.height() / 2,
//     radius: 70,
//     fill: 'red',
//     stroke: 'black',
//     strokeWidth: 4,
// });

const lemon = new Konva.Group({
    x: stage.width()/2,
    y: stage.height()/2,
    draggable: true
});

const style = {
    fill: 'yellow',
    // stroke: 'black',
    // strokeWidth: 4
}

const body = new Konva.Ellipse({
    x: 0,
    y: 0,
    radiusX: 150,
    radiusY: 100,
    ...style
});

const left = new Konva.Ellipse({
    x: -125,
    y: 0,
    radiusX: 54,
    radiusY: 36,
    ...style
});

const right = new Konva.Ellipse({
    x: 125,
    y: 0,
    radiusX: 54,
    radiusY: 36,
    ...style
});

lemon.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
})

lemon.on('mouseout', () => {
    document.body.style.cursor = 'default';
});

lemon.on('mousedown', () => {
    lemon.to({
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 0.2
    })
});

lemon.on('mouseup', () => {
    lemon.to({
        scaleX: 1,
        scaleY: 1,
        duration: 0.2
    })
});

lemon.add(body, left, right);
layer.add(lemon);

// add the shape to the layer
// layer.add(circle);

// add the layer to the stage
stage.add(layer);