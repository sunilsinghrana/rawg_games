

export default function Banner({gameBanner}:any) {
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h1 className='text-[32px] text-white font-bold'>{gameBanner.name}</h1>
            <button className='bg-blue-700 text-white px-2 p-1 rounded-md hover:bg-blue-600'>Get Now</button>
        </div>
      <img src={gameBanner.background_image} alt="backgroundImage" className='md:h-[500px] w-full object-cover rounded-xl'  />
    </div>
  )
}
