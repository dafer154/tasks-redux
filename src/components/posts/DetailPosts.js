import React, { useEffect } from 'react'

const DetailPosts = (...props) => {
    
    console.log("DATAIL POSTS", props[0].match.params.id)

    useEffect(()=>{
        console.log("DETAIL POSTS")
    }, [])

    return (
        <div>
            <label>Details posts</label>
        </div>
    )
}

export default DetailPosts
