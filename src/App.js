import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import highLevelOpt from 'tar/lib/high-level-opt';
import { render } from '@testing-library/react';
import { parse } from '@fortawesome/fontawesome-svg-core';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
    <QuoteBox />
    </div>
    )
}
}



class QuoteBox extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {};
  };
  render() {
    return (
      <div id="quote-box" className="container">
       <div className="row align-items-end">
       <div className="col-align-self-end">
      <QuoteButton />
      
      </div>
      </div>
      </div>
    )
}
}



class QuoteButton extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      counter:0
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if(this.state.counter==8) {
      this.setState({
        counter: 1
      });
    } else {
      this.setState({
        counter: this.state.counter+1
      });
    }
  }
  render() {
    console.log(this.state.counter, "a")
    return (
      <div>
        <div className="flex-item">
          <Quotes counter={this.state.counter} />
        </div>
        <div id="author">- {quote[this.state.counter][1]}</div>
        <div> </div>
        <div className="flexitem">
          <button id="new-quote" onClick={this.handleClick} className="btn btn-light btn-block">What's going on here?</button>
      </div>
      <div>
      <Tweeter counter={this.state.counter} />
      </div>
    </div>
  )
}
}

let quote = [
  ["Hello", "It's Larry"],
  ["Please", "Larry here.."],
  ["Help", "It's me, Larry"],
   ["I", "Still Larry"],
   ["Am", "Larry Fisherman"],
   ["Stuck", "Still Larry Firsherman"],
  ["In", "C'mon it's me"],
  ["This", "Larry Fish"],
  ["Box", "Please help!"]];

class Quotes extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    };
  };
  render() {
    return (
    <div>
    {console.log(quote[this.props.counter])}
    <div id="text" className="flexitem">{quote[this.props.counter][0]}</div>
    </div>
  )}
}


class Tweeter extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    };
  };
  render() {
    let twitlink = "https://twitter.com/intent/tweet?url=https%3A%2F%2F".concat(quote[this.props.counter][0])
    console.log(twitlink)
    return (
      <div>
<a id="tweet-quote" className="btn btn-block" type="button" role="button" title="Share on twitter"
   href={twitlink}
   rel="noopener">
  Tweet me!
</a>
</div>
    )
  }
}



export default App;
