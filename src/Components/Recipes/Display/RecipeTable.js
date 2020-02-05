import React, {useState, useEffect} from 'react';
import {Card, CardTitle, CardBody, CardText} from 'reactstrap';
import {Button} from 'reactstrap';
import './RecipeTable.css';
import APIURL from '../../../helpers/environment';

//fetches all recipes and displays them in cards over in Recipes.js
const RecipeTable = (props) => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
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

    const deleteRecipe = (recipe) => {
        fetch(`${APIURL}/recipe/${recipe.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => fetchRecipes())
    }

    useEffect(() => {
        fetchRecipes()
    }, []);

    return recipes.map((recipes) => {
        return(
            <Card key={recipes.id}>
            <CardBody>
                <CardText>Recipe Number {recipes.id}</CardText>
                <CardTitle>{recipes.recipeName}</CardTitle>
                <CardText>{recipes.recipeCategory}</CardText>
                <CardText>{recipes.recipeIngredients}</CardText>
                <CardText>{recipes.recipeInstructions}</CardText>
                <CardText>{recipes.recipePublic}</CardText>
                <CardText>Recipe From: {recipes.chef}</CardText>
                <Button color="danger" onClick={(e) => { if (window.confirm('Are you sure you want to delete this item? This cannot be undone!')) {deleteRecipe(recipes)}}}>Delete</Button>
            </CardBody>
            </Card>
        )
    })
}

export default RecipeTable;