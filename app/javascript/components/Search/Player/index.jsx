import React from 'react'

export default ({ id, name, currentAudio, setAudio }) => {
  const isCurrentAudio = String(id) === currentAudio.id
  return (
    <div className={`list-group-item ${isCurrentAudio ? 'active' : ''}`}>
      <span className="me-2">
        {isCurrentAudio ? (
          <span className="btn btn-light">
            ■
          </span>
        ) : (
          <button type="button" onClick={() => setAudio(id)} className="btn btn-outline-primary">
            ▶
          </button>
        )}
      </span>
      <a href={`/audios/${id}`}>
        {name}
      </a>
    </div>
  )
}
