import React from 'react'


const Profile = ()=>{
    return (
        <div style={{maxWidth:"750px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin: "10px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"100px"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                </div>
                <div>
                    <h4>Sarah Jorge</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width: "108%"
                    }}>
                        <h6>40 Posts</h6>
                        <h6>40 Following</h6>
                        <h6>40 Followers</h6>
                    </div>
                </div>
            </div>
            <div className="gallery" style={{
                margin: "10px 0px",
            }}>
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5429e12be4b0a0b7f51000d5/1585761998272-RDLJC7YBRYENC5MLY5KQ/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/Embark_Gallery_LaterDays_web6.JPG"
                />
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5429e12be4b0a0b7f51000d5/1585761998272-RDLJC7YBRYENC5MLY5KQ/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/Embark_Gallery_LaterDays_web6.JPG" 
                />
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5429e12be4b0a0b7f51000d5/1585761998272-RDLJC7YBRYENC5MLY5KQ/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/Embark_Gallery_LaterDays_web6.JPG"
                />
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5429e12be4b0a0b7f51000d5/1585761998272-RDLJC7YBRYENC5MLY5KQ/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/Embark_Gallery_LaterDays_web6.JPG"
                />
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5429e12be4b0a0b7f51000d5/1585761998272-RDLJC7YBRYENC5MLY5KQ/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/Embark_Gallery_LaterDays_web6.JPG"
                />
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5429e12be4b0a0b7f51000d5/1585761998272-RDLJC7YBRYENC5MLY5KQ/ke17ZwdGBToddI8pDm48kCFTy3UGnhJ-fWvK5PBTMNx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQAK6Hrx5oK4v7EgPqT2OFRSRLMHaWtK29l-R4I7CH9pArRUwoSl4wuUs73k4k9WwA/Embark_Gallery_LaterDays_web6.JPG"
                />
            </div>
        </div>
    )
}

export default Profile