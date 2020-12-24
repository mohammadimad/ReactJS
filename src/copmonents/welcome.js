import React from 'react';

function Test(props) {
    return <div>
    Welcome {props.name  +' '+ props.lastName}
     form function component.
     <p>{props.children}</p>
</div>;
 }
 
 export default Test;