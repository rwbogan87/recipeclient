import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const RecipeChange = (props) => {

  const [changeName, setChangeName] = useState(props.recipechange.recipeName);
  const [changeCategory, setChangeCateogry] = useState(props.recipechange.recipeCategory);
  const [changeIngredients, setChangeIngredients] = useState(props.recipechange.recipeIngredients);
  const [changeInstructions, setcChangeInstructions] = useState(props.recipechange.recipeInstructions);
  const [changePublic, setChangePublic] = useState(props.recipechange.recipePublic);
  const [changeChef, setChangeChef] = useState(props.recipechange.chef);
  
  const recipeChange = (e, recipe) => {
    e.preventDefault();
      fetch(`http://localhost:3000/recipe/update/${props.recipechange.id}`, {
          method: 'PUT',
          body: JSON.stringify({
              recipeName: changeName,
              recipeCategory: changeCategory,
              recipeIngredients: changeIngredients,
              recipeInstructions: changeInstructions,
              recipePublic: changePublic,
              chef: changeChef
          }),
          headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': props.token
          })
        }) .then((res) => {
          props.fetchRecipes();
          props.updateOff();
      })
  }

  return(
    <div>
      <Form onSubmit={recipeChange}>
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


export default RecipeChange;