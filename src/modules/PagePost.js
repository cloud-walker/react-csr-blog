import React from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router'
import Markdown from 'react-markdown'

import {Center} from './Center'
import {Stack} from './Stack'

const getPost = async (key, id) => {
  const res = await fetch(`http://localhost:4000/posts/${id}`)
  return await res.json()
}

export const PagePost = () => {
  const {id} = useParams()
  const {status, data} = useQuery(['post', id], getPost)

  return (
    <Center>
      {status == 'error' ? (
        <div>Something gone wrong.</div>
      ) : status == 'loading' ? (
        <div>Loading...</div>
      ) : (
        <Stack>
          <h1>{data.title}</h1>

          <img src={data.image} alt={data.title} />

          <Stack as="main">
            <Markdown source={data.content} />
          </Stack>
        </Stack>
      )}
    </Center>
  )
}
