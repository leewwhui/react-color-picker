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
