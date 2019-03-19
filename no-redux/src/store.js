import React from 'react'

export const Store = React.createContext(); //creates context object

const initialState = {
    message : "is this better than redux?"
}

function reducer(state, action) {
    
}

export function StoreProvider(props) {
    return <Store.Provider value='data from store'>{props.children}</Store.Provider>
} 
{/* // This will be the react component that will encapsulate the other components in the application. It has an argument of props because that’s how we’ll get access to the other child components. */}
// This will be given to index.js to hold state