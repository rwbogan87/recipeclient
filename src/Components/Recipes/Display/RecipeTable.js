import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Card, CardBody, CardText, CardGroup, CardFooter, CardHeader} from 'reactstrap';
import './RecipeTable.css';
// import ModalChange from '../Recipe/Recipechange';
import APIURL from '../../../helpers/environment';

//fetches all recipes and displays them in cards over in Recipes.js
const RecipeTable = (props) => {

    const [recipes, setRecipes] = useState(['']);
    // ready to start sorting by cat
    const [showText, setShowText] = useState(false);

    const fetchRecipes=()=>{
        fetch(`${APIURL}/recipe/`,{
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
    
    useEffect(() => {
        fetchRecipes()
    }, []);
    
    const deleteRecipe = (recipe) => {
        fetch(`${APIURL}/recipe/${recipes.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
            // deletes recipe card then refetches data so it displays on refresh
        }).then(() => fetchRecipes())
    }

    

    // display status of recipepublic based on .public value
    
    // display delete button only if recipe is public
    
    // when called, maps over recipes (which have been changed by usestate through setRecipes) and assigns the different values to card items that are pieced together to form a `recipe` that gets displayed in the Refresh file with a passed token; Refresh is called in App whenever there is a token, and is auto displayed on app render or page refresh
    return recipes.map((recipes) => {

        // test start
        const RecipeCreate = (props) => {
        const [recipeName, setRecipeName] = useState('');
        const [recipeCategory, setRecipeCategory] = useState('');
        const [recipeIngredients, setRecipeIngredients] = useState('');
        const [recipeInstructions, setRecipeInstructions] = useState('');
        // const [recipeLock, setRecipeLock] = useState(true);
        const [chef, setChef] = useState('');
    
    
    
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch(`${APIURL}/recipe/update/${recipes.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    recipeName: recipeName ? recipeName : e.target.defaultValue,
                    recipeCategory: recipeCategory ? recipeCategory : e.target.defaultValue,
                    recipeIngredients: recipeIngredients ? recipeIngredients : e.target.defaultValue,
                    recipeInstructions: recipeInstructions ? recipeInstructions : e.target.defaultValue,
                    // recipePublic: recipeLock,
                    chef: chef ? chef : e.target.defaultValue
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
            .then((recipeData) => {
                console.log(recipeData);
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
            <Form className="formclass" maxLength="10000" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="recipename"/>
                    <p><Input type="text" name="recipename" placeholder="Recipe Name" defaultValue={recipes.recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                    </p>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="recipecategory"/>
                    <Input type="text" name="recipecategory" placeholder="Recipe Category" defaultValue={recipes.recipeCategory} onChange={(e) => setRecipeCategory(e.target.value)}/>
                </FormGroup>
                <FormGroup className="textarea">
                    <Label htmlFor="recipeingredients"/>
                    <Input type="textarea" rows="25" className="textbox" name="recipeingredients" placeholder="Recipe Ingredients" defaultValue={recipes.recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)}/>
                </FormGroup>
                <FormGroup className="textarea">
                    <Label htmlFor="recipeinstructions"/>
                    <Input type="textarea" className="textbox" rows="25" name="recipeinstructions" placeholder="Recipe Instructions" defaultValue={recipes.recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)}/>
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
                    <Input type="text" name="chef" placeholder="Your Chef Name" defaultValue={recipes.chef} onChange={(e) => setChef(e.target.value)}/>
                </FormGroup>
                <Button type="submit" className="modalsubmit">Click to Submit</Button>
            </Form>
            </div>
            </>
        )
    }
    const ModalChange = (props) => {
  
        const [modal, setModal] = useState(false);
      
        const toggle = () => setModal(!modal);
      
        return (
          <div>
            <Button className="addchange" onClick={toggle}> Change </Button>
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
    // test end

        const lockdisplay=()=>{
            if (recipes.recipePublic === true) {
                return (null)
            } else {
                return (<b>Locked</b>)
            }
        }
        
        const buttondisplay=()=>{
            if (recipes.recipePublic === true) {
                return (<Button className="deletebutton" onClick={(e) => { if (window.confirm('Are you sure you want to delete this item? This cannot be undone!')) {deleteRecipe(recipes)}}}>Delete</Button>
                )
            }
        }

        return(
        <CardGroup key={recipes.id}className="cardGroup">
            <Card className="cardCard">
                <CardHeader onClick={()=>setShowText(!showText)} className="cardHeader">
                    <CardText className="recipeName"><b>{recipes.recipeName}</b></CardText>
                    <CardText className="recipeCategory">{recipes.recipeCategory}</CardText><br/>
                </CardHeader>
                {showText &&
                <CardBody className="cardBody">
                    {/* <CardTitle><b>{recipes.recipeName}</b></CardTitle> */}
                    <CardText className="recipeHidden">{recipes.recipeInstructions}</CardText>
                    <CardText className="recipeHidden">{recipes.recipeIngredients}</CardText>
                    {/* change later to reflect public/locked status */}
                    <CardText>{lockdisplay()}</CardText>
                </CardBody>
                }
                <CardFooter className="recipeFooter">
                    <CardText className="recipeHidden">A Recipe by <b>{recipes.chef}</b></CardText>
                    {/* #{recipes.id} */}
                    <div className="buttondiv">
                    <ModalChange  token={props.token} />
                    {buttondisplay()}
                    </div>
                </CardFooter>
            </Card>
        </CardGroup>
        )
    })
}

export default RecipeTable;
