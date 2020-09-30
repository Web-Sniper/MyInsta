import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Signup = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const PostData = ()=>{
        fetch("/signup",{
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify ({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                return M.toast({html: data.error, classes:"#e53935 red darken-1"})
            }
            M.toast({html: data.message, classes:"#00897b teal darken-1"})
            history.push("/login")
        }).catch(err=>{
            console.log(err)
        })
        
    }
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>MyInsta</h2>
                <input type="text" placeholder="Name"
                value = {name}
                onChange = {(e)=>setName(e.target.value)}
                />
                <input type="text" placeholder="Email" 
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" 
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick={()=>PostData()}>
                    SignUp
                </button>
                <h6>
                <Link to="/login">Already have an account? </Link>
                </h6>
            </div>
        </div>
    )
}

export default Signup