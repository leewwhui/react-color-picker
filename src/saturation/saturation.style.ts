import {css} from '@emotion/css';


export const saturationContainer = css`
  width: 100%;
  height: 150px;
  position: relative;
  background-image: linear-gradient(to bottom, transparent, black),
    linear-gradient(to right, white, transparent);
`

export const saturationCursor = css`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid #eee;
  border-radius: 50%;
  box-sizing: border-box;
  transform: translate(-9px, -9px);
`

// .saturation-container {
//   width: 100%;
//   height: 150px;
//   position: relative;
//   background-image: linear-gradient(to bottom, transparent, black),
//     linear-gradient(to right, white, transparent);
// }

// .saturation-cursor {
//   position: absolute;
//   width: 18px;
//   height: 18px;
//   border: 2px solid #eee;
//   border-radius: 50%;
//   box-sizing: border-box;
//   transform: translate(-9px, -9px);
// }
