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
  return <div className={styles['historyeach']}>
          <div className={styles['historyhead']} onclick={loadHistory} data-i={i}>{title}</div>
          <div className={styles['historybody']}>
            <div className={styles['historybodymethod']}>{item.method}</div>
            <div className={styles['historybodystatus']}>{item.status}</div>
          </div>
        </div>
}

export function createMainBody() {
  const methodListMap = (item) => {
    return <option value={item} >{item}</option>
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

  return <div className={styles['main']}>

          <div className={styles['left']}>
            <div className={styles['lefttitle']}>History</div>
            <div className={styles['historylisthere']} id="historylist">{apiHandler.getApiHistory().map(historyListEach)}</div>
          </div>

          <div className={styles['right']} >

            <div className={styles['rightinner']} >
              <h3  className={styles['apititle']}>Test an API</h3>
              <div className={styles['apiurlbox']} >
                <div className={styles['lefturl']} >
                  <span  className={styles['coltitle']} >Method </span>
                  <select className={styles['methodlist']} onchange={methodchange}>{apiHandler.getApiType().map(methodListMap)}</select>
                </div>
                <div className={styles['righturl']} >
                  <span className={styles['coltitle']} >API endpoint</span>
                  <input className={styles['apiurl']} placeholder='Enter URL' onkeyup={urlChange} />
                </div>
                <button className={styles['buttonsend']} onclick={apiRequester}>SEND</button>
              </div>
              <div className={styles['requestapi']} >
                <div className={styles['headersdiv']} >
                  <span className={styles['coltitle']} >Headers</span>
                  <div className={styles['headerslist']} id="headerslist">{apiHandler.getApiHeader().map(headerListEach)}</div>
                  <button className={styles['headersaddbutton']} onclick={addheader} >+ Add header</button>
                </div>
                <div className={styles['requestbodydiv']} >
                  <span className={styles['coltitle']} >Request Body</span>
                  <textarea className={styles['reqdivtextarea']} placeholder="Enter request body here" onchange={bodyChange}></textarea>
                </div>
              </div>
            </div>

            <div className={styles['rightresponse']} >
                <span className={styles['coltitle']} >Response</span>
                <div className={styles['respbody']} id="responses" >Response will be displayed here</div>
            </div>

          </div>

    </div>;
}
