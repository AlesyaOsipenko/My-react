import s from './ChanelCard.module.css';

function ChanelCard(props) {
    return (
    <article className={s.chanel}>
    
          <img className={s.chanelIcon} src={props.logo} alt="thumbnail-img"/>
        <h4 className={s.chanelTitle}>{props.label}</h4>
      
    </article>
    );
  }





export default ChanelCard;