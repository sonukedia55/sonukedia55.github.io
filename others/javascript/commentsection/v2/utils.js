function createElement(obj,classList,childList,id) {
  const el = document.createElement(obj);
  if(classList && classList.length){el.className = classList.join(" ")}
  if(childList){
    childList.forEach((item, i) => {
      el.appendChild(item)
    });
  }
  if(id)el.setAttribute('id',id)
  return el
}

function withStyle(el,stylelist) {
  Object.keys(stylelist).map((item, i) => {
    el.style[item] = stylelist[item]
  });
  return el
}

function withAttr(el,attr) {
  Object.keys(attr).forEach((item, i) => {
    // el.setAttribute(item,attr[item])
    el[item] = attr[item]
  });
  return el
}

function updateUI(el,container){
  const elm = document.querySelector(el)
  if(elm.children.length){
    elm.replaceChild(container,elm.firstChild)
  }else{
    elm.appendChild(container)
  }
}

const T = (t) => document.createTextNode(t)

function getStar(size, color) {
  let star = createElement("div", ["star"]);
  star.style.setProperty("--color", color);
  star.style.setProperty("--size", size);
  star.style.marginLeft = "7px";
  return star;
}

function modalStore() {
  return {
    openModal : (container) => {
      document.querySelector('#popup').style.display = "flex"
      container.classList.add('animate')
      updateUI('#popup',container);
    },
    closeModal : () => {
      let container = document.querySelector('#popup').firstChild
      if(container){
        container.classList.remove('animate')
        container.classList.add('rev-animate')
        setTimeout(()=>{document.querySelector('#popup').style.display = "none";updateUI('#popup',createElement('div',[]))},100)
      }
    }
  }
}

const modalHandler = modalStore()

function dataStorageM(){
  return {
    getUser : () => {
      return JSON.parse(localStorage.getItem('user'))
    },
    setUser : (user) => {
      localStorage.setItem('user',JSON.stringify(user));
    },
    getReviews : () => {
      return Object.keys(localStorage).filter(k=>(k.startsWith("review/"))).map(i=> JSON.parse(localStorage.getItem(i)));
    },
    addReview : (review) => {
      review.id = review.id ? review.id : new Date().getTime().toString().substr(0, 13);
      localStorage.setItem("review/"+review.id , JSON.stringify(review));
    },
    setReview : (review) => {
      localStorage.setItem("review/"+review.id , JSON.stringify(review));
    },
  }
}

const dataStorage = dataStorageM();
