import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../../../helpers/environment';

const RecipeChange = (props) => {

  // const [changeName, setChangeName] = useState(recipe.recipeName);
  // const [changeCategory, setChangeCateogry] = useState(recipe.recipeCategory);
  // const [changeIngredients, setChangeIngredients] = useState(recipe.recipeIngredients);
  // const [changeInstructions, setcChangeInstructions] = useState(recipe.recipeInstructions);
  // const [changePublic, setChangePublic] = useState(recipe.recipePublic);
  // const [changeChef, setChangeChef] = useState(recipe.chef);
  
  // const recipeChange = (e, recipe) => {
  //   e.preventDefault();
  //     fetch(`${APIURL}/recipe/update/${recipe.id}`, {
  //         method: 'PUT',
  //         body: JSON.stringify({
  //             recipeName: changeName,
  //             recipeCategory: changeCategory,
  //             recipeIngredients: changeIngredients,
  //             recipeInstructions: changeInstructions,
  //             recipePublic: changePublic,
  //             chef: changeChef
  //         }),
  //         headers: new Headers({
  //             'Content-Type': 'application/json',
  //             'Authorization': props.token
  //         })
  //       }) .then((res) => res.json())
  //       .then((changeData) => {
  //           console.log(changeData);
  //     })
  // }

  return(
    <div>
      <Form>
            <FormGroup>
                <Label htmlFor="recipename"/>
                <Input name="recipename" placeholder="Recipe Name" value={changeName} onChange={(e) => setChangeName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipecategory"/>
                <Input name="recipecategory" placeholder="Recipe Category" value={changeCategory} onChange={(e) => setChangeCateogry(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipeingredients"/>
                <Input name="recipeingredients" placeholder="Recipe Ingredients" value={changeIngredients} onChange={(e) => setChangeIngredients(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="recipeinstructions"/>
                <Input name="recipeinstructions" placeholder="Recipe Instructions" value={changeInstructions} onChange={(e) => setcChangeInstructions(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="recipepublic"/>
                <p>make recipe public</p>
                <Input name="recipepublic" type="checkbox" onChange={() => 
                    {
                        setChangePublic(!changePublic)
                    }}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="chef"/>
                <Input name="chef" placeholder="Your Chef Name" value={changeChef} onChange={(e) => setChangeChef(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
        </Form>
    </div>
  )

}

const ModalChange = (props) => {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}> Update A Recipe </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <RecipeChange token={props.token}/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default ModalChange;