import './Headline.css';
import likeIcon from "./../../assets/images/like.svg";
import dislikeIcon from "./../../assets/images/dislike.svg";
import clock from "./../../assets/images/clock.svg";


function Headline(props) {
  return (

        <article className="headline">
          <img className="thumbnail" src={props.thumbnail} alt="" />
            <div className="info" >
              <h1 className="title">{props.title}</h1>
              <div className="rating" >
                  <div className="like" >
                      <img className="like-icon" src={likeIcon} alt=""/>
                      <span className="text">10.8k</span>
                  </div>
                  <div className="dislike" >
                    <img className="dislike-icon" src={dislikeIcon} alt=""/>
                    <span className="text" >1.4k</span>
                  </div>
              </div>
              <div className="wrapper" >
                    <span className="label" >{props.label}</span>
                    <div className="time" >
                        <img className="time-icon" src={clock} alt=""/>
                        <span className="time-text" >2.00 pm</span>
                    </div>
              </div>
            </div>
        </article>

    
  );
}

export default Headline;