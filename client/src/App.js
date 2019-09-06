import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerCard from './Components/PlayerCards';
import { useFetch } from './Hooks/useFetch';
import PlayerCardsFunc from './Components/PlayerCardsFunc';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(res => this.setState({data : res}))
    .catch(err => console.log('error'))
  }

  // componentWillMount(){
  //   useFetch('http://localhost:5000/api/players', {isLoading:true, data: null});
  // }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced React Sprint Challenge:</h1>
        <h2>Women's Soccer Player Data</h2>
        <PlayerCardsFunc />
        {/* {this.state.data.map(player => {
          return(
            <div>
              <h1>{player.name}</h1>
              <h2>{player.country}</h2>
              <h3>Searches: {player.searches}</h3>
            </div>
          )
        })} */}
        <PlayerCard data={this.state.data}/>
      </header>
    </div>
  );
}
}

export default App;
