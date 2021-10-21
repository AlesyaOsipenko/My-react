import s from './Headline.module.css';
import likeIcon from "./../../assets/images/like.svg";
import dislikeIcon from "./../../assets/images/dislike.svg";
import Time from '../time/Time';
import Label from '../label/Label';
import ArticleHeader from '../article header/ArticleHeader';



function Headline(props) {
  return (

        <article className={s.headline}>
          <img className={s.thumbnail} src={props.thumbnail} alt="" />
            <div className={s.info} >
            <ArticleHeader title={props.title}/>
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
                  <Label style={props.style} label={props.label}/>
                  <Time/>
              </div>
            </div>
        </article>

    
  );
}

export default Headline;