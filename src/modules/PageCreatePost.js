import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import {Navigate} from 'react-router'
import {useMutation} from 'react-query'

import {Center} from './Center'
import {Stack} from './Stack'

const Label = styled('label')`
  display: block;
`

const Input = styled('input')`
  min-width: 100%;
  padding: 0.5rem;
`

const TextArea = styled('textarea')`
  min-width: 100%;
  max-width: 100%;
  min-height: 20vh;
  display: block;
  padding: 0.5rem;
`

const Error = styled('div').attrs({role: 'alert'})`
  color: red;
`

const createPost = async data => {
  return fetch('http://localhost:4000/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}

export const PageCreatePost = () => {
  const [mutate, {data}] = useMutation(createPost)
  const {handleSubmit: createHandleSubmit, register, errors} = useForm()
  const handleSubmit = createHandleSubmit(values => {
    return mutate({
      title: values.title,
      content: values.content,
      image: [
        'https://source.unsplash.com/random/1920x1080',
        values.image_tags,
      ].join('?'),
    })
  })

  if (data?.id) {
    return <Navigate to={`/post/${data.id}`} />
  }

  return (
    <Center>
      <Stack>
        <h1>Create Post</h1>

        <Stack as="form" onSubmit={handleSubmit} aria-label="form">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              aria-invalid={!!errors.title || undefined}
              ref={register({required: 'Title is required.'})}
            />
            {!!errors.title && <Error>{errors.title.message}</Error>}
          </div>

          <div>
            <Label htmlFor="image_tags">Image tags</Label>
            <Input
              type="text"
              name="image_tags"
              id="image_tags"
              aria-invalid={!!errors.image_tags || undefined}
              ref={register()}
            />
            {!!errors.image_tags && <Error>{errors.image_tags.message}</Error>}
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <TextArea
              name="content"
              id="content"
              aria-invalid={!!errors.content || undefined}
              ref={register({required: 'Content is required.'})}
            />
            {!!errors.content && <Error>{errors.content.message}</Error>}
          </div>

          <button type="submit">Create</button>
        </Stack>
      </Stack>
    </Center>
  )
}
