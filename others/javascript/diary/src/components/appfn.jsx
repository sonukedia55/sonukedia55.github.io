import React,{withState} from 'react';
import { storageHandler } from "../utils/storage";
import styles from './app.scss';

class Header extends React.Component {
    render() {
        return <div className={styles['header']} >
            <div className={[styles['headersection'], styles['title']].join(" ")} >Diary</div>
            <div className={styles['headersection']} >ReactJs</div>
        </div>
    }
}

function Body(props) {

    // constructor(props){
    //     console.log(props)
    //     super(props);
    //     console.log(this.props,props)
    //     this.diaryList = storageHandler.getEntries({})
    // }
    const diaryList = storageHandler.getEntries({})

    function eachEntry(item) {
        return <div className={styles['diaryentries']}>
            <div className={styles['diaryeach']}>
                <b>Jan 23, 2021</b>
                <p>{item.content}</p>
            </div>
        </div>
    }

    function eachEntryLoad() {
        return diaryList.map(eachEntry)
    }
    console.log(props)
    return <div className={styles['main']}>
        <div className={styles['diarysection']}>
            <div className={styles['diarytitle']}>
                <h2>All Records</h2>
                <div className={styles['openadd']}>+</div>
            </div>
            {eachEntryLoad()}
        </div>
    </div>

}

class App extends React.Component {
    
    render() {
        console.log(this.props)
        return (<div><Header /><Body {...(this.props)} /></div>);
    }
}

export default App;