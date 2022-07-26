import React , {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Inperson from './childComp/Inperson';

const InpersonCarousel=()=>{
    // const {id} = useParams()
    const url = `http://192.241.157.30/activity/viewset/activity/`

    const [product, setProduct] = useState(null)
    // const getData = axios.get(url)
     

    useEffect(()=>{
         axios.get(url)
         .then(response=>{
            setProduct(response.data)
         })
    }, [url] )
    // if(product!=null){
    //   console.log(product);

    // }
    

    // if(product != null){
    //   console.log(product.length)
    //   for (let i=0; i<product.length; i++){
    //     console.log(product[i].title);
    //   }
    //   product.map((item)=>{
    //     console.log(item.title);
    //   })
    //   // for(let i=0)

    // }
    // let len = product[0].length
    // console.log(len)


    // for(let i = 0)
    // for(let item in product){
    //   console.log(item)
    // }
    // console.log(product.length)
    // for (let i=0; i<product.length; i++){
    //   console.log(product[i].title);
    // }


    if(product!=null){
      const responsive = {
        desktoplg: {
            breakpoint: { max: 4000, min: 1440 },
            items: 5,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
          },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 3,
          slidesToSlide: 1,
          partialVisibilityGutter: 24
        },
        tablet: {
          breakpoint: { max: 1024, min: 520 },
          items: 2,
          slidesToSlide:1,
          partialVisibilityGutter: 20
        },
        mobile: {
          breakpoint: { max: 520, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 60
        }
      };
      // if(product != null){
        return(
          <div className="full-carousel inpersongame  ">
             <Carousel
     swipeable={true}
     draggable={true}
     showDots={true}
     arrows={false}
     
     responsive={responsive}
     ssr={true} // means to render carousel on server-side.
     infinite={true}
     // autoPlay={this.props.deviceType !== "mobile" ? true : false}
     autoPlay={ false }
     // autoPlaySpeed={5000}
     keyBoardControl={true}
     customTransition=".5s ease-in-out"
     transitionDuration={500}
     containerClass="carousel-container"
     removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
     >
                
              { product &&
                product.map((item)=>
                (
                  <Inperson item={item} key={item.id}/>
                )
                
              )} 
            </Carousel>
          </div>

           
            
        )

    }
    
      // }
     

          




  //    return (
  //   <div className="full-carousel inpersongame  "> 
    // <Carousel
    //  swipeable={true}
    //  draggable={true}
    //  showDots={true}
    //  arrows={false}
     
    //  responsive={responsive}
    //  ssr={true} // means to render carousel on server-side.
    //  infinite={true}
    //  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    //  autoPlay={ false }
    //  // autoPlaySpeed={5000}
    //  keyBoardControl={true}
    //  customTransition=".5s ease-in-out"
    //  transitionDuration={500}
    //  containerClass="carousel-container"
    //  removeArrowOnDeviceType={["tablet", "mobile"]}
    //  //deviceType={this.props.deviceType}
    //  dotListClass="custom-dot-list-style"
    //  itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
    //  renderDotsOutside={true}
    //  partialVisible={true}
    //  >
  //    {/*====== slide 1========= */}
  //    <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //        background:"url('/assets/game-1.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //                  <p className="flex items-center space-x-2 text-white-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">{title}</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">${product.price}</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">Treasure Island</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 2========= */}
  //    <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //        background:"url('/assets/game-2.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">Escape From Alcatraz</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border block card-book-btn  mx-auto card-book-btn border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 3========= */}
  //     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //         background:"url('/assets/game-3.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">HOLLYWORD PREMIERE</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border block card-book-btn  mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 4========= */}
  //     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //         background:"url('/assets/game-4.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">LOST IN THE JUNGLE</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 5========= */}
  //     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //         background:"url('/assets/game-5.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">Black Ops</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border block card-book-btn mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 6========= */}
  //     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //         background:"url('/assets/game-1.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">Treasure Island</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border block card-book-btn mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 7========= */}
  //     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //         background:"url('/assets/game-3.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">Treasure Island</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border block card-book-btn mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //     {/*====== slide 8========= */}
  //     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
  //         background:"url('/assets/game-1.jpg')"
  //       }}>
  //      <div className="card-container">
  //          <div className="card-head flex justify-between items-center p-4 pb-8">
  //              <div className="card-info">
  //              <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">Inperson</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">All age</span>  </p> 
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">50 Minutes</span>  </p>
  //                  <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">2-10 Players</span>  </p>
  //              </div>
  //              <div className="card-ribbon">
  //                      <div className="inline-block text-center py-2 px-4 bg-red-600">
  //                          <p className="text-lg text-white">FROM</p>
  //                          <p className="text-3xl text-white font-bold">$28</p>
  //                      </div>
  //              </div>
  //          </div>
  //          <div className="card-gap py-10"> 

  //          </div>
  //          <div className="card-bottom p-4 pt-12"> 
  //              <div className="card-game-desc text-center">
  //                  <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">Treasure Island</h3>
  //                  <p className="text-gray-200 lg:text-lg">Select the number of participants fill out the details. fill out the number of details.</p>
  //              </div>
  //              <div className="card-game-link mt-4 text-center">
  //                  <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
  //                  <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
  //              </div>
               
  //           </div>
  //      </div>

  //    </div>
  //  </Carousel>
  //  </div>
  //   )
 
  // return(
  //   <div>
  //        {/* <Inperson /> */}
  //   </div>
  // )
}

export default InpersonCarousel;