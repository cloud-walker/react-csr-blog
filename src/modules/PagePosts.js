import React from 'react'
import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'

import {Center} from './Center'
import {Stack} from './Stack'

const getPosts = async () => {
  const res = await fetch('http://localhost:4000/posts')
  return await res.json()
}

export const PagePosts = () => {
  const {status, data} = useQuery('posts', getPosts)

  return (
    <Center>
      <Stack>
        {status == 'error' ? (
          <div>Something gone wrong.</div>
        ) : status == 'loading' ? (
          <div>Loading..</div>
        ) : (
          <Stack as="ul">
            {data.map(post => {
              return (
                <li key={post.id}>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
          </Stack>
        )}
      </Stack>
    </Center>
  )
}
