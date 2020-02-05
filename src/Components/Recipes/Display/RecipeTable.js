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
        .catch(err => console.log(err))
    }

    const deleteRecipe = (recipe) => {
        fetch(`${APIURL}/recipe/${recipe.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
            // deletes recipe card then refetches data so it displays on refresh
        }).then(() => fetchRecipes())
    }

    // calls fetchrecipes each time recipetables is called within Recipes
    useEffect(() => {
        fetchRecipes()
    }, []);

    return recipes.map((recipes) => {
        return(
            <Card key={recipes.id}>
            <CardBody className="bg-image">
                <CardText>Recipe Number {recipes.id}</CardText>
                <CardTitle>Name: {recipes.recipeName}</CardTitle>
                <CardText>Category: {recipes.recipeCategory}</CardText>
                <CardText>{recipes.recipeIngredients}</CardText>
                <CardText>{recipes.recipeInstructions}</CardText>
                {/* change later to reflect public/locked status */}
                {/* <CardText>{recipes.recipePublic}</CardText> */}
                <CardText>Recipe From: {recipes.chef}</CardText>
                <br/>
                <Button className="button" onClick={(e) => { if (window.confirm('Are you sure you want to delete this item? This cannot be undone!')) {deleteRecipe(recipes)}}}>Delete</Button>
            </CardBody>
            </Card>
        )
    })
}

export default RecipeTable;