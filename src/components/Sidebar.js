import './Sidebar.css';
import Clean from '../images/clean.svg';
import Brushes from '../images/brushes.svg';
import Sellect from '../images/sellect.svg';
import Wash from '../images/wash.svg';
import Colors from '../images/colors.svg';
import Swap from '../images/swap.svg';
import Bubels from '../images/bubels.svg';
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

export function Sidebar({ isColorsPressed, isSelectPressed, ...props }) {
    const [color, setColor] = useState('#ff0000');
    const [showColorPicker, setShowColorPicker] = useState(false);

    return (
        <div className="side-bar">
            <ul style={{ position: 'relative', zIndex: '2' }}>
                <li className="icon"><a href="#sellect" onClick={isSelectPressed}><img src={Sellect} alt="selectbtn" /></a></li>
                <li className="icon" >
                    <a href="#colors" onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                        <img src={Colors} alt="colorsbtn" />
                    </a>
                    {showColorPicker && (
                        <div className="color-picker">
                            <CirclePicker
                                color={color}
                                onChangeComplete={updateColor => {
                                    setColor(updateColor.hex);
                                    isColorsPressed(updateColor.hex)
                                }}
                            />
                        </div>
                    )}
                </li>
                <li className="icon">
                    <a href="#clean"><img src={Clean} onClick={props.isCleanPressed} alt="cleanbtn" /></a></li>
                <li className="icon">
                    <a href="#brushes" onClick={props.isBrushPressed}>
                        <img src={Brushes} alt="brushesbtn" />
                    </a>
                </li>
                <li className="icon"><a href="#wash"><img src={Wash} alt="washbtn" /></a></li>
                <li className="icon"><a href="#swap"><img src={Swap} alt="swapbtn" /></a></li>
                <li className="icon"><a href="#bubels"><img src={Bubels} alt="Bublesbtn" /></a></li>
            </ul>
        </div>
    );
}