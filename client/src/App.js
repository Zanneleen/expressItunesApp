import React,{Component} from 'react';
import itunesLogo from './itunesLogo.png';
import './App.css';
import { Albums } from './grabElements/albums';

class App extends Component {

  render() {
      return (
        <div className="App">
          {/*  */}
          <img className='itunesLogo' src = {itunesLogo}/>
          <Albums/>
        </div>
      );
    }
}

export default App;
