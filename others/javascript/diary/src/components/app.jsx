import idx from "idx";
import React from "react";
import { storageHandler } from "../utils/storage";
import  Dialog ,{dialogstate}  from "./dialog/dialog";
import  Diary from "./diary/diary";
import styles from "./app.scss";

class Header extends React.Component {
  render() {
    return (
      <div className={styles["header"]}>
        <div className={[styles["headersection"], styles["title"]].join(" ")}>
          Diary
        </div>
        <div className={styles["headersection"]}>ReactJs</div>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("P:x ", props.match);
    this.state = {
      diaryList: [...storageHandler.getEntries()],
    };
    console.log(this.state);
  }

  addEntry() {
  
    console.log(this)
    this.setState({ diaryList: [...storageHandler.getEntries()] });
    console.log(this.state.diaryList,"stt");
  }

  openDialog(){
    console.log(this,"el")
    dialogstate.openDialog()
  }

  render() {
    return (
      <div>
        <Header />
        <Diary {...this.props} diaryList={this.state.diaryList} openDialog={this.openDialog.bind(this)} />
        <Dialog addEntry={this.addEntry.bind(this)}/>
      </div>
    );
  }
}

export default App;
