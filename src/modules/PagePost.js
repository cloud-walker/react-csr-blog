import React from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router'

import {Center} from './Center'
import {Stack} from './Stack'

const getPost = async (key, id) => {
  const res = await fetch(`http://localhost:4000/posts/${id}`)
  return await res.json()
}

export const PagePost = () => {
  const {id} = useParams()

  const {status, data} = useQuery(['post', id], getPost)
  console.log({status, data})

  if (status == 'error') {
    return 'Error'
  }

  if (status == 'loading') {
    return 'Loading...'
  }

  return (
    <Center>
      <Stack>
        <h1>{data.title}</h1>

        <img src={data.image} alt={data.title} />

        <main>{data.content}</main>
      </Stack>
    </Center>
  )
}
