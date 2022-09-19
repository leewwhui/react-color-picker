import {css} from '@emotion/css';
import { backgroundURL } from '../constants';

export const transparencyContainer = css`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 15px;
  border-radius: 12px;
  background-image: url(${backgroundURL});
`

export const transparencyHue = css`
  border-radius: 12px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

export const transparencyCursor = css`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid #eee;
  border-radius: 50%;
  box-sizing: border-box;
  transform: translate(-9px, -2px);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=);
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`

// .transparency-container {
//   position: relative;
//   margin-top: 10px;
//   width: 100%;
//   height: 15px;
//   border-radius: 12px;
//   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=);
// }

// .transparency-hue {
//   border-radius: 12px;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
// }

// .transparency-cursor {
//   position: absolute;
//   width: 18px;
//   height: 18px;
//   border: 2px solid #eee;
//   border-radius: 50%;
//   box-sizing: border-box;
//   transform: translate(-9px, -2px);
//   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=);
//   overflow: hidden;

//   div {
//     width: 100%;
//     height: 100%;
//   }
// }
