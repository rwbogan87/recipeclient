import React, {useState, useEffect} from 'react';
import {Card, CardTitle, CardBody, CardText, CardGroup} from 'reactstrap';
import {Button} from 'reactstrap';
import './RecipeTable.css';
import APIURL from '../../../helpers/environment';
import pic from '../../../assets/bonfire.jpeg'

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

    useEffect(() => {
        fetchRecipes()
    }, []);

    // display status of recipepublic based on .public value
    
    // display delete button only if recipe is public
    
    // when called, maps over recipes (which have been changed by usestate through setRecipes) and assigns the different values to card items that are pieced together to form a `recipe` that gets displayed in the Refresh file with a passed token; Refresh is called in App whenever there is a token, and is auto displayed on app render or page refresh
    return recipes.map((recipes) => {

        const lockdisplay = () => {
            if (recipes.recipePublic === true) {
                return (null)
            } else {
                return (<b>Locked</b>)
            }
        }
        
        const buttondisplay = () => {
            if (recipes.recipePublic === true) {
                return (<Button className="deletebutton" onClick={(e) => { if (window.confirm('Are you sure you want to delete this item? This cannot be undone!')) {deleteRecipe(recipes)}}}>Delete</Button>
                )
            }
        }

        return(
        <CardGroup key={recipes.id}className="cardBody">
            <Card >
            <CardBody >
                <CardText>{recipes.id}</CardText>
                <CardTitle><b>{recipes.recipeName}</b></CardTitle>
                <CardText>Category: {recipes.recipeCategory}</CardText>
                <CardText>{recipes.recipeIngredients}</CardText>
                <CardText>{recipes.recipeInstructions}</CardText>
                {/* change later to reflect public/locked status */}
                <CardText>Creator: {recipes.chef}</CardText>
                <div className="buttondiv">
                {buttondisplay()}
                </div>
                <CardText>{lockdisplay()}</CardText>
            </CardBody>
            </Card>
        </CardGroup>
        )
    })
}

export default RecipeTable;
