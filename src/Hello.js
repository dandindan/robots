import React, { Component } from 'react';
import'./Hello.css';

class Hello extends Component {
    render(){
        return (
   <div className='f1 tc'>
     <h1>Hello World</h1>
     <p>welcome to the React web site</p> 
     <p>{this.props.greet}</p>       
   </div>
    );
    }
}

export default Hello;