import { createElement, T, withAttr,updateUI } from "../utils/utils";
import styles from './notify.scss';

export function notifyHand() {
  let notifyList = []
  return {
    getNotify : () => {return notifyList},
    addNotify : (text) => {
      notifyList.unshift(text)
      notifyList = notifyList.slice(0,3)
      updateUI('.'+styles['notifies'],notifyHandler.getNotify().map(a=>{return createElement('div',[styles['eachnoti']],[T(a)])}))
    }
  }
}

export const notifyHandler = notifyHand();

export function createNotify() {
  return createElement('div',[styles['notify']],[
    createElement('div',[styles['notifies']],[])
  ])
}
