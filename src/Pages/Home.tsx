import { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenresId from '../Components/GamesByGenresId'

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gametListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action')
  useEffect(()=>{
    getAllGames()
    getGameListByGenreId(4)
  },[])
  const getAllGames = ()=> {
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results);
    })
  }

  const getGameListByGenreId=(id:number)=>{
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      setGameListByGenre(resp.data.results);
    })
  }
  return (
    <div className='grid grid-cols-4 px-4'>
        <div className=' w-[25%] hidden md:block my-6 m-auto'>
          <GenreList genresId={(genresId:number)=>getGameListByGenreId(genresId)}
          selectedGenresName={(name:string)=> setSelectedGenresName(name)} />
        </div>
        <div className='col-span-4 md:col-span-3 w-full h-full my-6'>
          {allGameList && gametListByGenre ?
          <div>
          <Banner gameBanner={allGameList[0]} />
          <TrendingGames gameBanner={allGameList} />
          <GamesByGenresId gameList={gametListByGenre} selectedGenresName={selectedGenresName} />
          </div>
          : null
        }
        </div>
    </div>
  )
}

export default Home
