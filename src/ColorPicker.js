import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hue: 1,
            saturation: 0.75,
            lightness: 0.5
        }
    }
    hueUpdated = (event) => {
        const newHue = event.target.value
        this.setState({
            hue:newHue
        })
        console.log('updated hue', event.target.value)
    }

    saturationUpdated = (event) => {
        const newSaturation = event.target.value
        console.log("sat:" + newSaturation) 
        this.setState({
            saturation:newSaturation
        })
    }
    lightnessUpdated = (event) => {
        const newLightness = event.target.value
        console.log("light:" + newLightness) 

        this.setState({
              lightness:newLightness
        })
    }
     
    render() {
        return (
            <section>
            <section>
                <header>{this.state.ColorPicker}</header>
               hue: <input type="range" min="0" max="360" onInput={this.hueUpdated}/>
                saturation:<input type="range" min="0" step="5" max="100" onInput={this.saturationUpdated}/>
                lightness: <input type="range" min="0" step="5" max="100" onInput={this.lightnessUpdated}/>
            </section>
            <section style={{ backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`, height:'100em' }}>
            This Is Your Color
            </section>
            </section>
        );
    }
}


export default ColorPicker;