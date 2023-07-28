import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { PostDetail } from './display/PostDetail/PostDetail'


export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/Kepler' />
            <Route element={<PostDetail />} path='/posts/:id' />

            <Route path='*' element={<div>Not posts</div>} />
        </Routes>
    </BrowserRouter>
  )
}
