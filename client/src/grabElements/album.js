import React, { Component } from 'react';
import './../../src/App.css';
import '../App.css'


const styles = {
  album: {
    overflow: 'hidden',
    width: '224px',
    height: '260px',
    borderRadius: '0 0 2px 2px',
    margin: '0px 20px 10px 5px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.10), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'
  },//outer frame of the single album displayed
  imageContainer : {
    margin: '10px auto 0 auto'
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  },//image displayed in 'album'
  albumText: {
    overflow: 'hidden',
    width: '210px',
    color: '#000',
    textDecoration: 'none'
  },//overall text inside album
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px 1px',
    textAlign: 'center',
    height: '22px',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
  },//name of album
  description: {
    fontSize: '13px',
    margin: '0',
    textAlign: 'center',
    height: '17px',
    overflow: 'hidden',
    color: '#fff'
  },//description of album
  blockInline: {
     display: 'inline-grid'
  },//display inside of the frame
  button: {
    textAlign: 'center',
    width: '200px',
    margin: '0 auto',
    backgroundColor:"white",
    borderRadius:'10px',
    border:'none',
    cursor:'pointer',
    color:'black',
    fontFamily:'Arial',
    fontSize:'17px',
    padding:'9px 8px',
    textDecoration:'none',
    textShadow:'0px 1px 0px grey',
    opacity:0.7
  }//add to favourites button
  
};

export class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: JSON.parse(localStorage.getItem("favList")) || [],
      title: ""
    }
    
  }
  
  updateTodo = favList => {
    this.setState({ favList });
};

updateLocalStorage = todoList => {
    localStorage.setItem("favList", JSON.stringify(todoList));
};

  render() {

    let handleFavClicked = (event)=> {
      window.location.reload()
      // refresh page for session storage to load
    let favItem = {};
    // will append the current fav item to an array

      event.preventDefault();


     let storeFavourites = [];
     console.log(favItem);
      let name = this.props.album.trackName
      let artistName = this.props.album.artistName
      let image = this.props.album.artworkUrl200

      const previousList = JSON.parse(localStorage.getItem("favList"));
      if (previousList !== "" && Array.isArray(previousList)) {
        storeFavourites = [...previousList];
        // grab session storage data and update to the storeFav
       }

      favItem = {name, artistName, image};
      // add the name and other relevant information such ass album and name to the object
      storeFavourites.push(favItem);

      console.log(storeFavourites);
      this.updateLocalStorage(storeFavourites);
      this.updateTodo(storeFavourites);
      // update the local storage and array too      
    }
      
    return (
      <header style={styles.blockInline}>
        <a className="album-container" style={ styles.album } href={ this.props.album.collectionViewUrl }>
          <div className="image-container" style={ styles.imageContainer }>
            <img className="img-responsive" style={ styles.image } src={ this.props.album.artworkUrl200 } alt={ this.props.album.artistName }/>
          </div>
          <div className="album-text" style={ styles.albumText }>
            <h5 className="name" style={ styles.name }>
            { this.props.album.artistName }
            </h5>
            <p className="description" style={ styles.description }>
              { this.props.album.trackName }
            </p>
          </div>
        </a>  
        <button style={styles.button} className='myButton' onClick={handleFavClicked}>♡ Add to Favourites</button>
      </header>
      
    );
  }
}