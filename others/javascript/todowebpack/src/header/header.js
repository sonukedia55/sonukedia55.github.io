import { createElement, T, withAttr } from "../utils/utils";
import styles from './header.scss';

export function createHeader() {
  return createElement('div',[styles['header']],[
    createElement('div',[styles['logo']],[T('Todo App')]),
    createElement('div',[styles['status']],[T('5 / 8')]),
  ])
}
