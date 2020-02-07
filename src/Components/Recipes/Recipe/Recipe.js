import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Recipe.css'
import APIURL from '../../../helpers/environment';


//makes a new Recipe inside a form embedded in a modal
const RecipeCreate = (props) => {

    // const toggle = () => setModal(!modal);

    const [recipeName, setRecipeName] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [recipeLock, setRecipeLock] = useState(false);
    const [chef, setChef] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/recipe/create`, {
            method: 'POST',
            body: JSON.stringify({
                recipeName: recipeName,
                recipeCategory: recipeCategory,
                recipeIngredients: recipeIngredients,
                recipeInstructions: recipeInstructions,
                recipePublic: !recipeLock,
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
            setRecipeLock(false);
            setChef('');

            console.log('recipe successfully submitted');
        })
        // props.toggle calls toggle function inside modalcreate to unfire the modal
        .then(()=>props.toggle())
        .then(() => fetchRecipes())
    }

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

    return(
        <>
        <div className="maindiv">
        <h3>Recipe Creation</h3>
        <Form className="formclass" onSubmit={handleSubmit}>
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
            {/* unable to get working for extra delete security, tabled */}
            {/* <Label htmlFor="radio"/>
            <RadioGroup name="recipepublic" onChange={(e) => setRecipePublic(e.target.value)} value={recipePublic} options={[
                { label: "true", value: true},
                { label: "false", value: false}
            ]} /> */}
            <FormGroup>
                <Label htmlFor="recipepublic"/>
                <p>Lock Recipe? (Can not be deleted! For special entries)</p>
                <Input name="recipepublic" type="checkbox" value={recipeLock} onChange={() => 
                    {
                        setRecipeLock(!recipeLock)
                        console.log(recipeLock)
                        console.log()
                    }}/>
            </FormGroup>
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

// same structure as usercreate
const ModalCreate = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button className="button" onClick={toggle}> Add </Button>
        <Modal isOpen={modal} toggle={toggle} className="creatediv">
          <ModalHeader toggle={toggle}>Chef's Corner</ModalHeader>
          <ModalBody>
              {/* recipecreate gets passed toggle so it closes modal on form submission */}
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