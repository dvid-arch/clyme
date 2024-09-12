import { useState } from 'react'

import useFirebaseImageUrls from '../../firebase/firebase-config'

function Projects() {
    const imageUrls = useFirebaseImageUrls("/images/projects")


    const [max, setMax] = useState(20);
    const [theresMoreImages, setTheresMoreImages] = useState(true);

    function inCreaseMax() {
        if (max > imageUrls.length) {
            setTheresMoreImages(false);
        }
        setMax(max + 10);
    }
    return (
        <div>


            <div className='py-20'>
                <h2 className='text-5xl text-center mb-6 font-bold'>A Thousand Words in Images</h2>
                <p className='max-w-[600px] text-slate-800 text-center mx-auto'>See Quoutes from our Volunteers, see imgages of Awards we got, see moments we got to work to save the planet</p>
                <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 mt-20 py-10 bg-slate-50 px-8">
                    {
                        imageUrls.slice(0, max).map((url, i) => <div className=" bg-white shadow-md p-4">

                            <img src={url} alt="" className="w-full mb-2" />

                        </div>
                        )
                    }
                </div>
                {
                    theresMoreImages && 
                    <button className='block bg-brblue text-white font-bold px-8 py-2 mt-8 ml-8' onClick={inCreaseMax}>More</button>
                }
            </div>
        </div>
    )
}

export default Projects