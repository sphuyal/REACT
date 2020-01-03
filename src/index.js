import React from 'react';
import ReactDOM from 'react-dom';


const lecture = 'of react jsx';
const element = <h1> This is testing {lecture}</h1>; // jsx ko syntax "<h1> This is testing {lecture}</h1>"

// ReactDOM.render(what, where);
ReactDOM.render(element, document.getElementById('jsx'));

/*Component creation
    -> Two types
        |-> function based
        |-> classed based
*/

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