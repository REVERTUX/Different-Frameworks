import { PostI } from "./api/posts"

interface Props {
    post: PostI
    onDelete: (id: string) => void
    onClick: (id: string) => void
}

const Post = ({ post: { body, id, title }, onClick }: Props) => {
    return <div className="post" onClick={() => onClick(id)}>
        <div>{title}</div>
        <div>{body}</div>
    </div>
}

export default Post