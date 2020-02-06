import React, { useState } from 'react';
import './Recipe.css'
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../../../helpers/environment';

//makes a new Recipe inside a form embedded in a modal
const RecipeCreate = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [recipeLock, setRecipeLock] = useState(true);
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
                recipePublic: recipeLock,
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
            setRecipeLock(false);
            setChef('');
            console.log('recipe successfully updated');
        }) 
        // toggle function is being passed as props to trigger the modal to close after the fetch resets the form input values and confirms entry
        .then(()=>props.toggle())
    }
    
    return(
        <>
        <div className="maindiv">
        <h3>Change a Recipe</h3>
        <p>Note: Empty fields will replace existing data</p>
        <Form className="formclass" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="recipeid"/>
                <Input type="integer" name="recipeid" placeholder="Recipe # (required)" value={recipeId} onChange={(e) => setRecipeId(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipename"/>
                <Input type="text" name="recipename" placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipecategory"/>
                <Input type="text" name="recipecategory" placeholder="Recipe Category" value={recipeCategory} onChange={(e) => setRecipeCategory(e.target.value)}/>
            </FormGroup>
            <FormGroup className="textarea">
                <Label htmlFor="recipeingredients"/>
                <textarea className="textbox" rows={15} name="recipeingredients" placeholder="Recipe Ingredients" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)}/>
            </FormGroup>
            <FormGroup className="textarea">
                <Label htmlFor="recipeinstructions"/>
                <textarea className="textbox" rows={15} name="recipeinstructions" placeholder="Recipe Instructions" value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)}/>
            </FormGroup>
            
            {/* currently do not want users to be able to update the locked value */}
            {/* <FormGroup>
                <Label htmlFor="recipepublic"/>
                <p>Lock Recipe? (can be updated, not deleted)</p>
                <Input name="recipepublic" type="checkbox" value={recipeLock} onChange={() => 
                    {
                        setRecipeLock(!recipeLock)
                        console.log(recipeLock)
                        console.log()
                    }}/>
            </FormGroup> */}
            <FormGroup>
                <Label htmlFor="chef"/>
                <Input type="text" name="chef" placeholder="Your Chef Name" value={chef} onChange={(e) => setChef(e.target.value)}/>
            </FormGroup>
            <Button type="submit" className="modalsubmit">Click to Submit</Button>
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
              {/* toggle function being passed so it can be called in above fetch function */}
              <RecipeCreate token={props.token} toggle={toggle}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle} >Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default ModalCreate;