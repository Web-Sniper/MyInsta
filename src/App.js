import React,{useEffect,createContext, useContext,useReducer} from 'react';
import NavBar from "./components/NavBar"
import "./App.css"
import {BrowserRouter, Route, Switch,useHistory} from 'react-router-dom'
import Home from './components/screen/home';
import Login from './components/screen/login'
import Signup from './components/screen/signup'
import Profile from './components/screen/profile'
import Createpost from './components/screen/createpost'
import Mypost from './components/screen/mypost'
import {reducer,intialState} from './reducers/userReducer'

export const userContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(userContext)
  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type:"USER",payload:user})
        history.push('/')
      }else{
        history.push('/login')
      }
  },[])
  return(
  <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createpost">
        <Createpost />
      </Route>
      <Route path="/mypost">
        <Mypost />
      </Route>
  </Switch>
  )
}



function App() {
  const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <userContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
