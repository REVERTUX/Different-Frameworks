import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getPost, PostI } from '../api/posts'
import { getUser, UserI } from '../api/users'

const PostEntity = () => {
    const [post, setPost] = useState<PostI | null>(null)
    const [user, setuser] = useState<UserI | null>(null)

    const { id } = useParams<{id: string}>()

    useEffect(() => {
        handleGetPost()
    }, [])

    const handleGetPost = async () => {
        if (!id) return

        try {
            const response = await getPost(id)
            setPost(response)
            handleGetPostOwner(response.userId)
        } catch (error) {
            
        }
    }

    const handleGetPostOwner = async (userId: string) => {
        try {
           const response = await getUser(userId)
           setuser(response)
        } catch (error) {
            
        }
    }

    if (!post) return null

    return <div>
        <Link to='/'>Return</Link>
        <div className="post-entity">
            <div>{user ? `${user.name}` : 'loading...'}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    </div>
}

export default PostEntity