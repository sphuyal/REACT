// Common JS
//require('react');
//module.exports = {}
//export.varname = 24

// es6
import React from 'react';
import ReactDOM from 'react-dom';


// function based
function Button(props){ // we made this as a function so that it can be reused //props to get the value dynamically
    // props nai hunu parne bhanne chhaina... it can be any eg... xyz...
    return <button type="submit">{props.label}</button> // this is jsx
}
/*
    This also can be used but cannot be reused
    ---- ReactDOM.render(<button type="submit"></button>, document.getElementById('jsx'));
*/

// To give "Save" label
ReactDOM.render(<Button label="Save"/>, document.getElementById('jsx'));

// To give "Cancel" label
ReactDOM.render(<Button label="Cancel"/>, document.getElementById('jsxx'));