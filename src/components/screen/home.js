import React, { useState, useEffect,useContext } from 'react'
import {userContext} from '../../App'


const Home = () => {
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(userContext)
    useEffect(() => {
        if(state){
        fetch('/allpost', {
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                setData(data.posts)
            })
    }}, [state])

    const likePost = (id)=>{
        fetch('/like',{
            method : "put",
            headers :{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const unlikePost = (id)=>{
        fetch('/unlike',{
            method : "put",
            headers :{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5 style={{ padding: "5px" }}>
                                {item.postedBy.name}
                            </h5>
                            <div className="card-image">
                                <img src={item.photo} />
                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                                {
                                    item.likes.includes(state._id)?
                                <i className="material-icons"
                                onClick={()=>{unlikePost(item._id)}}
                                >thumb_down</i>
                                :
                                <i className="material-icons"
                                onClick={()=>{likePost(item._id)}}
                                >thumb_up</i>
                                }
                                
                                
                                <h6>{item.likes.length} likes</h6>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                                <input type="text" placeholder="add a comment" />
                            </div>
                        </div>
                    )

                })
            }

        </div>

    )
}

export default Home