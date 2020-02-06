import React from 'react';
import './Recipes.css';
import ModalCreate from './Recipe/Recipe';
import Recipechange from './Recipe/Recipechange';


//displays user CRUD options and calls RecipeTable without further auth to list recipes on login or refresh if there is a token
const Recipes = (props) => {
    return(
        <div className="splashdiv">
                <div className="createDiv">
                    {/* token called as props to allow users to submit items in the create modal */}
                    <ModalCreate token={props.token} />
                <br />
                    <Recipechange token={props.token} />
                <br />
                </div>
        </div>
    );
};

export default Recipes;