import React, { useState, useEffect } from 'react';
import Recipe from './Recipe/Recipe';

const Recipes = (props) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipe',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .then(json => setRecipes(json))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="mainDiv">
            <h1>Build recipe data in here</h1>
            <Recipe token={props.token}/>
        </div>
    );
};




export default Recipes;