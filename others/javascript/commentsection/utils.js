const prodId = 101;
const $ = (e)=>{
  return document.querySelector(e);
}

function createElement(type, classList, attr,childs) {
  let newEle = document.createElement(type);
  if (classList.length) newEle.className = classList.join(" ");
  for (var k in attr) {
    if (typeof attr[k] != "function") {
      newEle.setAttribute(k, attr[k]);
    }
  }
  if(childs){
    childs.forEach((item, i) => {
      if(typeof item != "object"){
        newEle.textContent = item
      }else{
        newEle.appendChild(item);
      }
    });
  }
  return newEle;
}

function getStar(size, color) {
  let star = createElement("div", ["star"], {});
  star.style.setProperty("--color", color);
  star.style.setProperty("--size", size);
  star.style.marginLeft = "5px";
  return star;
}

function EventEmitter() {
  this.events = {};

  this.emit = function(eventName, data) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => {
        fn.call(null, data);
      });
    }
  }
  this.subscribe = function(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventFn) => fn !== eventFn
      );
    };
  }
}

let emitter = new EventEmitter();
