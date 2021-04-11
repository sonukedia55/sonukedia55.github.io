import React from "react";
import styles from "../app.scss";

class Diary extends React.Component {
  constructor(props) {
    super(props);
    console.log("P:Dr ", props.match);

    const { year, month } = props.match.params;

    this.state = {
      year: year,
      month: month
    };
    console.log(this.state,"st");
  }

  eachEntryN(item) {
    if (this.state.year && item.year != this.state.year) return null;
    if (this.state.month && item.month != this.state.month) return null;

    const datehere =
      item.year && item.month && item.day
        ? new Date(item.year, item.month - 1, item.day).toDateString()
        : "NA";
    return (
      <div key={item.id} className={styles["diaryeach"]}>
        <b>{datehere}</b>
        <p>{item.content}</p>
      </div>
    );
  }

  eachEntryLoad() {
      console.log(this.props.diaryList)
    if (this.props.diaryList.length) {
      return this.props.diaryList.map(this.eachEntryN.bind(this));
    } else {
      return (
        <div className={styles["diaryeach"]}>
          <b>No entry yet!</b>
        </div>
      );
    }
  }

//   setInputValueDate(e) {
//     const ty = e.currentTarget.dataset["type"];
//     if (ty) {
//       this.setState({ [ty]: e.currentTarget.value });
//     }
//   }


  render() {
      console.log(this.state,"ts")
    return (
      <div className={styles["main"]}>
        <div className={styles["diarysection"]}>
          <div className={styles["diarytitle"]}>
            <h2>All Records</h2>
            <div className={styles["openadd"]} onClick={this.props.openDialog}>+</div>
          </div>
          <div className={styles["diaryentries"]}>
            {/* <div className={styles["diaryeach"]}>
                <input
                  onKeyUp={this.setInputValueDate.bind(this)}
                  data-type="form_date"
                  placeholder="Enter Date (yyyy-mm-dd)"
                />
                <input
                  onKeyUp={this.setInputValueDate.bind(this)}
                  data-type="form_content"
                  placeholder="Write entry here..."
                />
                <button
                  type="button"
                  className={styles["addbutton"]}
                  onClick={this.addEntryClick.bind(this)}
                >
                  + Add
                </button>
              </div> */}
            {this.eachEntryLoad()}
          </div>
        </div>
      </div>
    );
  }
}

export default Diary;
