export function createElement(obj,classList,childList,id) {
  const el = document.createElement(obj);
  classList = Array.isArray(classList) ? classList : [classList]
  if(classList && classList.length){el.className = classList.join(" ")}
  if(childList){
    childList = Array.isArray(childList) ? childList : [childList]
    childList.forEach((item, i) => {
      el.appendChild(item)
    });
  }
  if(id)el.setAttribute('id',id)
  return el
}

export function createElement2(elm,{className,...args},...childList) {

  const {style , ...attr} = args
  let el = document.createElement(elm);

  className = Array.isArray(className) ? className : [className]
  if(className && className.length){el.className = className.join(" ")}
  console.log(childList,"chc")
  if(childList){
    childList = childList.flat()
    childList.forEach((item, i) => {
      if(typeof item != "object"){
        item = T(item)
      }
      el.appendChild(item)
    });
  }
  if(attr){
    el = withAttr(el,attr)
  }
  // if(id)el.setAttribute('id',id)
  return el
}

export function withStyle(el,stylelist) {
  Object.keys(stylelist).map((item, i) => {
    el.style[item] = stylelist[item]
  });
  return el
}

export function withAttr(el,attr) {
  Object.keys(attr).forEach((item, i) => {
    el[item] = attr[item]
  });
  return el
}

export function updateUI(el,container){
  const elm = document.querySelector(el)
  elm.innerHTML = ""
  if(Array.isArray(container)){
    container.forEach((item, i) => {
      elm.appendChild(item)
    });
  }else{
    elm.appendChild(container)
  }
}

export const T = (t) => document.createTextNode(t)
