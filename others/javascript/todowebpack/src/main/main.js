import { createElement, T, withAttr,updateUI } from "../utils/utils";
import { notifyHandler } from "../notify/notify";
import { updateOverall } from "../header/header";
import styles from './main.scss';

function updatingTodo(text) {
  updateUI('.todoall',todoHandler.getTodo().map(a=>{return eachTodo(a)}))
  updateOverall();
  if(text){
    notifyHandler.addNotify(text)
  }
}

export function eachTodo(data) {

  function checkboxChange() {
    todoHandler.updateStatus(this['data-id'])
    const updateEle = todoHandler.getTodo().filter(i=>{return i.id == this['data-id']})[0]
    const text = `${updateEle.todo} is marked as ${(updateEle.status) ? 'Checked' : 'Unchecked'}!`
    updatingTodo(text)
  }

  function deleteTodo() {
    todoHandler.deleteTodo(this['data-id'])
    updatingTodo()
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

export function todoHand() {
  let todos = [
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

  return {
    getTodo : () => {return todos},
    addTodo : (obj) => {todos.push(obj);console.log(todos);},
    deleteTodo : (id) => {todos = todos.filter(i=>{return i.id!=id})},
    updateStatus : (id) => {todos.forEach(i=>{i.status = (i.id==id ? (i.status ? false : true) : i.status);});}
  }
}
export const todoHandler = todoHand()

export function createMain() {

  function addTodo(ev) {
    todoHandler.addTodo({
      todo : this.value,
      id : '111',
      status : false
    })
    updatingTodo(`${this.value} added!`)
    this.value = ""
  }
  let todos = todoHandler.getTodo();

  let inputElement = withAttr(createElement('input',[styles['todoinput']],[]),{placeholder : 'Enter todo'})
  return createElement('div',[styles['main']],[
    createElement('div',[styles['todos']],[
      createElement('div',['todoall'],[...todos.map(a=>{return eachTodo(a)})]),
      createElement('div',[styles['each']],[
        createElement('div',[styles['todoinpu']],[
          inputElement
        ]),
        withAttr(createElement('div',[styles['todoadd']],[T('Add')]),{onclick : addTodo.bind(inputElement)}),
      ])
    ])
  ])
}
