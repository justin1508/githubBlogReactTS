import { Ipost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostContainer } from './styles'

interface PostProps {
  post: Ipost
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{relativeDateFormatter(post.created_at)}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
