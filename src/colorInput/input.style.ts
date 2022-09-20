import {css} from '@emotion/css';

export const inputCell = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  input {
    text-align: center;
    height: 20px;
    outline: none;
  }

  span {
    cursor: ew-resize;
    user-select: none;
  }
`

