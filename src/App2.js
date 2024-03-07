import React from 'react'
import { Login } from './Login'
import { Home } from './Home'


export default function App2(props) {
    return ((props.userName==="") ? <Login /> : <Home user={props.userName} />)
}
