import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { PostDetail } from './display/PostDetail/PostDetail'


export const Router = () => {
  return (
    <HashRouter>
        <Routes>
            <Route element={<App />} path='/' />
            <Route element={<PostDetail />} path='/posts/:id' />

            <Route path='*' element={<div>Not posts</div>} />
        </Routes>
    </HashRouter>
  )
}
