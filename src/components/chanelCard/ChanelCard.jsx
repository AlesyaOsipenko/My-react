import s from './ChanelCard.module.css';

function ChanelCard(props) {
    return (
    <div className={s.box}>
        <img className={s.chanelIcon} src={props.logo} alt=""/>
        <span className={s.chanelText}>{props.label}</span>
    </div>
    );
  }





export default ChanelCard;