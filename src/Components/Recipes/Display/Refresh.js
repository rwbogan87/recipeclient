import React, { Button } from 'react';
import './Refresh.css';
import RecipeTable from '../Display/RecipeTable';

const Refresh = (props) => {
    return(
        <div className="splashdiv">
            <div className="tabledisplay">
                <RecipeTable token={props.token}/>
            </div>
        </div>
    );
};

export default Refresh;