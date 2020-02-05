import React from "react";
import './Help.css'

const Help = () => {
    return (
        <div className="main">
            <div className="helpdiv">
            </div>
            <div className="titlediv">
            <h1>How to Use This App</h1>
            <p>
                You must be logged in to see the list of recipes; if you do not see recipes then you should see a login screen
            </p>
            <p>
                You may only delete recipes that were not set to 'locked' upon creation.<br/>
                The Recipe Number is required to make an update.
            </p>
            </div>
        </div>
    );
}

export default Help;