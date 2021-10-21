
import s from './Label.module.css'

function Label(props) {
    return (
        <span style={props.style} className={s.label} >{props.label}</span>
    );
    }
    export default Label;