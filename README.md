# react-color-picker-tool

color picker in react, write typescript, and support color dropper to get any color in webpage, use native api in Chrome, use canvas api in other browser

```bash
npm i react-color-picker-tool
```

[Try it online](https://subtle-horse-34504f.netlify.app/)

![react-color-picker](https://cdn.staticaly.com/gh/leewhui/image-store@master/myimages/react-color-picker.20x5y3hkgrpc.webp)

## In Chrome 
![Chrome](https://cdn.staticaly.com/gh/leewhui/image-store@master/myimages/react-color-pane-chrome.5kj04ajpuic0.gif)

## In Firefox or Safari etc
![Firefox](https://cdn.staticaly.com/gh/leewhui/image-store@master/myimages/react-color-pane-firefox.nynqqmkx3s0.gif)

## Quick Start

```javascript
import { useState } from "react";
import { ReactColorPicker } from 'react-color-picker-tool';

function App() {
  const [color, setColor] = useState({ r: 123, g: 123, b: 123, a: 0.5 });

  return <ReactColorPicker color={color} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>
}
```

## API
|             | type                     | default   | description                  |
|-------------|--------------------------|-----------|------------------------------|
| color       | colorParams               | "#ffffff" | Input color                  |
| width       | number/string             | "#ffffff" | width of the color picker panel  |
| onChange    | (color:ColorSet) => void |           | Color change callback        |
| hideEyeDrop | boolean                  | false     | Whether hidden eye dropper   |
| hidePresets | boolean                  | false     | Whether hidden preset colors |
| presetColors | Array<colorParams>      | []        | colors for preset            |

### colorParams
use [tinycolor2](https://github.com/bgrins/TinyColor) to handle the color input

#### Hex, 8-digit (RGBA) Hex
```javascript
<ReactColorPicker color={"#000"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>
```

#### RGB, RGBA
```javascript
<ReactColorPicker color={"rgb (255, 0, 0)"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={"rgb (255, 0, 0, .5)"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={{ r: 255, g: 0, b: 0 }} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={{ r: 255, g: 0, b: 0, a: 0.5 }} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>
```

#### HSV, HSVA
```javascript
<ReactColorPicker color={"hsv(0, 100%, 100%)"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={"hsva(0, 100%, 100%, .5)"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={{ h: 0, s: 100, v: 100 }} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={{ h: 255, s: 0, v: 0, a: 0.5 }} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>
```

#### HSV, HSVA
```javascript
<ReactColorPicker color={"hsl(0, 100%, 100%)"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={"hsla(0, 100%, 100%, .5)"} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={{ h: 0, s: 100, l: 100 }} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>

<ReactColorPicker color={{ h: 255, s: 0, l: 0, a: 0.5 }} onChange={colors => setColor(colors.rgba)}></ReactColorPicker>
```

### ColorSet
color results from callback
```javascript
export declare type HSV = {
    h: number;
    s: number;
    v: number;
};
export declare type HSVA = {
    h: number;
    s: number;
    v: number;
    a: number;
};
export declare type HSL = {
    h: number;
    s: number;
    l: number;
};
export declare type HSLA = {
    h: number;
    s: number;
    l: number;
    a: number;
};
export declare type vector2 = {
    x: number;
    y: number;
};
export declare type RGBA = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare type RGB = {
    r: number;
    g: number;
    b: number;
};
export declare type HEX = string;
export declare enum colorEnum {
    HEX = "hex",
    RGBA = "rgba",
    HSV = "hsv",
    HSL = "hsl"
}
export interface ColorSet {
    [colorEnum.HSV]: HSVA;
    [colorEnum.HSL]: HSLA;
    [colorEnum.HEX]: HEX;
    [colorEnum.RGBA]: RGBA;
}
```
