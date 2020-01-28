import React, { useState } from 'react';
import './Recipe.css'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const RecipeCreate = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [recipePublic, setRecipePublic] = useState('');
    const [chef, setChef] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/recipe/create', {
            method: 'POST',
            body: JSON.stringify({
                recipeName: recipeName,
                recipeCategory: recipeCategory,
                recipeIngredients: recipeIngredients,
                recipeInstructions: recipeInstructions,
                recipePublic: recipePublic,
                chef: chef
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((recipeData) => {
            console.log(recipeData);
            setRecipeName('');
            setRecipeCategory('');
            setRecipeIngredients('');
            setRecipeInstructions('');
            setRecipePublic('');
            setChef('');
        })
    }

    return(
        <>
        <h3>Recipe Creation</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="recipename"/>
                <Input name="recipename" placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipecategory"/>
                <Input name="recipecategory" placeholder="Recipe Category" value={recipeCategory} onChange={(e) => setRecipeCategory(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipeingredients"/>
                <Input name="recipeingredients" placeholder="Recipe Ingredients" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipeinstructions"/>
                <Input name="recipeinstructions" placeholder="Recipe Instructions" value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="recipepublic"/>
                <p>make recipe public</p>
                <Input name="recipepublic" type="checkbox" onChange={() => 
                    {
                        setRecipePublic(!recipePublic)
                    }}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="chef"/>
                <Input name="chef" placeholder="Your Chef Name" value={chef} onChange={(e) => setChef(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
        </Form>
        </>
    )
}

export default RecipeCreate;