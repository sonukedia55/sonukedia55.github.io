const prodId = 101;

document.querySelector('#crosspopup').onclick = function(){
  document.querySelector('.popup').style.display = "none"
};

document.querySelector('#rateButton').onclick = function(){
  document.querySelector('.popup').style.display = "flex"
};


function createElement(type,classList,attr){
  let newEle = document.createElement(type);
  if(classList.length)newEle.className = classList.join(" ")
  for(var k in attr){
    if(typeof attr[k] != 'function'){
      newEle.setAttribute(k,attr[k]);
    }
  }
  return newEle;
}

function getStar(size,color){
  let star = createElement('div',['star'],{});
  star.style.setProperty("--color", color);
  star.style.setProperty("--size", size);
  star.style.marginLeft = '5px';
  return star;
}
