import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Player from '../Player'

export default ({ currentAudio, setAudio }) => {
  const [loading, setLoading] = useState(true)
  const [instruments, setInstruments] = useState([])
  const [instrumentAudios, setInstrumentAudios] = useState([])
  const { instrumentId } = useParams()

  useEffect(() => {
    fetch('/api/v1/instruments', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setInstruments(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetch(`/api/v1/instruments/${instrumentId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setInstrumentAudios(data)
        setLoading(false)
      })
  }, [instrumentId])

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
                {instruments.map(({ id, name }) => (
                  <NavLink
                    to={`/search/instruments/${id}`}
                    key={id}
                    className={({ isActive }) => `list-group-item ${isActive ? 'active' : ''}`}
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {instrumentAudios.length > 0 ? (
            <div className="col-8">
              <div className="slide-animation card">
                <div className="list-group list-group-flush">
                  {instrumentAudios.map(({ id, name }) => (
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
