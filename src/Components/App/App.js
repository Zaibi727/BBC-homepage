import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import News from '../News/News';
import Sport from '../Sport/Sport';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
         <div className="App">
            <Nav />
           
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/Sport" component={Sport}/>
        </Switch>
      <Footer />
      </div>
      </Router>
     
    );
  }
  }
  

export default App;
