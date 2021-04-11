import React from "react";
import { storageHandler } from "../../utils/storage";
import styles from "./dialog.scss";

class DialogState{
    constructor(){
        this.trigger = []
    }
    triggerF(func){
        this.trigger.push(func)
    }
    openDialog(){
        this.trigger[0]()
    }
}

export const dialogstate = new DialogState

class Dialog extends React.Component{

    constructor(props){
        super(props);
        console.log(props,"pDD")
        dialogstate.triggerF(this.openDialog.bind(this))
    }
    openDialog(){
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
                <EntryAdd {...this.props} closeDialog={this.closeDialog.bind(this)}/>
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
        storageHandler.addEntry(newEntry);
        this.props.addEntry()
        this.props.closeDialog()
    }
    render(){
        return <div className={styles['dialogcontent']}>
            <input
                ref={inDR => this.inDRef = inDR}
                data-type="form_date"
                placeholder="Enter Date (yyyy-mm-dd)"
              />
              <input
                ref={inCR => this.inCRef = inCR}
                data-type="form_content"
                placeholder="Write entry here..."
              />
              <button
                type="button"
                className={styles["addbutton"]}
                onClick={this.addEntry.bind(this)}
              >
                + Add
              </button>
        </div>
    }
}

export default Dialog