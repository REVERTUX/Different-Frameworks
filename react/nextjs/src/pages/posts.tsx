import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"

import { getPosts, PostI } from "./api/posts"
import Post from "./Post"

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    

    const handleClickPost = (id: string) => {
        router.push(`posts/${id}`)
    }

    const handleDeletePost = (id: string) => {

    }

    return <div className="posts">
        {posts && posts?.map(post => <Post post={post} onDelete={handleDeletePost} onClick={handleClickPost} key={post.id} />)}
    </div>
}

export const getStaticProps: GetStaticProps<{ posts: PostI[] }> = async() => {
    const posts = await getPosts()
  
    return {
      props: {
        posts,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }



export default Posts