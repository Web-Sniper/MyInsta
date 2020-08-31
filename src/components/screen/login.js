import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const Login = ()=>{
        
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify ({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                return M.toast({html: data.error, classes:"#e53935 red darken-1"})
            }
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            M.toast({html: "Signedin Sucessfully", classes:"#00897b teal darken-1"})
            history.push("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>MyInsta</h2>
                <input type="text" placeholder="Email" 
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" 
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick = {()=>Login()}>
                    Login
                </button>
                <h6>
                <Link to="/signup">Don't have an account? </Link>
                </h6>
                <h6>
                <Link to="#">Forget Password? </Link>
                </h6>
            </div>
        </div>
    )
}

export default Login