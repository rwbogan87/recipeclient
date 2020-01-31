import React, { useState, useEffect, } from 'react';
import './Recipes.css';
import RecipeCreate from './Recipe/Recipe';
import RecipeTable from './Display/RecipeTable';

// TRYING TO IMPLEMENT UPDATE FUNCTION
// import RecipeChange from './Recipe/Recipechange';

// const [recipes, setRecipes] = useState([]);
// const [updateActive, setUpdateActive] = useState(false);
// const [recipeChange, setrecipeChange] = useState({});



//displays user CRUD options and calls RecipeTable without further auth to list recipes
const Recipes = (props) => {
    return(
        <div className="splashdiv">
            <div className="createDiv">
                <h1>Create a New Recipe</h1>
                <RecipeCreate token={props.token} />
            <br />
                {/* <RecipeChange token={props.token} /> */}
            </div>
        <br />
            <div className="tabledisplay">
                <h1>Recipes</h1>
            <br />
                <RecipeTable token={props.token} />
            </div>
        </div>
    );
};

export default Recipes;