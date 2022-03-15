import React from 'react'

export default ({ audio }) => (
  <>
    {Object.keys(audio).length > 0 ? (
      <div className="fixed-player">
        <span className="h5 mb-0 me-3">▶</span>
        {audio.name}
      </div>
    ) : <></>
    }
  </>
)
