import React, { useState, useEffect } from 'react'

const Mypost = () => {
    const [data, setData] = useState([])
    var key = 0
    useEffect(() => {
        fetch('/mypost', {
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                setData(data.posts)
            })
    }, [])
    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={key+=1}>
                            <h5 style={{ padding: "5px" }}>
                                {item.postedBy.name}
                            </h5>
                            <div className="card-image">
                                <img src={item.photo} />
                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
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

export default Mypost