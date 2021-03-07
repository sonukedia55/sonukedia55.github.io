let activeUser = {};

function loginUser() {
  let uname = this.value;
  console.log(this,uname)
  let uStore = JSON.parse(localStorage.getItem("uStore")) || [];
  let fndUser = uStore.filter(i=>{return i.username == uname});
  if(fndUser && fndUser.length){
    activeUser = fndUser[0]
    localStorage.setItem("cUser", JSON.stringify(activeUser));
  }else{
    activeUser = {username : uname , wishList : []}
    uStore.push(activeUser)
    localStorage.setItem("uStore", JSON.stringify(uStore));
    localStorage.setItem("cUser", JSON.stringify(activeUser));
  }
  userLoad()
}

function toggleWishList(e){
  let isActive = e.getAttribute('data-active');
  if(isActive==1){
    activeUser.wishList.splice(activeUser.wishList.indexOf(prodId), 1);
    e.className = "heartg"
  }else{
    activeUser.wishList.push(prodId);
    e.className = "heart"
  }
  e.setAttribute('data-active',-1*(isActive-1));
  updateUser()
}

function updateUser(){
  localStorage.setItem("cUser", JSON.stringify(activeUser));
  let uStore = JSON.parse(localStorage.getItem("uStore")) || [];
  uStore.forEach(i=>{i.wishList = (i.username == activeUser.username) ? activeUser.wishList : i.wishList });
  if(uStore && uStore.length){
    localStorage.setItem("uStore", JSON.stringify(uStore));
  }
}


function userLoad(){
  document.querySelector('#wishitem').className = "heartg";document.querySelector('#wishitem').setAttribute('data-active',0);
  if(localStorage.getItem("cUser")){
    activeUser = JSON.parse(localStorage.getItem("cUser"));
    if(activeUser.wishList.indexOf(prodId)!=-1){document.querySelector('#wishitem').className = "heart";document.querySelector('#wishitem').setAttribute('data-active',1);}
  }
  console.log(activeUser,"aU")
  let loginsection = $('#loginsection');
  loginsection.innerHTML = ""
  let inputUser = createElement('input',[],{'id':`username`,'placeholder':`Enter username`});
  if(activeUser.username) inputUser.value = activeUser.username
  let buttonLogin = createElement('button',[],{'type':`button`},["Login"]);
  buttonLogin.onclick = loginUser.bind(inputUser)
  loginsection.appendChild(inputUser);
  loginsection.appendChild(buttonLogin);
}

userLoad();
