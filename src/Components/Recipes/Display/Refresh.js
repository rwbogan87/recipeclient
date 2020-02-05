import React from 'react';
import RecipeTable from '../Display/RecipeTable';

const Refresh = (props) => {
    return(
        <div className="splashdiv">
            <br/>
            <h1>Our Recipe Collection</h1>
            <div className="tabledisplay">
                {/* main display of all recipes */}
                <RecipeTable token={props.token}/>
            </div>
        </div>
    );
};

export default Refresh;