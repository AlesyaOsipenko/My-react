import Label from '../label/Label';
import Time from '../time/Time';
import s from './NewsCard.module.css';

function NewsCard(props) {
    return (
    <article className={s.newsCard}>
        <img className={s.newsPic} src={props.pic} alt="news-img"/>
        <div className={s.newsInner}>
            <h4 className={s.newsTitle}>{props.title}</h4>
                <div className={s.newsBox}>
                    <Label/>
                    <Time/> 
                </div>
            
        </div>
    </article>
    );
}


export default NewsCard;