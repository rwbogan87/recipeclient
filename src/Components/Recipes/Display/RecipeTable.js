import React, {useState, useEffect} from 'react';
import {CardTitle, CardBody, CardText} from 'reactstrap';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
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
            <CardBody key={recipes.id}>
                <CardText>{recipes.id}</CardText>
                <CardTitle>{recipes.recipeName}</CardTitle>
                <CardText>{recipes.recipeCategory}</CardText>
                <CardText>{recipes.recipeIngredients}</CardText>
                <CardText>{recipes.recipeInstructions}</CardText>
                <CardText>{recipes.chef}</CardText>
                <Button color="danger" onClick={() => {deleteRecipe(recipes)}}>Delete</Button>
            </CardBody>
        )
    })

}

export default RecipeTable;