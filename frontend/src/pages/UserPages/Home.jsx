// import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/**top */}

        <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
          <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next <span className='text-slate-500'>perfect </span><br />
           place with ease</h1>
           <div className='text-gray-400 text-xs sm:text-sm'>
           City Next helps you find the best choice with your desired budget  means that City Next, a service or platform of some kind, assists you in locating the most suitable options or solutions that align with the amount of money you are willing to spend. In other words, it helps you make decisions or selections that fit your budget while ensuring you get the most value or quality for your money.
            <br />
            we have a wide range of properties to chose from
           </div>

           <div>
            <Link to={'/search '} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
            Let s Search in  CityNext . . .
            </Link>
           </div>
        </div>
      {/**swiper */}
      {/**listings */}
    </div>
  )
}

export default Home