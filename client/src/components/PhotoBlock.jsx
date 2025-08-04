import React from 'react'

const PhotoBlock = ({ photo }) => {
  return (
    <article className='photo-block'>
      <img src={photo.url} alt={photo.alt} />
      <p>{photo.description}</p>
    </article>
  )
}

export default PhotoBlock