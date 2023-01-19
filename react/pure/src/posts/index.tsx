import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getPosts, PostI } from "../api/posts"
import Post from "./Post"

const Posts = () => {
    const [posts, setPosts] = useState<PostI[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        handleGetPosts()
    }, [])

    const handleGetPosts = async () => {
        try {
           const response = await getPosts()
           setPosts(response)
        } catch (error) {
            console.error(error)
        }
    }

    const handleClickPost = (id: string) => {
        navigate(`/posts/${id}`)
    }

    const handleDeletePost = (id: string) => {
        setPosts(prevState => prevState.filter(post => post.id !== id))
    }

    return <div className="posts">
        {posts.map(post => <Post post={post} onDelete={handleDeletePost} onClick={handleClickPost} key={post.id} />)}
    </div>
}

export default Posts