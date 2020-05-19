import React from 'react';
import RecipeTable from '../Display/RecipeTable';
import './Refresh.css';

const style = {
   marginBottom: "2em",
   color: "black"
}



const Refresh = (props) => {
    return(
        <div className="splashdiv">
            <br/>
            <div className="collectiondiv" style={style}>
            <h1>All Categories</h1>
            <div className="sort">
            <span>Sort</span>
            <div className="sort-content">
                <p>Breakfast</p>
                <p>Lunch</p>
            </div>
            </div>
            </div>
            <div className="tabledisplay">
                {/* main display of all recipes */}
                <RecipeTable token={props.token}/>
            </div>
        </div>
    );
};

export default Refresh;