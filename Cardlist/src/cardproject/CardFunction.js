import React, { Component } from 'react';
import CardList from './CardList';
class CardFunction extends Component {
   constructor()
   {
       super();
       this.state={
           profile:[]
       }
   }
   componentDidMount(){
    this.setState({loading:true});
    fetch('https://api.github.com/users').then(response =>{
   return response.json();
  }).then(users =>{
    this.setState({profile:users});
  });
  }
   render() {
     
        return (
            <div>
                 <CardList profile={this.state.profile}/>
            </div>
        )
          
    }
}

export default CardFunction;