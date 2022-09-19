# react-color-picker

```javascript
const [color, setColor] = useState({ r: 123, g: 123, b: 123, a: 0.5 });

<ReactColorPicker
  color={color}
  onChange={colors => setColor(colors.rgba)}
></ReactColorPicker>

```
