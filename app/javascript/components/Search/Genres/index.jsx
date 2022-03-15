import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Player from '../Player'

export default ({ currentAudio, setAudio }) => {
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState([])
  const [genreAudios, setGenreAudios] = useState([])
  const { genreId } = useParams()

  useEffect(() => {
    fetch('/api/v1/genres', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setGenres(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetch(`/api/v1/genres/${genreId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setGenreAudios(data)
        setLoading(false)
      })
  }, [genreId])

  return (
    <>
      {loading ? (
        <div className="loading">
          Loading...
        </div>
      ) : (
        <div className="row">
          <div className="col-4">
            <div className="slide-animation card">
              <div className="list-group list-group-flush">
                {genres.map(({ id, name }) => (
                  <NavLink
                    to={`/search/genres/${id}`}
                    key={id}
                    className={({ isActive }) => `list-group-item ${isActive ? 'active' : ''}`}
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {genreAudios.length > 0 ? (
            <div className="col-8">
              <div className="slide-animation card">
                <div className="list-group list-group-flush">
                  {genreAudios.map(({ id, name }) => (
                    <Player id={id} name={name} currentAudio={currentAudio} setAudio={setAudio} key={id} />
                  ))}
                </div>
              </div>
            </div>
          ) : <></>}
        </div>
      )}
    </>
  )
}
