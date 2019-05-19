import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
     
    }
  

  

  
    
    render() {
  
  
      return (
        <div>
            Your Portfolio
            <button onClick={localStorage.removeItem("user")}>Log out</button>
        </div>
      );
    }
  
  }
  
  export default Portfolio;
  