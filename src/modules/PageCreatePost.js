import React from 'react'
import {useForm} from 'react-hook-form'
import {Navigate} from 'react-router'
import {useMutation} from 'react-query'

import {Center} from './Center'
import {Stack} from './Stack'
import {FormLabel} from './FormLabel'
import {Input} from './Input'
import {Textarea} from './Textarea'
import {FormInlineError} from './FormInlineError'

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
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              type="text"
              name="title"
              id="title"
              aria-invalid={!!errors.title || undefined}
              ref={register({required: 'Title is required.'})}
            />
            {!!errors.title && (
              <FormInlineError>{errors.title.message}</FormInlineError>
            )}
          </div>

          <div>
            <FormLabel htmlFor="image_tags">Image tags</FormLabel>
            <Input
              type="text"
              name="image_tags"
              id="image_tags"
              aria-invalid={!!errors.image_tags || undefined}
              ref={register()}
            />
            {!!errors.image_tags && (
              <FormInlineError>{errors.image_tags.message}</FormInlineError>
            )}
          </div>

          <div>
            <FormLabel htmlFor="content">Content</FormLabel>
            <Textarea
              name="content"
              id="content"
              aria-invalid={!!errors.content || undefined}
              ref={register({required: 'Content is required.'})}
            />
            {!!errors.content && (
              <FormInlineError>{errors.content.message}</FormInlineError>
            )}
          </div>

          <button type="submit">Create</button>
        </Stack>
      </Stack>
    </Center>
  )
}
