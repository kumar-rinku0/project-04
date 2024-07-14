import React from 'react'

const Clip = () => {
    return (
        <main className='flex justify-center items-center bg-white mt-8'>
            <div className='max-w-full max-h-[500px] my-[10%] w-[1040px] flex justify-center items-center'>
                <div className='w-full h-[80vh] relative'>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/_La3wQlntgw" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                    </iframe>
                </div>
            </div>
        </main>
    )
}

export default Clip