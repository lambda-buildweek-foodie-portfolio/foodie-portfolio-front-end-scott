import React from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';

import Authenticate from '../src/components/Authorization/Authenticate';
import CreatePost from './components/PostContainer/CreatePost';
import Login from './components/Authorization/Login';
import Portfolio from './components/Portfolio/Portfolio';
import Recipes from './components/Recipes/Recipes';
import Signup from './components/Authorization/SignUp';
import TopNav from '../src/components/TopNav/TopNav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RecipeData: [],
      filteredData: []
    };
  }


  componentDidMount() {
    axios
      .get("API_URL")
      .then(res => {
        this.setState({ RecipeData: res.data });
      })
      .catch(err => console.log(err));
  }

  submitRecipePost = newRecipePost => {
    this.setState({ RecipeData: newRecipePost });
  };



  
  render() {


    return (
      <div>
        <TopNav />
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/recipes" exact component={Recipes} /> 
          <Route path="/createpost" exact render={props => (<CreatePost submitRecipePost={this.submitRecipePost} {...props} />)} />        
  

      </div>
    );
  }

}

export default Authenticate(App);
