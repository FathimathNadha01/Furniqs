import React, { useState } from 'react'
import Button from '../components/Button'


function Carousel() {
    const [slides,setslides] = useState([
        {
            img: "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/6d9b7ae2-0083-4e4c-bd04-3e96720a571c.jpeg",
            title: "01-Bed Room",
            subtitle: "Inner Peace"
          },
          {
            img: "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ca7cc203-8fb7-496f-97bb-e7d02137145a.jpeg",
            title: "02-Living Room",
            subtitle: "Cozy Minimalism"
          },
          {
            img: "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ec98621d-10b6-4e4a-b665-146481c14b0f.jpeg",
            title: "03-Workspace",
            subtitle: "Creative Corner"
          }
    ])

    const handletext=()=>{
        const updatearray = [...slides.slice(1),slides[0]]
        // console.log(updatearray);
        setslides(updatearray)
        console.log(slides);
        
        
    }
  return (
    <div className='bg-amber-100 p-10 flex'>
        <div>
            <h1 className='font-bold text-5xl'>50+ Beautiful Rooms Inspiration</h1>
            <p className='mt-5' >Our designer already made a lot of beautiful <br /> prototype of rooms that inspire yo</p>
            <Button classname={'bg-amber-700 text-white mt-5'} label={"Explore More"} />
        </div>
        <div className='flex gap-2'>
            <div className='relative'>
                <img src={slides[0].img} height={500} width={400}alt="" />
               <div className='absolute bottom-9 left-5 flex items-end'>
                <div className='bg-white w-fit p-3 '>
                    <p>{slides[0].title}</p>
                    <h1>{slides[0].subtitle}</h1>
                </div>
                <div className=''>
                    <Button onClick={()=>handletext()} classname={"bg-amber-600 text-white"} label={"->"}/>
                </div>
                </div>
            </div>
            <div className=''>
                <img className='opacity-40' src={slides[1].img} height={400} width={300}/>
                {/* <img className='opacity-40' src={slides[2].img} height={400} width={300}/> */}

            </div>
        </div>
    </div>
  )
}

export default Carousel