import React, { useState } from 'react'

const images=[
    "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/24fada32-83ae-4598-9815-06fc6b891277.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/b11d590f-f665-411c-a03b-96729b9255ac.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ec98621d-10b6-4e4a-b665-146481c14b0f.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ca7cc203-8fb7-496f-97bb-e7d02137145a.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/6d9b7ae2-0083-4e4c-bd04-3e96720a571c.jpeg",
]

export default function Imagegallery() {
    const [selectedimage,setselectedimage] = useState(images[0]);
  return (
    <div>
        <div className='flex gap-7 justify-center items-center'>
            <div className='space-y-4'>{
                images.map((img,id)=>(
                    <img src={img}
                    key={id}
                    width={100}
                    className={` hover:scale-110 ${selectedimage==img?" border-amber-500 border-2":"border-transparent"}`}
                    onClick={()=>setselectedimage(img) 
                    
                    }
                    />
                ))}


            </div>
            <div>
                <img src={selectedimage} alt="" width={500}/>
            </div>
        </div>
    </div>
  )
}

