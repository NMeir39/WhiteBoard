import React from 'react';
import { PaperScope } from 'paper';


var paper
var myPath;
var currX;
var currY;
var isDown = false;
// var segment = null;
var colorHex = '#ff0000';

export function Canvas(statesOfBottons) {

    statesOfBottons = statesOfBottons.statesOfBottons;
    console.log(statesOfBottons);

    function selectPath() {

        var canvas = document.querySelector('canvas');
        if (!paper) {
            paper = new PaperScope();
            // Create an empty project and a view for the canvas:
            paper.setup(canvas);
        }

        var circlePath = new paper.Path.Circle(new paper.Point(50, 50), 25);
        circlePath.fillColor = colorHex;

        // Create a symbol from the path:
        var symbol = new paper.Symbol(circlePath);

        var placed = symbol.place(paper.view.center);

        // Select the placed symbol:
        console.log(statesOfBottons.buttonSellectPressed);
        placed.selected = statesOfBottons.buttonSellectPressed;

        // Rotate the placed symbol by 45 degrees:
        // placed.rotate(45);

        // onMouseDrag();
    }

    // function onMouseDrag(event) {
    //     if (segment) {
    //         segment.point += event.delta;
    //         myPath.smooth();
    //     } else if (myPath) {
    //         myPath.position += event.delta;
    //     }
    // }


    function onMouseDown(event) {
        if (statesOfBottons.buttonBrushPressed) {
            isDown = true;
            var canvas = document.querySelector('canvas');
            if (!paper) {
                paper = new PaperScope();
                // Create an empty project and a view for the canvas:
                paper.setup(canvas);
            }
            // Create a Paper.js Path to draw a line into it:
            myPath = new paper.Path();
            myPath.strokeColor = colorHex;
            myPath.strokeWidth = 8;



        }
    }

    function onMouseMove(e) {
        if (statesOfBottons.buttonBrushPressed) {
            if (!isDown) return;
            var canvas = document.querySelector('canvas');
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            myPath.add(new paper.Point(currX, currY));


        }

        if (statesOfBottons.buttonSellectPressed) {
            paper.project.activeLayer.selected = false;
            if (e.item)
                e.item.selected = true;
        }
    }

    function onMouseUp(event) {
        if (statesOfBottons.buttonBrushPressed) {
            isDown = false
            var myCircle = new paper.Path.Circle({
                center: new paper.Point(currX, currY),
                radius: 3
            });
            myCircle.strokeColor = colorHex;
            myCircle.fillColor = colorHex;
        }
    }

    if (statesOfBottons.buttonSellectPressed) {
        console.log('in sellect pressed function');
        selectPath()

    }


    // function eraseTool(e) {


    // }



    return (
        <canvas className="canvas" onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} />
        // <canvas onMove={onMove} />
    );
}

