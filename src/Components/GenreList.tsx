import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({ genresId, selectedGenresName }: any) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
    // ReactTooltip.rebuild();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp: any) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="bg-gray-400 bg-opacity-10 rounded-2xl flex flex-col justify-center">
      <h2 className="text-[30px] font-bold dark:text-white text-center my-3">
        Genre
      </h2>
      {genreList.map((data: any, index: number) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genresId(data.id);
            selectedGenresName(data.name);
          }}
          className={`flex gap-2 items-center mb-2 my-2 group hover:bg-gray-400 hover:bg-opacity-40 dark:hover:bg-gray-700 dark:hover:bg-opacity-40 mx-5 rounded-xl p-3 cursor-pointer ${
            activeIndex == index ? "bg-gray-300 dark:bg-gray-700" : null
          } w-fit`}
          key={data.id}
        >
          <div className="group relative w-max">
            <img
              src={data.image_background}
              alt="backgound"
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                activeIndex == index ? "scale-105" : null
              }`}
            />
            <span
              className={`pointer-events-none absolute top-1 left-14 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xl dark:text-white ${
                activeIndex == index ? "font-bold" : null
              }`}
            >
              {data.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
