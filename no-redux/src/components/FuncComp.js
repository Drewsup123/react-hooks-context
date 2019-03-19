import React from 'react';
import {Store} from '../store';

function FuncComp(){
    const store = React.useContext(Store);
    console.log(store);
    return(
        <div>
            <h1>Functional Component here</h1>
        </div>
    );
}

export default FuncComp;