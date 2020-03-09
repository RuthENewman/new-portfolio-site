import React, { Component } from 'react';


class Projects extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "",
    };
  }


handleClickReact = () => {
  this.setState({
    activeTab: "react",
  })
}

handleClickRubyOnRails = () => {
  this.setState({
    activeTab: "ruby-on-rails",
  })
}

handleClickVanillaJavaScript = () => {
  this.setState({
    activeTab: "vanilla-JavaScript",
  })
}

handleClickReset = () => {
  this.setState({
    activeTab: "",
  })
}

renderProjects = () => {
  if (this.state.activeTab === 'react') {
  return (
    <div className="mdl-tabs__panel" id="react-panel">

        <div id="project_card_1" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
            <div className="mdl-card__supporting-text">
              <p class="project-description">ZIMA: an e-commerce web app (Front End)</p>
            </div>
            <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/zima-frontend" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
              <a href="https://zima-ecommerce.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
            </div>
          </div>
        
          <div id="project_card_2" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
            <div className="mdl-card__supporting-text">
              <p class="project-description">Lunch in LDN</p>
            </div>
            <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/LunchInLDN" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 id="project-card-button" 
                 className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
              <a href="https://lunch-in-ldn.herokuapp.com/" 
                 target="_blank" rel="noopener noreferrer" 
                 id="project-card-button" 
                 className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
            </div>
          </div>

        <div id="project_card_2" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
          <div className="mdl-card__supporting-text">
            <p class="project-description">SONGLOBE: a web application where you can discover music from around the world</p>
          </div>
          <div className="upcoming">Upcoming project
          </div>
        </div>
    </div>)
  } else if (this.state.activeTab === 'vanilla-JavaScript') {
    return (
      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">

      <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
          <div className="mdl-card__supporting-text">
            <p class="project-description">30 vanilla JavaScript projects over 30 days challenge</p>
          </div>
          <div className="mdl-card__actions">
            <a href="https://github.com/RuthENewman/30vanillaJSprojects" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
          </div>
        </div>

        <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Make A Cake</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/MakeACake/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

        <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Cocktail Creator - Search by Spirit</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/CocktailCreator/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Talk To Type</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/TalkToType/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">TFL Times</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/TFLTimes/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Polly the Parrot</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/PollyTheParrot/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">One Season Following Another</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/OneSeasonFollowingAnother/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Noir Et Blanc</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/NoirEtBlanc/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">NET MULTI FLIX</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/NetMultiFlix/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Helter Skelter Crazy Filters</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/HelterSkelterCrazyFilters/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Avocado Craft Beer Latte</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/AvocadoCraftBeerLatte/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>
  </div>)
  } else if (this.state.activeTab === 'ruby-on-rails') {
     return (
     <div className="mdl-tabs__panel" id="ruby-on-rails-panel">
        <div id="project_card_4" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">My Gallery app: create your own gallery of your favourite artists and artworks!</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://github.com/RuthENewman/MyGalleryApp" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">GitHub</a>
                <a href="https://mygalleryapp.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
          </div>

          <div className="mdl-tabs__panel" id="ruby-on-rails-panel">
            <div id="project_card_4" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png)", backgroundPosition: "center"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">ZIMA: an e-commerce web app (Back End)</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://github.com/RuthENewman/zima-backend" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                GitHub</a>
                <a href="https://zima-ecommerce.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
            </div>
        </div>
      </div>)
  } else if (this.state.activeTab === "") {
    return (
    <div className="all">
      <div className="mdl-tabs__panel" id="react-panel">

          <div id="project_card_1" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">ZIMA: an e-commerce web app (Front End)</p>
              </div>
              <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/zima-frontend" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
              <a href="https://zima-ecommerce.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
          </div>

          <div id="project_card_2" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
            <div className="mdl-card__supporting-text">
              <p class="project-description">Lunch in LDN</p>
            </div>
            <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/LunchInLDN" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 id="project-card-button" 
                 className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
              <a href="https://lunch-in-ldn.herokuapp.com/" 
                 target="_blank" rel="noopener noreferrer" 
                 id="project-card-button" 
                 className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
            </div>
          </div>

          <div id="project_card_2" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
            <div className="mdl-card__supporting-text">
              <p class="project-description">Hotel Hunt</p>
            </div>
            <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/HotelHunt" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
              <a href="https://ruthenewman.github.io/HotelHuntJS/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              Hosted Site</a>
            </div>
          </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">

        <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
            <div className="mdl-card__supporting-text">
              <p class="project-description">30 Day challenge to build 30 vanilla JavaScript projects</p>
            </div>
            <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/30vanillaJSprojects" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">GitHub (with links)</a>
            </div>
          </div>

          <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Make A Cake</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/MakeACake/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

        <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Cocktail Creator - Search by Spirit</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/CocktailCreator/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Talk To Type</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/TalkToType/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">TFL Times</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/TFLTimes/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Polly the Parrot</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/PollyTheParrot/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">One Season Following Another</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/OneSeasonFollowingAnother/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Noir Et Blanc</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/NoirEtBlanc/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">NET MULTI FLIX</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/NetMultiFlix/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Helter Skelter Crazy Filters</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/HelterSkelterCrazyFilters/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">
          <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
              <div className="mdl-card__supporting-text">
                <p class="project-description">Avocado Craft Beer Latte</p>
              </div>
              <div className="mdl-card__actions">
                <a href="https://ruthenewman.github.io/AvocadoCraftBeerLatte/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
              </div>
              </div>
      </div>
    </div>

    <div className="mdl-tabs__panel" id="ruby-on-rails-panel">

    <div id="project_card_4" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
          <div className="mdl-card__supporting-text">
            <p class="project-description">My Gallery app: create your own gallery of your favourite artists and artworks!</p>
          </div>
          <div className="mdl-card__actions">
            <a href="https://github.com/RuthENewman/MyGalleryApp" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">GitHub</a>
            <a href="https://mygalleryapp.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
          </div>
      </div>

      <div id="project_card_1" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
      <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
            <div className="mdl-card__supporting-text">
              <p class="project-description">ZIMA: an e-commerce web app (Back End)</p>
            </div>
            <div className="mdl-card__actions">
              <a href="https://github.com/RuthENewman/zima-backend" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</a>
              <a href="https://zima-ecommerce.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</a>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

  render() {
    return (
      <div className="projects-page">
          <h1 className="projects-header">My Projects</h1>
          <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
          <div className="mdl-tabs__tab-bar">
            <p onClick={this.handleClickReact} className="mdl-tabs__tab is-active" id="react-tab">React</p>
            <p onClick={this.handleClickVanillaJavaScript} className="mdl-tabs__tab" id="vanilla-js-tab">Vanilla JavaScript</p>
            <p onClick={this.handleClickRubyOnRails} className="mdl-tabs__tab" id="ruby-tab">Ruby on Rails</p>
            <p onClick={this.handleClickReset} className="mdl-tabs__tab" id="all-tab">All</p>
          </div>
          </div>
          <div className="projects-grid">
          {this.renderProjects()}
          </div>
      </div>
    )
  }


}

export default Projects;
