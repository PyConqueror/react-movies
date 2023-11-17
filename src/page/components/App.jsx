import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import MovieDetailPage from './MovieDetailPage'
import MoviesListPage from './MoviesListPage'
import ActorListPage from './ActorListPage'
import NavBar from './NavBar'
import {movies} from '../../data'


import './App.css'
function App() {
  const [user, setUser] = useState(null)

  function login(username) {
    setUser(username)
  }

  return (
    <main className='app'>
      {user ? 
      <> 
        <NavBar user={user}/>
        <Routes>
          <Route path="/" element={<MoviesListPage movies={movies} />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorListPage />} />
        </Routes>
      </>  
      :
      <LoginPage login={login}/>
    }
    </main>
  ) 
}

export default App
