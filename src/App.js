
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
import image from "./assets/images/header-button.svg";
import thumbnail1 from "./assets/images/Icon.svg";
import thumbnail2 from "./assets/images/pieChart.svg";
import thumbnail3 from "./assets/images/calendar.svg";
import client from "./assets/images/client.png";
import logo from "./assets/images/logo.svg";
import ChanelCard from './components/chanelCard/ChanelCard';
import NewsCard from './components/newsCard/NewsCard';
import SectionHeader from './components/sectionTitle/SectionTitle';
import Choice from './components/choice/Choice';
import Navigation from './components/navigation/Navigation';
import icon1 from './assets/images/sidebarIcons/icon1.svg';
import icon2 from './assets/images/sidebarIcons/icon2.svg';
import icon3 from './assets/images/sidebarIcons/icon3.svg';
import icon4 from './assets/images/sidebarIcons/icon4.svg';
import icon5 from './assets/images/sidebarIcons/icon5.svg';
import icon6 from './assets/images/sidebarIcons/icon6.svg';
import icon7 from './assets/images/sidebarIcons/icon7.svg';


function App() {
  return (
    <div className="App">

      <header className="header">
        <div className="navigation">

            <div className="navigation-left">
              <Choice title="San Francisco, California" img={thumbnail1}/>
              <Choice title="Analysis" img={thumbnail2}/>
              <Choice title="Monthly" img={thumbnail3}/>
            </div>

            <div className="navigation-right">

                <div> 
                  <form className="header-form">
                  <input className="header-input" type="search" name="googlesearch" placeholder="Search for anything…"/>
                  </form>
                </div>
                <input className="header-btn" type="image" src={image} alt="header-button»"/>
                <img className="client-img" src={client} alt="client-img"/>
            </div>

        </div>

      </header>

      <aside className="sidebar">
        

        <div className="sidebar-top">

          <div className="logo-wrapper">
            <img className="logo" src={logo} alt="logo-img"/>
          </div>

              

                <ul className="navigationList">

                  <li className="navigationItem">
                
                    <Navigation title="Home" icon={icon1}/>
                  
      
                  </li>

                    
                    <Navigation title="Explore" icon={icon2}/>
                    <Navigation title="Saved" icon={icon3}/>
                    <Navigation title="Subscriptions" icon={icon4}/>
                    <Navigation title="Messages" icon={icon5}/>
                    <Navigation title="Settings" icon={icon6}/>
                    <Navigation title="Logout" icon={icon7}/>


                </ul>

            

              

      
        </div>
      
      
      
      
      
      </aside>



      <main className="main">
          <section className="channels">
          <SectionHeader title="Explore Channels"/>
          
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
          <SectionHeader title="Today's Headlines"/>
      
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

          <SectionHeader title="Featured News"/>
            
            <div className="news-wrapper">
            <NewsCard pic={pic1} title="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS"/>
            <NewsCard pic={pic2} title="Myanmar’s military seizes control of country ov er..." label="CNN NEWS"/>
            <NewsCard pic={pic3} title="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS"/>
            </div>
          </section>







      </main>


    </div>
  );
}

export default App;
