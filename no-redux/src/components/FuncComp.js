import React from 'react';
import {Store} from '../store';

const consoleLog=(message)=>{
    console.log(message)
}

const changeMessage = (state) => {
    state.message = "I changed"
}

function FuncComp(){
    // const store = React.useContext(Store);
    const { state, dispatch } = React.useContext(Store); // comes from Store import above to get the state and dispatch seperatly 
    console.log(state);
    const changeNumber = async () => {
        return dispatch({
            type:'CHANGE_STATE'
        })
    }
    const send_req = async () => {
        let res = {};
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => res = response.body)
        return dispatch({type:'EX_API_REQ', payload:res});
    }
    const changeName = async (e,name)=>{
        return 1;
    }
    return(
        <div>
            <h1>Functional Component here</h1>
            <button onClick={() => consoleLog(state.message)} >console log some stuff</button>
            <button onClick={() => changeMessage(state)}>change message</button>
            <h1>{state.number}</h1>
            <button onClick={()=>changeNumber()}>change number</button>
            <br />
            <h1>{state.ex_data ? 'Oh yeah it went through' : 'Its false :('}</h1>
            <button onClick={()=>send_req()}>Send Request</button>
            <form onSubmit={()=>changeName()}>
                <input type="text" name="name">name</input>
                <input type="submit" />
            </form>
        </div>
    );
}

export default FuncComp;