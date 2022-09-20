import {css} from '@emotion/css';

export const presetCell = css`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #eee;
  box-sizing: border-box;
  cursor: pointer;
`

export const presetContainer = css`
  margin-top: 10px;
  border-top: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;

  & div {
    margin-right: 9px;
    margin-top: 10px;
  }
`

