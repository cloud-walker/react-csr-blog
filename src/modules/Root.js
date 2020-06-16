import React from 'react'
import {Routes, Route} from 'react-router'

import {PagePosts} from './PagePosts'
import {PageCreatePost} from './PageCreatePost'
import {PagePost} from './PagePost'
import {Style} from './Style'
import {Header} from './Header'
import {Spacer} from './Spacer'
import {PageLogin} from './PageLogin'
import {PageRegister} from './PageRegister'

export const Root = () => {
  return (
    <>
      <Style />

      <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <Header />

        <Spacer />

        <Routes>
          <Route path="/" element={<PagePosts />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/post/create" element={<PageCreatePost />} />
          <Route path="/post/:id" element={<PagePost />} />
        </Routes>
      </div>
    </>
  )
}
