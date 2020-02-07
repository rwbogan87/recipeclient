import React from 'react';
import RecipeTable from '../Display/RecipeTable';

const style = {
   backgroundColor: "#513572a1",
   border: "1px solid black",
   marginBottom: "2em",
   color: "white",
   textShadow: "4px 4px 4px black",
}

const Refresh = (props) => {
    return(
        <div className="splashdiv">
            <br/>
            <div className="collectiondiv" style={style}>
            <h1>Recipe Collection</h1>
            </div>
            <div className="tabledisplay">
                {/* main display of all recipes */}
                <RecipeTable token={props.token}/>
            </div>
        </div>
    );
};

export default Refresh;