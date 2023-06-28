
export default function TrendingGames({gameBanner}:any) {

  return (
    <div className='my-5 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
    <div className='sm:grid-cols-2 sm:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {gameBanner.map((data: any, index:number)=> (
            <div key={data.id} className='dark:bg-[#3B3B3B] bg-[#eee] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out'>
                <img src={data.background_image} alt="background_image" className='h-[270px] rounded-t-lg object-cover' />
                <h2 className='dark:text-white p-2 text-[20px] font-bold'>{data.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}
