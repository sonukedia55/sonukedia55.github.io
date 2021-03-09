function doAuth() {
  if(user.isLoggedIn()){
    user.setLoggedOut()
    loadingUI()
  }else{
    modalHandler.openModal(loginModal())
  }
}

function loadHeader(){
  const headcontainer = createElement('div',['header'],[
    createElement('div',['box'],[
      createElement('div',['logo'],[T("Flipkart")])
    ]),
    createElement('div',['box'],[
      createElement('div',['userhead'],[T(user.isLoggedIn() ? user.getUser() : " ")]),
      withStyle(withAttr(createElement('div',['userhead'],[T(user.isLoggedIn() ? "Logout" : "Login")]),{onclick : doAuth }),{'cursor':'pointer'})
    ])
  ])

  updateUI('#header',headcontainer)
}
