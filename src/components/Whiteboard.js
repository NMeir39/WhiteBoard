import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import React from 'react';
import { MODES } from '../globals/WhiteBoard';

class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonSellectPressed: false,
            buttonColorsPressed: false,
            buttonBrushPressed: false,
            buttonEreasetPressed: false,
            buttonWashtPressed: false,
            buttonSwaptPressed: false,
            mode: MODES.BRUSH,
            color: '#ff0000'
        }
    }

    selectPressed = (e) => {
        this.setState({ mode: MODES.SELECT })
    }

    brushPressed = (e) => {
        this.setState({ mode: MODES.BRUSH })
    }

    cleanPressed = (e) => {
        this.setState({ mode: MODES.CLEAN })
    }

    colorPickerPressed = (color) => {
        this.setState({ color })
    }

    render() {
        return (
            <div className="App">
                <Canvas mode={this.state.mode} colorHex={this.state.color} />
                <Navbar />
                <Sidebar
                    isColorsPressed={this.colorPickerPressed}
                    isSelectPressed={this.selectPressed}
                    isCleanPressed={this.cleanPressed}
                    isBrushPressed={this.brushPressed}
                    buttonsState={this.state}
                    style={{ position: 'relative', zIndex: '2' }}
                />
            </div>
        );
    }


}

export default Whiteboard;
