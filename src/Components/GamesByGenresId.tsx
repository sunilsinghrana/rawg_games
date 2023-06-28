
export default function GamesByGenresId({gameList, selectedGenresName}:any) {
    
  return (
    <div>
        <h2 className="font-bold text-[30px] dark:text-white mt-5" >{selectedGenresName} Games</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((data: any, index:number)=> (
            <div className="bg-[#eee] dark:bg-[#3B3B3B] p-3 rounded-lg h-full pb-10 hover:scale-110 transition-all duration-300 ease-in-out" key={data.id}> 
                <img src={data.background_image} alt="" className="w-full h-[80%] rounded-xl object-cover" />
                <h2 className="text-[20px] dark:text-white font-bold">{data.name} <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{data.metacritic}</span></h2>
                <h2 className="text-gray-500 dark:text-gray-300"> Rating:{data.rating} || Review: {data.reviews_count} || Suggestion: {data.suggestions_count}</h2>
            </div>
        ))}
      
    </div>
    </div>
  )
}
