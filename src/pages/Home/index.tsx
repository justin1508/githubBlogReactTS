import { useCallback, useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/axios'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListContainer } from './styles'

export interface Ipost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<Ipost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)

        const response = await api.get(
          `/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} postsLength={posts.length} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostListContainer>
      )}
    </>
  )
}
