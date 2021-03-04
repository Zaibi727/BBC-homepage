import React from 'react';
import './Home.css';




class Home extends React.Component {

  render() {
    return (
      <div className="Home">
         <section className="home-top-portion">
              <div  className="top-portion-left"
               style={{
                   backgroundImage: "url('/images/biden-statement.jpg')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
               }}>
                   <div className="content-box">
                      <h3>
                         <a href="/news">
                           President Biden to declare major <br></br>disaster in Texas
                         </a>
                       </h3>
                       <p>
                           As electricity slowly returns to Texas, many resdients still do not have access to running water.
                       </p>
                       <a href="/news">
                           <span className="category-sign">|</span> &nbsp; &nbsp;
                           <span className="category">US & CANADA</span>
                       </a>
                  </div>
             </div>
              <div  className="top-portion-right">
                  <div style={{
                   backgroundImage: "url('/images/sos.jpg')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
               }} className="rhigt-four-box">
                     <div className="content-box">
                         <h4>
                           <a href="#">
                              America is back, US secretary of state tells BBC
                           </a>
                         </h4>  
                         <a href="#">
                             <span className="category-sign">|</span> &nbsp; &nbsp;
                             <span className="category">US & CANADA</span>
                         </a>
                     </div>
                  </div>
                  <div style={{
                   backgroundImage: "url('/images/mynmar.jpg')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
               }} className="rhigt-four-box">
                      <div className="content-box">
                        <h4>
                          <a href="#">
                            Two killed as Myanmar police disperse protesters
                          </a>
                        </h4>  
                        <a href="/news">
                             <span className="category-sign">|</span> &nbsp; &nbsp;
                             <span className="category">ASIA</span>
                        </a>
                      </div>
                  </div>
                  <div style={{
                   backgroundImage: "url('/images/footbal.jpg')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
               }} className="rhigt-four-box">
                    <div className="content-box">
                       <h4>
                          <a href="/sport">
                            Premier League: Southampton 1-1 Chelsea - Mount earns and converts penalty
                          </a>
                        </h4>  
                        <a href="/sport">
                             <span className="category-sign">|</span> &nbsp; &nbsp;
                             <span className="category">FOOTBALL</span>
                        </a>
                    </div>
                  </div>
                  <div style={{
                   backgroundImage: "url('/images/did i miss u.webp')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
               }} className="rhigt-four-box">
                    <div className="content-box">
                       <h4>
                          <a href="/news">
                            The ttiny celebration that can be good for you
                          </a>
                        </h4>  
                        <a href="/news">
                             <span className="category-sign">|</span> &nbsp; &nbsp;
                             <span className="category">DID YOU MISS?</span>
                        </a>
                   </div>
                  </div>
              </div>
         </section>

         {/*--top-section--*/} 

         <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">News</span>
            </a>
         </div>
          
          <section className="home-second-portion">
              <div>
                <a className="second-portion-content-box" href="#">
                      <img src="/images/racing.jpg"/>
                      <h3>Racing to screen the 'fake heiress' story</h3>
                      <p>How Anna Sorokin's life rights beacme hot property.</p>
                      <a className="category-tag">
                        <span  className="category-sign">|</span>&nbsp; &nbsp;
                        <span>News</span>
                     </a>
                </a>  
              </div>
              <div>
                <a className="second-portion-content-box" href="#">
                     <img src="/images/Russia.jpg"/>
                     <h3>Russia Navalny loses appeal against jailing</h3>
                      <p>It is the first of two scheduled appearnces in court on Saturday for the prominent Puin critic.</p>
                      <a className="category-tag">
                        <span  className="category-sign">|</span>&nbsp; &nbsp;
                        <span>News</span>
                      </a>
                </a>
              </div>
              <div>
              <a className="second-portion-content-box" href="#">
              <img src="/images/vaccine.jpg"/>
                  <h3>Women poses as 'grannies' to skip vaccine queue </h3>
                   <p>The pain wore glasses and wigs in order to try and receive a Covid-19 vaccine early in Florida.</p>
                      
                   <a className="category-tag">
                      <span  className="category-sign">|</span>&nbsp; &nbsp;
                      <span>News</span>
                  </a> 
              </a> 
              </div>     
          </section>

          {/*---news-section---*/}

          <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">Sport</span>
            </a>
         </div>

          <section className="home-second-portion">
          <div>
                <a className="second-portion-content-box" href="#">
                  <img src="/images/bull.jpg"/>
                  <h3>Hasenhuttl hopes draw will spark Saints</h3>
                  <p>
                      Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                  </p>
                  <a className="category-tag">
                      <span  className="category-sign">|</span>&nbsp; &nbsp;
                      <span>News</span>
                  </a>
               </a>    
              </div>
              <div>
                <a className="second-portion-content-box" href="/sport">
                  <img src="/images/ground.jpg"/>
                  <h3>Two more France players test positive</h3>
                  <p>
                      France's Gabin Viliere and Mohamed Haouas join Antoine Dupont in testing positive for Covid-19 and are doubts to face Scotland on Sunday, 28 February. 
                  </p>
                  <a className="category-tag">
                      <span  className="category-sign">|</span>&nbsp; &nbsp;
                      <span>News</span>
                  </a>
                </a>
              </div>
              <div>
                <a className="second-portion-content-box" href="#">
                   <img src="/images/footbal.jpg"/>
                  <h3>Osaka beats Brady to win Australian Open</h3>
                  <p>Naomi Osaka cements her place as the women's game by beating Jennifer Brady in the Australia Open final for a fourth Grand Slam title.</p>
                  <a className="category-tag">
                      <span  className="category-sign">|</span>&nbsp; &nbsp;
                      <span>News</span>
                  </a> 
                </a>
                  
              </div>
          </section>

          {/*---sport-portion---*/}

        <section>
        <div className="weather-heading-wrapper">
        <h2 className="weather-heading">SINGAPORE WEATHER</h2>
        <span className="weather-btn"><button>EDIT</button></span>
        </div>
         <div className="weather">
             <div>
             <i class="fa fa-cloud fa-3x"></i><span>SUN<br></br>31C<br></br>22C</span>
             </div>
             <div>
             <i class="fa fa-cloud fa-3x"></i><span>SUN<br></br>31C<br></br>22C</span>
             </div>
             <div>
             <i class="fa fa-cloud fa-3x"></i><span>SUN<br></br>31C<br></br>22C</span>
             </div>
             <div>
             <i class="fa fa-cloud fa-3x"></i><span>SUN<br></br>31C<br></br>22C</span>
             </div>
         </div>    
        </section>

        {/*--weather-reoport--*/}

        <section className="reel-wrapper" style= {{
                   backgroundImage: "url('/images/reel-cover.jpg')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   height: 500,
                  }}>
            <div className="reel-top">
                <div className="reel-top-heading">
                    <h2>REEL</h2>
                    <p>The most amazing video from the BBC</p>
                </div>
                <button className="reel-btn"><a>Visit Reel </a><i class="fa fa-arrow-right fa-lg"></i></button>
            </div>
            <div className="reel-images-grid-dispaly">
                <a href="#">
                  <div>
                    <img src="/images/reel-one.jpg"/>
                    <h3>The dark truth bheind the Dubai peincess who vanished</h3>
                  </div>
                </a>
                <a
                href="#">
                  <div>
                    <img src="/images/reel-two.jpg"/>
                    <h3>The simple ways to deactive your bad genes</h3>
                  </div>
                </a>
                <a href="#">
                  <div>
                    <img src="/images/reel-three.jpg"/>
                    <h3>Why the Swedes love doing something that Americans hate</h3>
                  </div>
                </a>
            </div>
        </section>

        {/*--Reel-portion--*/}
        <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">Asia News</span>
            </a>
         </div>
        <section className="asia-news">
              <a href="#">
                  <div>
                    <img src="/images/asia-one.jpg"/>
                    <h3>Facebook delets Myanmar military news site</h3>
                     <p>
                         Tens of thousands again protest against the coup undeterred after two protests died on Saturday.
                     </p>
                  </div>
                      <a className="category-tag">
                        <span  className="category-sign">|</span>&nbsp; &nbsp;
                        <span>ASIA</span>
                      </a>
                </a>
                <a href="#">
                  <div>
                    <img src="/images/asia-two.jpg"/>
                    <h3>How bushfires almost wiped out a 'cryptic' species</h3>
                     <p>
                         Already critically endangered, Australia's Kangaroo Island dunnart has lost most of its habit.
                     </p>
                  </div>
                      <a className="category-tag">
                        <span  className="category-sign">|</span>&nbsp; &nbsp;
                        <span>AUSTRALIA</span>
                      </a>
                </a>
                <a href="#">
                  <div>
                    <img src="/images/asia-three.jpg"/>
                    <h3>How Trump offered Kim a ride on Air Force One</h3>
                     <p>
                         A new BBC series shows how threats of nuclear war against NorthKorea gave way to a Trump-Kim bromance.
                     </p>
                  </div>
                     <a className="category-tag">
                        <span  className="category-sign">|</span>&nbsp; &nbsp;
                        <span>US & CANADA</span>
                      </a>
                </a>
                <a href="#">
                  <div>
                    <img src="/images/asia-four.jpg"/>
                    <h3>The rise of unsual vending machine in Singapore</h3>
                     <p>
                         Tens of thousands again protest against the coup undeterred after two protests died on Saturday.
                     </p>
                  </div>
                     <a className="category-tag">
                        <span  className="category-sign">|</span>&nbsp; &nbsp;
                        <span>Business</span>
                      </a>
                </a>
        </section>

        {/*--Asia news--*/}
          
        <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">Editor's Picks</span>
            </a>
         </div>

         <section className="editor-pics-wrapper">
         <section className="editor-picks">
             <div>
                <div>
                   <div className="editor-top-post">
                   <img className="editor-main-image" src="/images/editor-top-post.webp"/>
                         <div className="editor-content-on-pic">
                              <h3>The US' remote morthern outpost</h3>
                               <p>It may take haf a day to drive to civilization</p>
                              <a className="category-tag">
                                 <span  className="category-sign">|</span>&nbsp; &nbsp;
                                 <span>WORKLIFE</span>
                             </a>
                         </div>
                   </div>
                </div>
                {/*--editor-post top main--*/}
             <div className="editor-all-small-post">
                 <div>
                    <a >
                         <img src="/images/bull.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>The farmers turning off the taps</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>FOLLOW THE FOOD</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>How to make brillian meals in minute</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>FOOD</span>
                       </a>
                    </a>    
                </div>
                </div>
              </div>
                {/*editors-pick-all-posts*/}
                  
                  <div className="editor-pics-sidebar">
                      <h5>LATEST BUSINESS NEWS</h5>
                      <div>
                          <figure>1</figure>
                          <p>Travel industry begs for 'route out of crisis'</p>
                      </div>
                      <div id="dark">
                          <figure>2</figure>
                          <p>Maersk: Consumers can foot shipping's climate bill</p>
                      </div>
                      <div>
                          <figure>3</figure>
                          <p>Robinhood boss; GameStop episode 'unacceptable'</p>
                      </div>
                      <div id="dark">
                          <figure>4</figure>
                          <p>Uber drives are workers not self-empolyed</p>
                      </div>
                      <div>
                          <figure>5</figure>
                          <p>Huawei turns to pig garming as smartphone sales fall</p>
                      </div>
                  </div>
         </section>
         </section>
         

         {/*--editors-pick-portion--*/}

         <section className="future-wrapper" style= {{
                   backgroundImage: "url('/images/future-planet.jpg')",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   height: 500,
                  }}>
            <div className="future-top">
                <div className="reel-top-heading">
                    <h2>Future Planet</h2>
                    <p>Solutions for a sustainable world</p>
                </div>
                <button className="future-btn"><a>Visit Future Planet </a><i class="fa fa-arrow-right fa-lg"></i></button>
            </div>
            <div className="future-images-grid-dispaly">
                <a href="#">
                  <div>
                    <img src="/images/future-one.jpg"/>
                    <h3>The rise of 'surfonomics</h3>
                  </div>
                </a>
                <a
                href="#">
                  <div>
                    <img src="/images/future-two.jpg"/>
                    <h3>Germany's defence against the North Sea</h3>
                  </div>
                </a>
                <a href="#">
                  <div>
                    <img src="/images/future-three.jpg"/>
                    <h3>Rewilding Ireland's 'brown desert</h3>
                  </div>
                </a>
            </div>
        </section>

         {/*future-planet-portion*/}

         <section className="tech-related-portion">
             <div>
                 <a href="#">
                      <h2>TECHONOLGY OF BUSINESS</h2>
                      <img src="/images/tect-one.jpg"/>
                      <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>BUSINESS</span>
                       </a>
                       <h3>The hypercar maker who was told to give up his dream</h3>
                 </a>
             </div>
             <div>
                 <a href="#">
                      <h2>NEW TECH ECONOMY</h2>
                      <img src="/images/tech-two.jpg"/>
                      <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>BUSINESS</span>
                       </a>
                       <h3>Will your future boss be a computer?</h3>
                 </a>
             </div>
         </section>
         {/*--tech-related-portion--*/}
           
         <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">Featured video</span>
            </a>
         </div>
         <section className="feature-video-wrapper">
             <div className="feature-video-top">
                  <img src="/images/mynmar.jpg"/>
                  <div className="on-video-content">
                     <p className="h2">'Each one of thses people mattered'</p>
                      <p>Suzanne Brennan Fisterberg is using art to show the "depth and bereadth" of Covid's US death toll.</p>
                      <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>US & CANADA</span>
                       </a>
                  </div>
             </div>
             <div className="feature-video-end">
                  <ul className="feature-video-end-ul-one">
                       <li><a href="#">Recommended</a></li>
                       <li><a href="#">Most Watched</a></li>
                       <li><a href="#">Latest</a></li>
                  </ul>
                 <ul  className="feature-video-end-ul-two">
                     <li><a href="#"><img src="/images/footbal.jpg"/></a></li>
                     <li><a href="#"><h3>One-minute World News</h3></a></li>
                     <li><a href="#"><img src="/images/asia-three.jpg"/></a></li>
                     <li><a href="#"><h3>Whiley: 'it's neen the worst week of our...</h3></a></li>
                     <li><a href="#"><img src="/images/future-one.jpg"/></a></li>
                     <li><a href="#"><img src="/images/reel-two.jpg"/><h3>'I'm ecastatic I got such an amazing gift of ...</h3></a></li>
                 </ul>
             </div>
         </section>
         {/*feature video*/}
         
         <section className="bbcs-radio-wrapper">
            <section className="bbc-radio">
               <div className="bbc-div-one">
                  <a href="#"> BBC WORLD SERVICES</a>
               </div>
               <div className="bbc-div-two">
                  <span><a href="#"><i class="fa fa-volume-up fa-lg"></i><span className="on-air">ON AIR:</span> Newshour</a></span>
               </div>
            </section>
         </section>

         {/*--bbc-radio-portion--*/}
         
         <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">More around the BBC</span>
            </a>
         </div>

         <section className="more-arround-wrapper">
         <section className="more-around">
             <div className="more-around-side-bar">
                      <h5>CORRESPONDENTS</h5>
                      <div>
                          <img src="/images/sos.jpg" />
                          <p>Travel industry begs for 'route out of crisis'<em>By Anthony Zurcher</em></p>
                      </div>
                      <div id="dark">
                      <img src="/images/sos.jpg" />
                          <p>Travel industry begs for 'route out of crisis'<em>By Anthony Zurcher</em></p>
                      </div>
                      <div>
                      <img src="/images/sos.jpg" />
                          <p>Travel industry begs for 'route out of crisis'<em>By Anthony Zurcher</em></p>
                      </div>
                      <div id="dark">
                      <img src="/images/sos.jpg" />
                          <p>Travel industry begs for 'route out of crisis'<em>By Anthony Zurcher</em></p>
                      </div>
                      <div>
                      <img src="/images/sos.jpg" />
                          <p>Travel industry begs for 'route out of crisis'<em>By Anthony Zurcher</em></p>
                      </div>
             </div>
              {/*sidebar*/}
              <div className="more-aound-post-portion">
                  
              <div className="editor-top-post">
                   <img className="editor-main-image" src="/images/more-around-a.jpg"/>
                         <div className="editor-content-on-pic">
                              <h3>The US' remote morthern outpost</h3>
                               <p>It may take haf a day to drive to civilization</p>
                              <a className="category-tag">
                                 <span  className="category-sign">|</span>&nbsp; &nbsp;
                                 <span>WORKLIFE</span>
                             </a>
                         </div>
                   </div>
                  {/*main-post-bottom-more-around bbc*/}

                  <div className="editor-all-small-post">
                 <div>
                    <a >
                         <img src="/images/more-around-bb.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/mall.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/ground.jpg"/>
                         <h3>Hasenhuttl hopes draw will spark Saints</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>News</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/future-two.jpg"/>
                         <h3>The farmers turning off the taps</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>FOLLOW THE FOOD</span>
                       </a>
                    </a>    
                </div>
                <div>
                    <a className="second-portion-content-box" href="#">
                         <img src="/images/bull.jpg"/>
                         <h3>How to make brillian meals in minute</h3>
                         <p>
                           Ralph Hasenhuttl hopes Southampton's 1-1 draw with Chelsea is the start of his side returning to their normal selves as they ended a run of six successive defeats in the Premier League.
                        </p>
                        <a className="category-tag">
                           <span  className="category-sign">|</span>&nbsp; &nbsp;
                           <span>FOOD</span>
                       </a>
                    </a>    
                </div>
                </div>
              </div>  
         </section>

         </section>
         
         {/*--MORE-AROUND-BBC--*/}

         <section className="beauty">
             <div className="beauty-div-one">
                 <a href="#">
                      <h2>FOLLOW THE FOOD</h2>
                      <img src="/images/beauty-two.jpg"/>
                      <div className="beauty-content-on-pic">
                              <h3>The reason we're running out of farmers</h3>
                              <a className="category-tag">
                                 <span  className="category-sign">|</span>&nbsp; &nbsp;
                                 <span>FOLLOW THE FOOD</span>
                             </a>
                         </div>
                 </a>
             </div>
             <div className="beauty-div-two">
                 <a href="#">
                      <h2>TECHNOLOGY OF BUSINESS</h2>
                      <img src="/images/beauty-two.jpg"/>
                      <div className="beauty-content-on-pic">
                              <h3>The global race to produce hydrogrn offshore</h3>
                              <a className="category-tag">
                                 <span  className="category-sign">|</span>&nbsp; &nbsp;
                                 <span>BUSINESS</span>
                             </a>
                         </div>
                 </a>
             </div>
         </section>

         {/*beauty*/}
         <div className="short-category-name">
            <a  href="#">
                  <span className="category-sign">|</span> &nbsp; &nbsp;
                  <span className="category-heading">World in pictures</span>
            </a>
         </div>
          <section className="world-in-pic-wrapper">
          <section className="world-in-pic">
                 <div className="world-pic-div-one">
                      <img src="/images/world-pic-two.jpg"/>
                     <h3>Striking news picture from around the world</h3>
                          <a className="category-tag">
                              <span  className="category-sign">|</span>&nbsp; &nbsp;
                              <span>IN PICTURE</span>
                           </a>
                 </div>
                 <div className="world-pic-div-one">
                          <img src="/images/world-pic-two.jpg"/>
                          <h3>Finding tranquillity in ancient woodland</h3>
                          <a className="category-tag">
                              <span  className="category-sign">|</span>&nbsp; &nbsp;
                              <span>IN PICTURES</span>
                           </a>
                 </div>
         </section>
          </section>

         {/*--world-in-picture--*/}

         <section className="last-portion-wolrd-in-pic-wrapper">
         <section className="last-portion-wolrd-in-pic">
             <div>
             <img src="/images/world-pic-two.jpg"/>
                  <h3>Africa's top shots: Flammingos, flowes and flair</h3>
                  <a className="category-tag">
                    <span  className="category-sign">|</span>&nbsp; &nbsp;
                    <span>AFRICA</span>
                  </a>
             </div>
             <div>
             <img src="/images/world-pic-two.jpg"/>
                  <h3>Vaccine-trial participant portraits</h3>
                  <a className="category-tag">
                    <span  className="category-sign">|</span>&nbsp; &nbsp;
                    <span>IN PICTURE</span>
                  </a>
             </div>
             <div>
             <img src="/images/world-pic-two.jpg"/>
                  <h3>Student 'see the beauty in the ordianry'</h3>
                  <a className="category-tag">
                    <span  className="category-sign">|</span>&nbsp; &nbsp;
                    <span>IN THE PICTURE</span>
                  </a>
             </div>
         </section>
         </section>
         

         {/*--last-portion-of world in pic--*/}

         <footer>
            <section className="footer-lang-wrapper-1"></section>
            <div className="bbc-lang-heading">
                <h2>BBC IN OTHER LANGUAGES</h2>
            </div>
          <div className="footer-lang-wrapper-2">
             <div>
                 <h4><a href="#">Urdu</a></h4>
                 <p><a href="#">کیا ولی عہد محمد بن سلمان کے من مانی کرنے کے دن ختم ہو چکے؟</a></p>
             </div>
             <div>
                 <h4><a href="#">Vietnamese</a></h4>
                 <p><a href="#">Nhật ký hành trình nhập cư lậu</a></p>
             </div>
             <div>
                 <h4><a href="#">Indonesian</a></h4>
                 <p><a href="#">Apakah perangkat mata-mata nuklir memicu longsor gletser di Himalaya?</a></p>
             </div>
             <div>
                 <h4><a href="#">Japanese</a></h4>
                 <p><a href="#">イギリス国内の成人全員、7月末までにワクチン接種を目標＝ジョンソン首相</a></p>
             </div>
              {/*--urdu-vitename-indonesia-japanese*/}
              <div>
                 <h2><a>More Languages</a></h2>
                  <div className="more-lang-wrapper">
                    <ul>
                      <li><a href="#">Arabic<span>عربي</span></a></li>
                      <li><a href="#">Azeri<span>AZƏRBAYCAN</span></a></li>
                      <li><a href="#">Bangla<span>বাংলা</span></a></li>
                      <li><a href="#">Burmese<span>မြန်မာ</span></a></li>
                      <li><a href="#">Chinese<span>中文网</span></a></li>
                    </ul>
                    <ul>
                      <li><a href="#">French<span>AFRIQUE</span></a></li>
                      <li><a href="#">Hausa<span>HAUSA</span></a></li>
                      <li><a href="#">Hindi<span>हिन्दी</span></a></li>
                      <li><a href="#">Indonesian<span>INDONESIA</span></a></li>
                      <li><a href="#">Japanese<span> 日本語</span></a></li>
                    </ul>
                    <ul>
                      <li><a href="#">Kinyarwanda<span>GAHUZA</span></a></li>
                      <li><a href="#">Kirundi<span>KIRUNDI</span></a></li>
                      <li><a href="#">Marathi<span> मराठी</span></a></li>
                      <li><a href="#">Nepali<span>नेपाली</span></a></li>
                      <li><a href="#">Pashto<span>پښتو</span></a></li>
                    </ul>
                    <ul>
                      <li><a href="#">Parsian<span>فارسی</span></a></li>
                      <li><a href="#">Portugese<span>BRASIL</span></a></li>
                      <li><a href="#">Russian<span>НА РУССКОМ</span></a></li>
                      <li><a href="#">Sinhala<span>မြန်မာ</span></a></li>
                      <li><a href="#">SOMALI<span>SOMALI</span></a></li>
                    </ul>
                  </div>
              </div>
          </div>
            
         </footer>
         
      </div>
    );
  }
  }
  

export default Home;