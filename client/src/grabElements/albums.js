import React, { Component } from 'react';
import { Album } from './album';
import SaveFourites from './saveFavourites';
import 'font-awesome/css/font-awesome.min.css';



const styles = {
  albumsSearch: {
    background: "white",
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    opacity:0.5
  },//white box outside the search box
    itunes: {
     fontSize: "2em",
     color: "#fff" ,
     textDecoration: 'none'
  },
  Carousel: {
    maxWidth: "500px !important",
    margin: "0 3em",
    borderRadius: "30px"
  },
  searchContainer: {
    width: '25%',
    margin: '20px auto'
  },//container outside of the searchInput
  searchInput: {
    width: '100%',
    height: '40px',
    paddingLeft: '10px',
    paddingRight:'10px',
    border: 'none',
    borderBottom: '1px solid #ccc',
    fontSize: '20px',
    background: "grey",
    borderColor:'none'
  },//contains the text thats going to be searched
  searchInputHeader: {
    color:"black",
    fontSize:'13px',
    paddingBottom:'10px',
    fontStyle:'oblique',
    fontFamily:'Arial'
  },//the text inside the searchInput
  searchLabel: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    height: '40px',
    lineHeight: '40px',
    //left: '12px',
    fontSize: '1.4em',
    background: "none",
    color: "black",
    textAlign:"right",
    paddingLeft:"150px"
  },//search icon on the right side of the search input
  albumsContainer: {
    // the albums container
    display: "flex",
    textDecoration: 'none'
  },
  albums: {
    // margin: '0 auto'
    width: "90%",
    display: "flex",
    textDecoration: 'none'
  },
  
};

export class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClickFavourites = this.handleClickFavourites.bind(this);
  }

  handleSearch(query) {
    if(query){
      fetch(`/search/${query}`)
        .then(response => response.json())
        .then(data => this.setState({ albums: data }))
        .catch(error => console.error(error));
    }
  }

  componentDidMount() {
    this.handleSearch('Alice in Wonderland');
    // avengers will be searched by default
  }

  handleClick(event) {
    event.preventDefault();
    this.handleSearch(event.target.value);
  }

  handleClickFavourites(event) {
    event.preventDefault();
    alert("About to Add Something")
    // this.handleSearch(event.target.value);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSearch(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <header>
        </header>
        <div className="albums-search" style={ styles.albumsSearch }>
          <form id="searchbox" style={ styles.searchContainer }>
            <label style={ styles.searchLabel }>
              <i
                className="fa fa-search fa-3"
                aria-hidden="true"
                style={ styles.searchIcon }
                onClick={ this.handleClick } ></i> 
              <input
                type="text"
                search="search"
                style={ styles.searchInput }
                onKeyPress={ this.handleKeyPress }/>
            </label>
          </form>
        </div>
        <div className="albumsContainer" style={ styles.albums }>
          {/* Fetch the Movies and divide the screen by the Favourites */}
          <div className="movies">
            { this.state.albums.map((album, i) => (
              <Album key={ i } album={ album } />
            )) }
          </div>
          <SaveFourites/>         
        </div>

      </div>
    );
  }
}
