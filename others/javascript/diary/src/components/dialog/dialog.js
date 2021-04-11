import React from "react";
import { storageHandler } from "../../utils/storage";
import styles from "./dialog.scss";

class DialogState{
    constructor(){
        this.trigger = []
        this.editId = 0
    }
    triggerF(func){
        this.trigger.push(func)
    }
    openDialog(id){
        if(id)this.editId = id
        else this.editId = 0
        this.trigger[0](id)
    }
    getEditId(){
        return this.editId
    }
}

export const dialogstate = new DialogState

class Dialog extends React.Component{

    constructor(props){
        super(props);
        console.log(props,"pDD")
        this.state = {
            editVal : null
        }
        dialogstate.triggerF(this.openDialog.bind(this))
    }
    openDialog(id){
        const dgId = id || dialogstate.getEditId()
        console.log(dgId,"ddid")
        if(dgId){
            const tmEntry = storageHandler.getEntries(dgId)[0]
            console.log(tmEntry)
            if(tmEntry){
                this.setState({editVal : tmEntry})
            }
        }else{
            this.setState({editVal : null})
        }
        
        this.dialogContainer.classList.add(styles['open'])
    }
    closeDialog(){
        this.dialogContainer.classList.remove(styles['open'])
    }
    render(){
        return <div className={styles['dialogwrapper']} ref={container => this.dialogContainer = container} >
            <div className={styles['dialogbox']}>
                <div className={styles['closesection']}>
                    <a onClick={this.closeDialog.bind(this)}>X</a>
                </div>
                <EntryAdd {...this.props} editVal={this.state.editVal} closeDialog={this.closeDialog.bind(this)}/>
            </div>
        </div>
    }
}

class EntryAdd extends React.Component{
    constructor(props){
        super(props)
        console.log(props,"pEA")
    }
    addEntry(){
        const date1 = new Date(this.inDRef.value);
        const newEntry = {
          year: date1.getFullYear(),
          month: date1.getMonth() + 1,
          day: date1.getDate(),
          content: this.inCRef.value,
          id: new Date().getTime(),
        };
        console.log(newEntry)
        if(this.props.editVal.id){
            console.log("updatethis",this.props.editVal.id)
            storageHandler.updateEntry(newEntry,this.props.editVal.id);
        }else{
            storageHandler.addEntry(newEntry);
        }
        
        this.props.addEntry()
        this.props.closeDialog()
    }
    // comp
    componentDidMount() {
        console.log("M p: ")
        let date1 = false
        console.log("T1: ", this)
        if(this.props.editVal){
            date1 = new Date(this.props.editVal.year, this.props.editVal.month - 1, this.props.editVal.day+1)
            date1 = date1.toISOString().split('T')[0]
            this.inCRef.value = this.props.editVal.content
            this.inDRef.value = date1
            console.log(date1)
        } else {
            this.inCRef.value = ''
            this.inDRef.value = ''
            console.log("T: ", this)
        }
    }
    // shouldComponentUpdate() {
    //     // return false;
    // }
    componentWillReceiveProps() {

    }
    componentDidUpdate() {
        console.log("U: p")
        let date1 = false
        console.log("T1: ", this)
        if(this.props.editVal){
            date1 = new Date(this.props.editVal.year, this.props.editVal.month - 1, this.props.editVal.day+1)
            date1 = date1.toISOString().split('T')[0]
            this.inCRef.value = this.props.editVal.content
            this.inDRef.value = date1
            console.log(date1)
        } else {
            this.inCRef.value = ''
            this.inDRef.value = ''
            console.log("T: ", this)
        }

        
    }
    componentWillUnmount() {
        
    }
    render(){
        console.log(this.props.editVal ,"edV")
        
        const inputDialog = <div className={styles['dialogcontent']}>
            <input
                ref={inDR => this.inDRef = inDR}
                data-type="form_date"
                placeholder="Enter Date (yyyy-mm-dd)"
              />
              <input
                ref={inCR => this.inCRef = inCR}
                data-type="form_content"
                // value={this.props.editVal ? this.props.editVal.content : ''}
                placeholder="Write entry here..."
              />
              <button
                type="button"
                className={styles["addbutton"]}
                onClick={this.addEntry.bind(this)}
              >
                {this.props.editVal ? 'Update' : '+ Add'}
              </button>
        </div>

        // let date1 = false
        // console.log("T1: ", this)
        // if(this.props.editVal){
        //     date1 = new Date(this.props.editVal.year, this.props.editVal.month - 1, this.props.editVal.day+1)
        //     date1 = date1.toISOString().split('T')[0]
        //     this.inCRef.value = this.props.editVal.content
        //     this.inDRef.value = date1
        //     console.log(date1)
        // } else {
        //     this.inCRef.value = ''
        //     this.inDRef.value = ''
        //     console.log("T: ", this)
        // }


        return inputDialog
    }
}

export default Dialog