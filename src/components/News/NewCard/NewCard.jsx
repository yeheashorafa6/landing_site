import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function NewCard({item}) {
  return (
       <>
       {
        item.map((item)=>{
            return (
                <div className="group relative block bg-black rounded-[45px] cursor-pointer" key={item.id}>
                    <Image
                        fill
                        alt=""
                        src={item.img}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-[45px]"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8 rounded-3xl">
                        <p className="text-2xl font-medium uppercase tracking-widest text-accent">kitchen</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-lg text-white mb-3">
                                    {item.desc}
                                </p>
                                <div className="flex justify-between">
                                    <h3 className='text-gray-300 mt-3'>{item.date}</h3>
                                    <button className="text-sm text-white w-[50px] h-[50px] rounded-full bg-accent hover:bg-white hover:text-accent transition-all duration-300">
                                        <FontAwesomeIcon icon={faArrowRightLong}/>
                                    </button>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        })
       }
       </>
  )
}

export default NewCard
