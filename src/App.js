import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import characters from "./characters.json";
import './App.css';



class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    clicked: [],
  };

  reset = () => {
    this.setState({
      score: 0,
      clicked: []
    });
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      console.log(this.state.clicked)
      this.setState({ 
        characters: characters.sort(function(a, b) {return 0.5 - Math.random()}),
        score: this.state.score + 1,
        topScore: Math.max(this.state.topScore, this.state.score + 1),
        message: "Right guess! Keep going!",
        clicked: this.state.clicked.concat(id) 
      });
    } else {
      this.setState({ 
        characters: characters.sort(function(a, b) {return 0.5 - Math.random()}),
        message: "Oops! Wrong guess! Try again"
      });
      return this.reset();
    }
  };

  
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}>
          {this.state.message}
        </Navbar>
        <Jumbotron />        
          {this.state.characters.map(characters => (
          <Card
            handleClick={this.handleClick}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
          ))}
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
