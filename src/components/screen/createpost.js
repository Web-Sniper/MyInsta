import React,{useState} from "react"
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Createpost = ()=>{
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [content,setContent] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")

    const postDetails = ()=>{
        
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","myinsta")
        data.append("cloud_name","iatulkumar")
        fetch("https://api.cloudinary.com/v1_1/iatulkumar/image/upload",{
            method : "post",
            body : data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        }).then()
        .catch(err=>console.log(err))
        fetch("/createpost",{
            method : "post",
            headers :{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                content,
                photo:url
                
            })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    return M.toast({html: data.error, classes:"#e53935 red darken-1"})
                }
                M.toast({html: "Posted successfully", classes:"#00897b teal darken-1"})
                history.push("/")
        })
    }

    return(
        <div className="card input-field">
            <h5>Create Post</h5>
            <input type="text" placeholder="Title" 
            value ={title}
            onChange = {(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Body" 
            value ={content}
            onChange ={(e)=>setContent(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                     <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light"
            onClick = {()=>postDetails()}
            >
                    Post
                </button>
        </div>
    )
}

export default Createpost