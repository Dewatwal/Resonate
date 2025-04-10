import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-x-auto pb-2 gap-4 scrollbar-hide'>
          {albumsData.map((item,index) => (
            <div key={index} className='flex-shrink-0 w-40'> {/* Smaller width */}
              <AlbumItem 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>      
      
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-x-auto pb-2 gap-4 scrollbar-hide'>
          {songsData.map((item,index) => (
            <div key={index} className='flex-shrink-0 w-40'> {/* Smaller width */}
              <SongItem 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>      
    </>
  )
}

export default DisplayHome