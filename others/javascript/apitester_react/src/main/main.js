import { createElement,createElement2, T, withAttr,updateUI } from "../utils/utils";
import { apiHandler, apiRequester } from "../api/api";
import styles from './main.scss';

export function createHeader() {
  return  <div className={styles['header']}>
            <div className={styles['logo']}>API Tester</div>
            <div className={styles['status']}>Demo Project</div>
          </div>
}

export function updateApiResponse(response) {
  response = (typeof response) != "string" ? JSON.stringify(response) : response
  updateUI('#responses',T(response))
  updateHistoryView()
}

function loadHistory() {
  const ix = this['data-i'];
  const historyVal = apiHandler.getApiHistory().filter((i,ind)=>{return ind==ix})[0]
  let dataH = historyVal.header
  apiHandler.updateHeaderAll(dataH)
  updateHeaderView()
  document.querySelector(`.${styles['apiurl']}`).value = historyVal.url
  document.querySelector(`.${styles['methodlist']}`).value = historyVal.method
  document.querySelector(`.${styles['reqdivtextarea']}`).value = historyVal.body
}

function updateHistoryView() {
  updateUI('#historylist',apiHandler.getApiHistory().map(historyListEach))
}

function addheader() {
  apiHandler.addApiHeader({key:'',value:''})
  updateHeaderView()
}

function editheader() {
  const i = this['data-i']
  const action = this['data-a']
  let req = {index:i,action:action}
  if(action == "k") req.key = this.value;
  if(action == "v") req.value = this.value;
  apiHandler.updateApiHeader(req)
  if(action == "d") updateHeaderView();
}

const headerListEach = (item,i) => {
  return <div className={styles['headereach']}>
            <input className={styles['headereachkey']} value={item.key} onkeyup={editheader} placeholder='Key' data-i={i} data-a='k' />
            <input className={styles['headereachvalue']} value={item.value} onkeyup={editheader} placeholder='Value' data-i={i} data-a='v' />
            <div className={styles['cross']} onclick={editheader} placeholder='Value' data-i={i} data-a='d' />
        </div>
}

function updateHeaderView() {
  updateUI('#headerslist',apiHandler.getApiHeader().map(headerListEach))
}

const historyListEach = (item,i) => {
  let title = "/"+item.url.split("/").slice(3).join("/")
  return createElement('div',styles['historyeach'],[
    withAttr(createElement('div',styles['historyhead'],T(title)),{onclick : loadHistory,'data-i':i}),
    createElement('div',styles['historybody'],[
      createElement('div',styles['historybodymethod'],T(item.method)),
      createElement('div',styles['historybodystatus'],T(item.status)),
    ])
  ])
}

export function createMainBody() {
  const methodListMap = (item) => {
    return withAttr(createElement('option',[],[T(item)]),{value : item});
  }

  function methodchange() {
    apiHandler.updateActiveMethod({method:this.value})
  }
  function bodyChange() {
    apiHandler.updateActiveMethod({body:this.value})
  }
  function urlChange() {
    apiHandler.updateActiveMethod({url:this.value})
  }

  return createElement('div',styles['main'],[
    createElement('div',styles['left'],[
      createElement('div',styles['lefttitle'],T('History')),
      createElement('div',styles['historylisthere'],apiHandler.getApiHistory().map(historyListEach),'historylist')
    ]),
    createElement('div',styles['right'],[
      createElement('div',styles['rightinner'],[
        createElement('h3',styles['apititle'],T('Test an API')),
        createElement('div',styles['apiurlbox'],[
          createElement('div',styles['lefturl'],[
            createElement('span',[styles['coltitle']],[T('Method')]),
            withAttr(createElement('select',styles['methodlist'],apiHandler.getApiType().map(methodListMap)),{onchange:methodchange})
          ]),
          createElement('div',styles['righturl'],[
            createElement('span',[styles['coltitle']],[T('API endpoint')]),
            withAttr(createElement('input',styles['apiurl']),{placeholder:'Enter URL',onkeyup : urlChange})
          ]),
          withAttr(createElement('button',styles['buttonsend'],T('SEND')),{onclick : apiRequester})
        ]),
        createElement('div',styles['requestapi'],[
          createElement('div',styles['headersdiv'],[
            createElement('span',[styles['coltitle']],[T('Headers')]),
            createElement('div',styles['headerslist'],apiHandler.getApiHeader().map(headerListEach),"headerslist"),
            withAttr(createElement('button',styles['headersaddbutton'],[T('+ Add header')]),{onclick:addheader}),
          ]),
          createElement('div',styles['requestbodydiv'],[
            createElement('span',[styles['coltitle']],[T('Request Body')]),
            withAttr(createElement('textarea',styles['reqdivtextarea'],[]),{placeholder:"Enter request body here",onchange:bodyChange})
          ])
        ])
      ]),
      createElement('div',styles['rightresponse'],[
        createElement('span',[styles['coltitle']],[T('Response')]),
        createElement('div',[styles['respbody']],[T('Response will be displayed here')],"responses")
      ])
    ])
  ]);

}
