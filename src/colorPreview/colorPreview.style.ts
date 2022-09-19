import  {css} from '@emotion/css';
import { backgroundURL } from '../constants';

export const colorPreviewContainer = css`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #eee;
  background-image: url(${backgroundURL});
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`

// .color-preview-container {
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   border: 1px solid #eee;
//   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=");
//   overflow: hidden;

//   div {
//     width: 100%;
//     height: 100%;
//   }
// }
