# react-color-pane

## In Chrome 
![Chrome](https://cdn.staticaly.com/gh/leewhui/image-store@master/myimages/react-color-pane-chrome.5kj04ajpuic0.gif)

## In Firefox or Safari etc
![Firefox](https://cdn.staticaly.com/gh/leewhui/image-store@master/myimages/react-color-pane-firefox.nynqqmkx3s0.gif)

```javascript
const [color, setColor] = useState({ r: 123, g: 123, b: 123, a: 0.5 });

<ReactColorPicker
  color={color}
  onChange={colors => setColor(colors.rgba)}
></ReactColorPicker>

```
