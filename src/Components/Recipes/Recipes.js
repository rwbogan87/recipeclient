import React, { useState, useEffect, } from 'react';
import './Recipes.css';
import ModalCreate from './Recipe/Recipe';
import Recipechange from './Recipe/Recipechange';
import RecipeTable from './Display/RecipeTable';
// import RecipeChange from './Recipe/Recipechange';


//displays user CRUD options and calls RecipeTable without further auth to list recipes
const Recipes = (props) => {
    return(
        <div className="splashdiv">
                <div className="createDiv">
                    <ModalCreate token={props.token} />
                <br />
                    <Recipechange token={props.token} />
                <br />
                </div>
            <br />
                <h1>Recipe Index</h1>
                <div className="tabledisplay">
                <br />
                    <RecipeTable token={props.token} />
                </div>
        </div>
    );
};

export default Recipes;