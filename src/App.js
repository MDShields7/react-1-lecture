import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: 'your name here',
      picture: 'your URL here',
      friends: [{name: 'Kramer', picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Cosmo_Kramer.jpg/250px-Cosmo_Kramer.jpg'}],
    }
    this.updateName = this.updateName.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  updateName (event){
    // console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }
  updatePicture (event){
    this.setState({
      picture: event.target.value
    });
  }

  clearFields(event){
    this.setState({name: 'input name',})
  }

  addFriend(event){
    const newFriend = {name: this.state.name, picture: this.state.picture};
    // this.state.friends.push({name: this.state.name, picture: this.state.picture})
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({friends: friendsCopy});
  }

  render() {
    // const name = this.state.name;
    // const picture = this.state.picture;
    const {name, picture, friends} = this.state;
    console.log(this.state);
    return (
      
      <div>
        <div>
          Name: <input
            value={name}
            // onChange={this.updateName} />
            onChange={e => this.setState({name: e.target.value})}/>
          {name}
        </div>
        <div>
          Picture URL: <input 
            value={picture} 
            onChange={this.updatePicture}/>
          {picture}
        </div>
        <button onClick={this.addFriend}>Add Friend</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}{' '}&nbsp;
            Picture: <img src={friend.picture}/>
            </div>
        })}</div>
      </div>
    );
  }
}

export default App;
export const JT = 'awesome';
