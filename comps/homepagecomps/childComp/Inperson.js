import React from 'react'

const Inperson = ({item}) => {
    
  return (
     
    <div className="text-white bg-gray-300 game-slider-card card-border" style={{
        backgroundImage: "url(" + item.cover_image.image + ")",
       }}>
        
      <div className="card-container">
          <div className="card-head flex justify-between items-center p-4 pb-8">
              <div className="card-info">
                  <p className="flex items-center space-x-2 text-white-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">{item.category.title}</span>  </p>
                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">{item.duration}</span>  </p>
                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">{item.minimum_participant}-{item.maximum_participant}</span>  </p>
              </div>
              <div className="card-ribbon">
                      <div className="inline-block text-center py-2 px-4 bg-red-600">
                          <p className="text-lg text-white">FROM</p>
                          <p className="text-3xl text-white font-bold">${item.price}</p>
                      </div>
              </div>
          </div>
          <div className="card-gap py-10"> 

          </div>
          <div className="card-bottom p-4 pt-12"> 
              <div className="card-game-desc text-center">
                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">{item.title}</h3>
                  <p className="text-gray-200 lg:text-lg">{item.description}</p>
              </div>
              <div className="card-game-link mt-4 text-center">
                  <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
              </div>
              
           </div>
      </div>

    </div>
  )
}

export default Inperson