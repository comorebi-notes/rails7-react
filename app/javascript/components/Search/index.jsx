import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import SideMenu from './SideMenu'
import Instruments from './Instruments'
import Genres from './Genres'
import FixedPlayer from './FixedPlayer'

export default () => {
  const [currentAudio, setCurrentAudio] = useState({})
  const setAudio = (audioId) => {
    fetch(`/api/v1/audios/${audioId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setCurrentAudio(data))
  }
  return (
    <BrowserRouter>
      <Link to="/search">
        <h1 className="mb-4">Search</h1>
      </Link>
      <div className="row">
        <div className="col-3">
          <SideMenu />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/search">
              <Route path="" element={<Home />} />
              <Route path="instruments" element={<Instruments currentAudio={currentAudio} setAudio={setAudio} />}>
                <Route path=":instrumentId" element={<Instruments currentAudio={currentAudio} setAudio={setAudio} />} />
              </Route>
              <Route path="genres" element={<Genres currentAudio={currentAudio} setAudio={setAudio} />}>
                <Route path=":genreId" element={<Genres currentAudio={currentAudio} setAudio={setAudio} />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
      <FixedPlayer audio={currentAudio} />
    </BrowserRouter>
  )
}
