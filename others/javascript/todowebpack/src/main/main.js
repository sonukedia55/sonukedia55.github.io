import { createElement, T, withAttr } from "../utils/utils";
import styles from './main.scss';

export function eachTodo(data) {

  function checkboxChange() {
    console.log(this['data-id'])
    console.log(Object.keys(this))
  }

  function deleteTodo() {
    console.log(this['data-id'])
    console.log(Object.keys(this))
  }

  return createElement('div',[styles['each']],[
    createElement('div',[styles['todotext']],[
      withAttr(createElement('input',[styles['checkbox']],[]),{onchange : checkboxChange , 'data-id' : data.id , type : 'checkbox' , ...((data.status) ? {checked : 'true'} : {})}),
      createElement('span',[],[T(data.todo)]),
    ]),
    createElement('div',[styles['tododel']],[
      withAttr(createElement('div',[styles['cross']],[]),{onclick : deleteTodo , 'data-id' : data.id}),
    ])
  ]);
}

export function createMain() {
  const todos = [
    {
      todo : "Hey1",
      id : '11',
      status : true
    },
    {
      todo : "Hey2",
      id : '12',
      status : false
    },
  ]
  return createElement('div',[styles['main']],[
    createElement('div',[styles['todos']],todos.map(a=>{return eachTodo(a)})),
  ])
}
