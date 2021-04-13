import React, { useEffect } from 'react'
import { withRouter } from "react-router";

const DetailPosts = (...props) => {
    
    const idPost = props[0].match.params.id;
    const detailPost = (props[0].location.state || {}).detail

    console.log("DETAIL POSTS", detailPost)

    useEffect(()=>{
        console.log("DETAIL POSTS", idPost)
    }, [props[0].match.params.id])

    return (
        <div>
            <h1>OME {detailPost.title}</h1>
        </div>
    )
}

export default withRouter(DetailPosts);
