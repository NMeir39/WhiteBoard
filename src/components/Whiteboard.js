import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import ColorPicker from './ColorPicker';
import React from 'react';

// import ZIndex from 'react-z-index' // component, util
// import { zIndex } from 'react-z-index' // decorator

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
            color: ''

        }


    }


    sellectPressed(e) {
        console.log('sellect');
        (!this.state.buttonSellectPressed) ? this.setState({
            buttonSellectPressed: true
        }) : this.setState({
            buttonSellectPressed: false
        })
    }

    BrushPressed(e) {
        console.log('brush');
        if (this.state.buttonBrushPressed === false)
            this.setState({
                buttonBrushPressed: true
            })
        else
            this.setState({
                buttonBrushPressed: false
            })
    }

    ColorPickerPressed(e) {

        if (this.state.buttonColorsPressed === false) {
            this.setState({
                buttonColorPressed: true

            })
            console.log('color pressed');
        }
        else {
            this.setState({
                buttonColorPressed: false
            })
            console.log('color unpressed');
        }

    }

    render() {
        
        console.log(this.state.color);
        return (
            <div className="App">
                <Canvas statesOfBottons={this.state} />
                <Navbar />
                <ColorPicker color={this.state.color} showColorPicker={this.state.buttonColorsPressed} style={{ position: 'relative', zIndex: '3' }} />
              
              <Sidebar
                    isColorsPressed={() => this.ColorPickerPressed()}
                    isSelectPressed={() => this.sellectPressed()}
                    isBrushPressed={() => this.BrushPressed()}
                    buttonsState={this.state}
                    style={{ position: 'relative', zIndex: '2' }}
                />
               
                
            </div>
        );
    }

    
}

export default Whiteboard;
