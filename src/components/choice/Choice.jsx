import s from './Choice.module.css';
import arrows from "./../../assets/images/arrows.svg";

function Choice (props) {
    return (

        <div className={s.wrapper}>
            <img className={s.thumbnail} src={props.img} alt="choice-img"/>
            <span className={s.span}>{props.title}</span>
            <img className={s.arrows} src={arrows} alt="arrows-img"/>
        </div>

    );


}

export default Choice;

