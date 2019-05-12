import React from 'react';

import Authenticate from '../src/components/Authorization/Authenticate';
import Backdrop from './components/Backdrop/Backdrop';
import PostList from '../src/components/PostContainer/PostList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import TopNav from '../src/components/TopNav/TopNav';
import SideDrawer from './components/SideDrawer/SideDrawer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    }
    console.log("sidedrawer",this.state.sideDrawerOpen)
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop closeClick={this.backdropClickHandler}/>;
    }

    return (
      <div style={{ height: '100%'}}>
        <TopNav drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <SearchBar />
        <PostList />
  
        <button onClick={localStorage.removeItem("user")}
        >Log out</button>
      </div>
    );
  }

}

export default Authenticate(App);
