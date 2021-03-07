let commentList = [
  {
    comment: "Hey, This is a comment",
    user: "sonukedia",
    rating: 4,
    id: 1202,
  }
];

function addcomments(){
  let rateinput = document.querySelector("#rateinput").value
  let reviewinput = document.querySelector("#reviewinput").value
  commentList.push({
    comment : reviewinput,
    user : activeUser.username,
    rating : rateinput,
    id : (new Date()).getTime().toString().substr(0, 13)
  })
  localStorage.setItem(`comments/${prodId}`,JSON.stringify(commentList))
  loadComments()
  document.querySelector('.popup').style.display = "none"
}

function hoverStars(p){
  console.log(this,p);
}

function clickStars(p){
  console.log(this.num);
  document.querySelector('#rateinput').value = this.num;
}

function modifyPopupRate(){
  let ratingStars = document.querySelector('.chooserate');
  ratingStars.style.marginBottom = '15px';
  ratingStars.innerHTML = ""
  let rateinp = createElement('input',[],{'id':'rateinput'});
  //rateinp.style.display = 'none';
  ratingStars.appendChild(rateinp);

  for(let i=1;i<=5;i++){
    let stari = getStar('10px','grey');
    ratingStars.onmouseover = function(ij){hoverStars(ij)}(i);
    ratingStars.onmouseleave = function(){hoverStars(0)};
    ratingStars.onclick = clickStars.bind({num:i});
    ratingStars.appendChild(stari);
  }
}

function loadComments(){
  commentList = JSON.parse(localStorage.getItem(`comments/${prodId}`)) || [];
  let uiList = document.querySelector('.commentlist');
  uiList.innerHTML = ""
  let totalRate = 0;
  console.log(commentList)

  commentList.forEach((item, i) => {
    totalRate+=parseInt(item.rating)
    let each = createElement('div',['singlecomment'],{});
    let ratingdiv = createElement('div',['rating'],{});
    let ratingspan = createElement('span',[],{});
    //let ratingstar = createElement('div',['star'],{});
    ratingspan.textContent = item.rating;
    ratingspan.appendChild(getStar('4px','white'));
    ratingdiv.appendChild(ratingspan);
    let ratinghead = createElement('b',[],{});
    ratingdiv.appendChild(ratinghead);
    each.appendChild(ratingdiv);

    let ratingdesc = createElement('div',['desc'],{});
    ratingdesc.textContent = item.comment
    let ratingauthor = createElement('div',['author'],{});
    ratingauthor.textContent = item.user
    each.appendChild(ratingdesc);
    each.appendChild(ratingauthor);

    uiList.appendChild(each);
  });

  //Overall rating div

  let ratindDesc = document.querySelector('.ratingdesc');
  ratindDesc.innerHTML = ""
  console.log(totalRate)

  let rleft = createElement('div',['rleft'],{});
  rleft.textContent = (commentList.length) ? totalRate/commentList.length : 'NA';
  let star = createElement('div',['star'],{});
  rleft.appendChild(star);
  ratindDesc.appendChild(rleft);

  let rright = createElement('div',['rright'],{});
  rright.textContent = `${commentList.length} Rating & ${commentList.length} Reviews`;
  ratindDesc.appendChild(rright);

  modifyPopupRate()
}

loadComments();
