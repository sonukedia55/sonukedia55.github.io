import { createElement, T, withAttr,updateUI } from "./utils/utils";
import { createHeader,createMainBody } from "./main/main";
import styles from './index.scss';

function createBody() {
  return createElement('div',styles['container'],[
    createHeader(),
    createMainBody()
  ])
}

updateUI('body',createBody());
