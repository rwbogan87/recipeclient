import React, {useState, useEffect} from 'react';
import {CardTitle, CardBody, CardText} from 'reactstrap';
import './RecipeTable.css';
import APIURL from '../../../helpers/environment';

//fetches all recipes and displays them in cards over in Recipes.js
const RecipeTable = (props) => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes= () => {
        fetch(`${APIURL}/recipe`,{
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(json => {console.log(json); setRecipes(json)})
        .then(console.log('testpoint 1'))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchRecipes();
    }, [])
    
    return recipes.map((recipes) => {
        return(
            <CardBody key={recipes.id}>
                <CardTitle>{recipes.recipeName}</CardTitle>
                <CardText>{recipes.recipeCategory}</CardText>
                <CardText>{recipes.recipeIngredients}</CardText>
                <CardText>{recipes.recipeInstructions}</CardText>
                <CardText>{recipes.chef}</CardText>
            </CardBody>
        )
    })
}

export default RecipeTable;