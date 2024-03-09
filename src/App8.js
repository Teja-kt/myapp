import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home } from './Home'
import Feed from './Feed'
import Posts from './Posts'

export const App8 = () => {
  return (
    <div>
        <BrowserRouter>
            <Link to="/">Home</Link> |
            <Link to="/feed">Feed</Link> |
            <Link to="/post">Post</Link>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/feed" index element={<Feed/>} />
                <Route path="/post" element={<Posts/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
