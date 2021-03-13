import { createHeader } from './header/header';
import { createMain } from './main/main';
import { createElement, T, withAttr } from "./utils/utils";
import styles from './index.scss';

function loadcomponent() {
  const element = createElement('div',['container'],[
    createHeader(),
    createMain(),
  ]);
  return element;
}

document.body.appendChild(loadcomponent());
