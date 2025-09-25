import React from 'react'
import Favoris from './Favoris'

function AllFavoris() {
  return (
    <div className='@container mt-10' >

    
    <div className='grid gap-5 mt-10 mb-10 px-5 @3xs:grid-cols-1 @xl:grid-cols-2 @3xl:grid-cols-3 @7xl:grid-cols-4'>
      <Favoris/>
      <Favoris/>
      <Favoris/>
      <Favoris/>
      <Favoris/>
      <Favoris/>
      <Favoris/>
      <Favoris/>
      

    </div>
    </div>
  )
}

export default AllFavoris
