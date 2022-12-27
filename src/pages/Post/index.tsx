import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Ipost } from '../Home'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

export function Post() {
  const [postData, setPostData] = useState<Ipost>({} as Ipost)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
