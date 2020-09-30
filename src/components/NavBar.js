import React,{useContext} from "react";
import {Link,useHistory} from 'react-router-dom'
import {userContext} from '../App'
import M from 'materialize-css'
const NavBar = ()=>{
    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    const renderList = ()=>{
        if(state){
            return [
                <li key='1'><Link to="/profile">Profile</Link></li>,
                <li key='2'><Link to="/createpost">Create post</Link></li>,
                <li key='3'><Link to="/mypost">My posts</Link></li>,
                <li key='4'>
                    <button className="waves-effect waves-light btn #c62828 red darken-3"
                    onClick={()=>{
                        localStorage.clear();
                        dispatch({type:"CLEAR"});
                        M.toast({html: "logged out Sucessfully", classes:"#00897b teal darken-1"})
                        history.push("/login")
                    }}
                    style={{marginLeft:"10px"}}
                    >
                        Logout
                    </button>
                </li>
            ]
        }else{
            return [
                <li key='1'><Link to="/login">Login</Link></li>,
                <li key='2'><Link to="/signup">Signup</Link></li>
            ]
        }
    }
    return (
    <div>
    <div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper white" >
            <Link to={state?"/":"/login"} className="brand-logo ">MyInsta</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {renderList()}
            
            </ul>

            
        </div>
    </nav>
    </div>
    <ul id="mobile-demo" className="sidenav">
            {renderList()}
            </ul>
    
    </div>
      
    )
}

export default NavBar