import s from './Headline.module.css';
import likeIcon from "./../../assets/images/like.svg";
import dislikeIcon from "./../../assets/images/dislike.svg";
import clock from "./../../assets/images/clock.svg";


function Headline(props) {
  return (

        <article className={s.headline}>
          <img className={s.thumbnail} src={props.thumbnail} alt="" />
            <div className={s.info} >
              <h1 className={s.title}>{props.title}</h1>
              <div className={s.rating} >
                  <div className={s.like} >
                      <img className={s.likeIcon} src={likeIcon} alt=""/>
                      <span className={s.text}>10.8k</span>
                  </div>
                  <div className={s.dislike} >
                    <img className={s.dislikeIcon} src={dislikeIcon} alt=""/>
                    <span className={s.text} >1.4k</span>
                  </div>
              </div>
              <div className={s.wrapper} >
                    <span className={s.label} >{props.label}</span>
                    <div className={s.time} >
                        <img className={s.timeIcon} src={clock} alt=""/>
                        <span className={s.timeText} >2.00 pm</span>
                    </div>
              </div>
            </div>
        </article>

    
  );
}

export default Headline;