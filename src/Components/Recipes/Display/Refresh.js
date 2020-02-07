import React from 'react';
import RecipeTable from '../Display/RecipeTable';

const style = {
   backgroundColor: "rgba(152, 172, 80, 0.9)",
   border: "1px solid black",
   marginBottom: "2em"
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