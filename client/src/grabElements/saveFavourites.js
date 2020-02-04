import React, { Component } from 'react';

const styles = {
    favName: {
      fontSize: '1.2em',
      textAlign:"center"
    },
    small: {
        fontSize:'0.2em !important',
        margin: '1em'
    },
    deleteBtn: {
    textAlign: "center",
    width: '150px',
    margin: '0 auto',
    backgroundColor:"red",
    borderRadius:'10px',
    border:'1px solid red',
    cursor:'pointer',
    color:'black',
    fontFamily:'Arial',
    fontSize:'17px',
    padding:'9px 8px',
    textDecoration:'none',
    textShadow:'0px 1px 0px grey',
    opacity:0.7
    },//button that removes favourite album from the list
    center: {
        textAlign: "center",
        fontSize: '2.5em',
        color: "white"
    },
    favContainer: {
        width: "20%",
        display:"block"
    },
    favImg: {
        width: "100px",
        paddingTop:"20px",
        paddingBottom:"20px"
    },//image displayed when favourite album is added
    favArtist: {
        fontSize: "1em",
        textAlign: "center",
        paddingLeft:'3px'
    },//artist displayed when the album is added to favourites
    favBox: {
        display: "block",
        textAlign: "center",
        color: 'white',
        margin: "0 auto",
        border: '3px solid white',
        lineHeight:"10px"
    }

}

export class saveFavourite extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const storeFav = JSON.parse(localStorage.getItem("favList"))
    
        console.log(storeFav)

        // methods to update the favListList
        this.updateTodo = favList => {
            this.setState({ favList });
            // update todo
        };
        this.updateLocalStorage = favList => {
            localStorage.setItem("favList", JSON.stringify(favList));
        };
        let deleteCard = (index) => {
        // make a copy of the current cards items
        storeFav.splice(index, 1)
        //setting up new list after filtering out
        this.updateLocalStorage(storeFav);
        this.updateTodo(storeFav);
        // update the session storage and list
        return { storeFav }
    }
       
        return (
            <div style={styles.favContainer}>
                <h2 style={styles.center}> Favourites Added</h2>
                {storeFav && storeFav.map((value, index) => {
                    // if there is content inside the localStorage
                return (
                    <tr key={index} style={styles.favBox} >
                        <h3 style={styles.small}></h3>
                        <td style={styles.favName}>{value.name}</td> <br/>
                        <td style={styles.favArtist}><br/>{value.artistName}</td>
                        <img style={styles.favImg} src={value.image}></img>
                        <td><button data-index={index}style={styles.deleteBtn}  className='myButton' onClick={deleteCard}>✘ Remove</button></td>
                    </tr>

                    // <li key={index}>{value.name}</li>
                )
            })}
            </div>
        )
    }


}

export default saveFavourite;