import React from 'react';
import { PaperScope } from 'paper';
import { MODES } from '../globals/WhiteBoard';

var paper;
var canvas;
var myPath;
var currX;
var currY;
var isDown = false;
var selectedItem = null;

var hitOptions = {
    stroke: true,
    tolerance: 5
};

const checkOrCreatePaperJsObject = () => {
    canvas = document.querySelector('canvas');
    if (!paper) {
        paper = new PaperScope();
        // Create an empty project and a view for the canvas:
        paper.setup(canvas);
    }
}

export function Canvas({ mode, colorHex, ...props }) {

    function onMouseDown(e) {
        isDown = true;
        checkOrCreatePaperJsObject();
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        const point = new paper.Point(currX, currY);
        if (mode === MODES.BRUSH) {
            // Create a Paper.js Path to draw a line into it:
            myPath = new paper.Path();
            myPath.strokeColor = colorHex;
            myPath.strokeWidth = 8;
        } else if (mode === MODES.CLEAN) {
            var hitResult = paper.project.hitTest(point, hitOptions);
            if (!hitResult) {
                if (selectedItem) {
                    selectedItem.bounds.selected = false;
                    selectedItem = null;
                }
                return;
            }
            hitResult.item.remove();
        }
    }

    function onMouseMove(e) {
        checkOrCreatePaperJsObject();
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        const point = new paper.Point(currX, currY);
        if (mode === MODES.BRUSH) {
            if (!isDown) return;
            myPath.add(point);
        } else if (mode === MODES.SELECT) {
            if (isDown) {
                if (selectedItem) {
                    selectedItem.position = point;
                }
            } else {
                var hitResult = paper.project.hitTest(point, hitOptions);
                if (!hitResult) {
                    if (selectedItem) selectedItem.bounds.selected = false;
                    return;
                }
                hitResult.item.bounds.selected = true;
                selectedItem = hitResult.item;
            }
        }
    }

    function onMouseUp(event) {
        isDown = false
    }

    return (
        <canvas className="canvas"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp} />
    );
}

Canvas.defaultProps = {
    colorHex: "#ff0000"
}