import React,{useEffect,useState,useContext} from 'react'
import { userContext } from '../../App'


const Profile = ()=>{
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(userContext)
    useEffect(() => {
        if(state){

        fetch('/mypost', {
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                setData(data.posts)
            })
    }}, [])
    return (
        <div style={{maxWidth:"750px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin: "10px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"115px",height:"115px",borderRadius:"100px"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                </div>
                <div>
                    <h4>{state?state.name:"loading..."}</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width: "108%"
                    }}>
                        <h6>40 Following</h6>
                        <h6>40 Followers</h6>
                    </div>
                </div>
            </div>
            <div className="gallery" style={{
                margin: "10px 0px",
            }}>
                {
                data.map(item => {
                    return <img key={item.__id} className="image" src={item.photo} />
                })
                }
            </div>
        </div>
    )
}

export default Profile