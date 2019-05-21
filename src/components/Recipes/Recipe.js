import React from 'react';
import axios from 'axios';


const Recipe = props => {
    return(
        <div>
            {console.log("RECIPE PROPS!!",props)}
            {props.recipeTitle}
            {console.log("RECIPE token",localStorage.getItem('jwt'))}
            
            
        </div>
    )
}



// class Recipe extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     componentDidMount() {
//         axios
//           .get(`https://foodie-portfolio.herokuapp.com/recipe`)
//           .then(res => console.log("GET REQUEST",res.data))
//           .catch(err => console.log(err));
//     }
    
//     render() {
//         return (
//             <div>
//             {console.log("RECIPE PROPS!!",this.props.recipe)}
//                {this.props.recipe.title}

//             </div>

//         )
//     }
// }

export default Recipe;