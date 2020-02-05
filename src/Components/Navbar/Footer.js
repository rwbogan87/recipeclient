import React from 'react';

// not a preferred styling method, but used it to learn
const style = {
    backgroundColor: "rgb(63,51,77)",
    color: "white",
    borderTop: "1px solid black",
    textAlign: "center",
    position: "fixed",
    textShadow: "none",
    left: "0",
    bottom: "0",
    right: "0",
    height: "10vh",
    width: "100%",
}

// static footer with email contact
function Footer() {
    return (
        <div className="main">
            <div style={style}>
            <br/>
            <p>Helpdesk: rwbogan87@gmail.com<br/></p>
            </div>
        </div>
    )
}

export default Footer;