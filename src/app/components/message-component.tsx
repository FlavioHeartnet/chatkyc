import Image from 'next/image'
export default function MessageComponent({ string = "" }){
    return (
        <div className='px-5 flex flex-row mb-8'>
            <div className='flex-none w-50 mr-3'>
                <Image 
                    src="/profile/profile.png" 
                    alt={''}
                    width="100"
                    height="100"
                    className='rounded-full'/>
            </div>
            <div className='basis-auto'>
                <p>{string}</p>
            </div>
        </div>
    )
}