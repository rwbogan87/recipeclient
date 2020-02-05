import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <div className="homediv">
            </div>
            <div className="titlediv">
            <h1>Mom and Ryan's Recipes</h1>
            <p>
                Log in or create an account now to save your favorite recipes and share ones I add too!  All recipes are shared, but can be set to 'locked' to prevent accidental removal.
            </p>
            <p>
                Click 'Add a New Recipe' to get started!
            </p>
            </div>
        </div>
    );
}

export default Home;