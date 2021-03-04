import React from 'react';
import './Sport.css';


class Sport extends React.Component {

  render() {
    return (
      <div className="News">
             <section  className="News-wrapper">
             <section className="news-wrapper">
               <div className="news-div-one">
                 <h2>
                   Italian ambassador to DR Congo killed in UN convoy attack
                 </h2>
                 <time><span><img style={{width:"20px"}} src="/images/clock-regular.svg"/></span> &nbsp; 6 housrs ago</time><br></br>
                 <a href="#"><i class="fa fa-share-alt fa-lg"></i></a>
               </div>

               <div className="news-div-two">
                   <figure>
                     <img src="/images/footbal.jpg"/>
                     </figure>
                   <div className="figcaption">
                     <p className="main-caption">Luca Attanasio was trvelling in UN convoy in the east of country</p>
                     <p className="tag">ARY</p>
                   </div>
                </div> 

                 <div>
                 <p id="article-heading-of-top-pic" className="article-paragraph">
                   Italy's ambassador to the Democratic Republic of Congo has been killed in an attack in the east of country, its foreign ministry has said.
                 </p>
                 <p  className="article-paragraph">
                  Luca Attanasio, 43, died in hospital on Monday after the United Nations convoy he was travelling in came under fire near Goma, a statement said.
                  The convoy reportedly belonged to the UN's World Food Programme (WFP).
                  An Italian military police officer travelling with the envoy and a Congolese driver were also killed.
                  "It is with deep sadness that the foreign ministry confirms the death, today in  Goma, of the Italian ambassador," the ministry's statement said.
                 </p>
                 <ul  className="article-paragraph">
                   <li><span>On patrol: Night vision in DR Congo</span></li>
                 </ul>
                 <p  className="article-paragraph">
                 The attack in North Kivu province is believed to have been an attempted kidnapping, according to officials at the nearby Virunga National Park.
                 </p>
                 </div>

                 <div>
                   <h2 className="article-mid-heading">
                     What do we know about the attack?
                   </h2>
                   <p  className="article-paragraph">
                      Mr Attanasio was a passenger in one of two vehicles travelling about 15km
                      (nine miles) north of Goma when the attack happened on Monday morning.
                       The vehicles were "ambushed by a group of six attackers, who fired warning
                      shots before taking all the passengers into the Virunga National Park", the
                      governor of North Kivu province, Carly Nzanzu, told the BBC.
                   </p>
                 </div>

                 <div className="news-div-two">
                 <figure>
                     <img src="/images/ground.jpg"/>
                     </figure>
                   <div className="figcaption">
                     <p className="main-caption">Luca Attanasio was trvelling in UN convoy in the east of country</p>
                     <p className="tag">REUTERS</p>
                   </div>
                 <p  className="article-paragraph">
                   Mr Attanasio was a passenger in one of two vehicles travelling about 15km
                   (nine miles) north of Goma when the attack happened on Monday morning.
                   The vehicles were "ambushed by a group of six attackers, who fired warning
                   shots before taking all the passengers into the Virunga National Park", the
                   governor of North Kivu province, Carly Nzanzu, told the BBC.
                   </p>
                </div> 

                <div className="news-div-two">
                <figure>
                     <img src="/images/beauty-one.jpg"/>
                     </figure>
                   <div className="figcaption">
                     <p className="main-caption">Luca Attanasio was trvelling in UN convoy in the east of country</p>
                     <p className="tag">Jeo</p>
                   </div>
                 <p  className="article-paragraph">
                   Mr Attanasio was a passenger in one of two vehicles travelling about 15km
                   (nine miles) north of Goma when the attack happened on Monday morning.
                   The vehicles were "ambushed by a group of six attackers, who fired warning
                   shots before taking all the passengers into the Virunga National Park", the
                   governor of North Kivu province, Carly Nzanzu, told the BBC.
                   </p>
                </div> 
             </section>
             
             {/*--article-page--*/}

             <section className="article-page-side-bar">
                  <div class="article-page-side-bar-div-one">
                    <h3>Top Stories</h3>
                    <p className="p-convert-heading">'A heartingbreaking milstone' -Biden</p>
                    <p>
                      President Joe Biden addresses the nation as the US monours 500,000 people lost to Covid-19.
                    </p>
                    <time><span><img style={{width:"20px"}} src="/images/clock-regular.svg"/></span> &nbsp; 6 housrs ago</time><br></br>
                    <p className="p-convert-heading"><i class="fa fa-play"></i>The 'colorful' lives lost to Covid</p>
                    <time><span><img style={{width:"20px"}} src="/images/clock-regular.svg"/></span> &nbsp; 10 housrs ago</time><br></br>
                    <p className="p-convert-heading">Facebook reverse ban on news in Australia</p>
                    <time><span><img style={{width:"20px"}} src="/images/clock-regular.svg"/></span> &nbsp; 2 housrs ago</time><br></br>
                  </div>

                  <div className="side-bar-div-two">
                    <h3>Features</h3>
                    <img src="/images/mall.jpg"/>
                    <p><a href="#">The sports star who could afford just one meal a day</a></p>
                    <img src="/images/tect-one.jpg"/>
                    <p>What 500,000 US deaths look like</p>
                    <img src="/images/vaccine.jpg"/>
                    <p>Is it worth tracking your carbon footprint?</p>
                    <img src="/images/world-pic-two.jpg"/>
                    <p>What 500,000 US deaths look like</p>
                    <img src="/images/reel-two.jpg"/>
                    <p><a href="#">Mr Attanasio was a passenger in one of two vehicles travelling</a></p>

                  </div>
             </section>
             </section>
      </div>
    );
  }
  }
  

export default Sport;