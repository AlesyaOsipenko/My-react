
import './App.css';
import Headline from './components/headline/Headline';
import img1 from "./assets/images/image1.jpg";
import img2 from "./assets/images/image2.jpg";
import img3 from "./assets/images/image3.jpg";
import img4 from "./assets/images/image4.jpg";
import img5 from "./assets/images/image5.jpg";
import img6 from "./assets/images/image6.jpg";
import logo1 from "./assets/images/logo1.png";
import logo2 from "./assets/images/logo2.jpg";
import logo3 from "./assets/images/logo3.jpg";
import logo4 from "./assets/images/logo4.jpg";
import logo5 from "./assets/images/logo5.jpg";
import logo6 from "./assets/images/logo6.jpg";
import pic1 from "./assets/images/pic1.jpg";
import pic2 from "./assets/images/pic2.jpg";
import pic3 from "./assets/images/pic3.jpg";
import ChanelCard from './components/chanelCard/ChanelCard';
import NewsCard from './components/newsCard/NewsCard';


function App() {
  return (
    <div className="App">

      <header className="header">Header</header>
      <aside className="sidebar">aside</aside>
      <main className="main">
          <section className="channels">
          <h2 className="title">Explore Channels</h2>
            <div className="channel-categories">
              <ChanelCard label="FOX NEWS" logo={logo1} />
              <ChanelCard label="CW6 NEWS" logo={logo2} />
              <ChanelCard label="ABC NEWS" logo={logo3}/>
              <ChanelCard label="AL JAZEERA" logo={logo4} />
              <ChanelCard label="BBC NEWS" logo={logo5} />
              <ChanelCard label="CNN NEWS" logo={logo6}/>
            </div>
          </section>


          <section className="headlines">
      <h2 className="block-title">Today's Headlines</h2>
      <div className="block-content">
      <Headline title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" />
      <Headline title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS" />
      <Headline title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS" />
      <Headline title="Mother who left her baby" thumbnail={img4} label="ABC NEWS" />
      <Headline title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS"  />
      <Headline title="World Cup: Popular items" thumbnail={img6} label="CNN NEWS" />
      </div>
          </section>


          <section className="news">
            <h2 className="news-title">Featured News</h2>
            <div className="news-wrapper">
            <NewsCard pic={pic1} title="Travellers to pay more than $2K, Trudeau says"/>
            <NewsCard pic={pic2} title="Myanmar’s military seizes control of country ov er..."/>
            <NewsCard pic={pic3} title="Pressure builds for Biden to cancel other pipeline..."/>
            </div>
          </section>







      </main>


    </div>
  );
}

export default App;
