import Link from 'next/link'
import useSWR from 'swr'

import { getPost, getPosts, PostI } from '../api/posts'
import { getUser } from '../api/users'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

const PostEntity = ({ post } : InferGetStaticPropsType<typeof getStaticProps>) => {
    const user = useSWR(() => post.userId ? 'user' : null, () => getUser(post.userId))

    return <div>
        <Link href='/posts'>Return</Link>
        <div className="post-entity">
            <div>{user.data ? `${user.data.name}` : 'loading...'}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    </div>
}


export const getStaticProps: GetStaticProps<{ post: PostI }> = async ({ params }) => {
    if(!params?.id) return { notFound: true }
    const post = await getPost(params.id as string)
  
    return {
      props: {
        post,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
    }
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map(({ id }) => ({
      params: { id: id.toString() },
    }))
  
    return { paths, fallback: false}
  }

export default PostEntity