
import s from './Time.module.css';
import clock from "./../../assets/images/clock.svg";

function Time() {
    return (
    <div className={s.time} >
        <img className={s.timeIcon} src={clock} alt=""/>
        <span className={s.timeText}>2.00pm</span>
    </div>
    );
  }
  
  export default Time;