import React, { useState, useEffect } from 'react';
import './Recipe.css'
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../../../helpers/environment';

//makes a new Recipe inside a form embedded in a modal
const RecipeCreate = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [recipePublic, setRecipePublic] = useState(true);
    const [chef, setChef] = useState('');
    const [recipeId, setRecipeId] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/recipe/update/${recipeId}`, {
            method: 'PUT',
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
        })
        .then((recipeData) => {
            console.log(recipeData);
            setRecipeId('');
            setRecipeName('');
            setRecipeCategory('');
            setRecipeIngredients('');
            setRecipeInstructions('');
            setRecipePublic('');
            setChef('');
            console.log('recipe successfully updated');
        })
    }
    
    return(
        <>
        <div className="maindiv">
        <h3>Update a Recipe</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="recipeid"/>
                <Input name="recipeid" placeholder="Recipe Id" value={recipeId} onChange={(e) => setRecipeId(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipename"/>
                <Input name="recipename" placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipecategory"/>
                <Input name="recipecategory" placeholder="Recipe Category" value={recipeCategory} onChange={(e) => setRecipeCategory(e.target.value)}/>
            </FormGroup>
            <FormGroup className="textarea">
                <Label htmlFor="recipeingredients"/>
                <textarea className="textbox" rows={15} name="recipeingredients" placeholder="Recipe Ingredients" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)}/>
            </FormGroup>
            <FormGroup className="textarea">
                <Label htmlFor="recipeinstructions"/>
                <textarea className="textbox" rows={15} name="recipeinstructions" placeholder="Recipe Instructions" value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)}/>
            </FormGroup>

            {/* <FormGroup>
                <Label htmlFor="recipepublic"/>
                <p>make recipe public</p>
                <Input name="recipepublic" type="checkbox" onChange={() => 
                    {
                        setRecipePublic(!recipePublic)
                    }}/>
            </FormGroup> */}

            <FormGroup>
                <Label htmlFor="chef"/>
                <Input name="chef" placeholder="Your Chef Name" value={chef} onChange={(e) => setChef(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
        </Form>
        </div>
        </>
    )
}

const ModalCreate = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button className="buttons" onClick={toggle}> Update a Recipe </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
              <RecipeCreate token={props.token}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default ModalCreate;