import React from 'react'
import {Routes, Route} from 'react-router'

import {PagePosts} from './PagePosts'
import {PageCreatePost} from './PageCreatePost'
import {PagePost} from './PagePost'
import {Style} from './Style'

export const Root = () => {
  return (
    <>
      <Style />
      <Routes>
        <Route path="/" element={<PagePosts />} />
        <Route path="/post/create" element={<PageCreatePost />} />
        <Route path="/post/:id" element={<PagePost />} />
      </Routes>
    </>
  )
}
