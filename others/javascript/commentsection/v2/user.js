
function userController(){

  let loginstate = dataStorage.getUser() || {}
  let tempval = ""

  return {
    isLoggedIn : () => {
      return loginstate.isLoggedIn
    },
    getUser : () => {
      return loginstate.name
    },
    setLoginUser : (v) =>{
      tempval = v
    },
    setLoggedIn : () => {
      loginstate.isLoggedIn = true;
      loginstate.name = tempval
      dataStorage.setUser(loginstate)
    },
    setLoggedOut : () => {
      loginstate = {}
      dataStorage.setUser(loginstate)
    }
  }
}

const user = userController();

console.log(user.isLoggedIn())

function loginModal(){

  function setUserState() {
    user.setLoginUser(this.value)
  }

  function loginMe() {
    user.setLoggedIn()
    loadingUI()
  }

  return createElement('div',['modal'],[
    createElement('div',['modaltitle'],[
      withAttr(createElement('div',['cross']),{onclick:function () {modalHandler.closeModal()}})
    ]),
    withAttr(createElement('input',['inputlogin']),{onkeyup:setUserState,placeholder:"Enter username"}),
    withAttr(createElement('button',['loginbutton'],[T('Login')]),{onclick:loginMe})
  ])
}
