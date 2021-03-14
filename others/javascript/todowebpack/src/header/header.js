import { createElement, T, withAttr,updateUI } from "../utils/utils";
import styles from './header.scss';
import { createMain,todoHandler } from "../main/main";

export function updateOverall() {
  const heading = `${(todoHandler.getTodo().reduce((sum,i)=> sum+(i.status ? 1 : 0),0))} / ${todoHandler.getTodo().length}`
  updateUI('.'+styles['status'] , T(heading))
}

export function createHeader() {
  let todoList = todoHandler.getTodo()
  const heading = `${(todoList.reduce((sum,i)=> sum+(i.status ? 1 : 0),0))} / ${todoList.length}`
  return createElement('div',[styles['header']],[
    createElement('div',[styles['logo']],[T('Todo App')]),
    createElement('div',[styles['status']],[T(heading)]),
  ])
}
