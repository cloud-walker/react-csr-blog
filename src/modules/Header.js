import React from 'react'
import {Link} from 'react-router-dom'
import {Center} from './Center'

export const Header = () => {
  return (
    <Center as="header">
      <h1>
        <Link to="/">Blog!</Link>
      </h1>
    </Center>
  )
}
