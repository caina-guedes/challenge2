import { useEffect, useState } from 'react'; 
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api';
import './styles/global.scss';

interface GenreResponseProps {id: number;name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';title: string;}
interface MovieProps { imdbID: string; Title: string; Poster: string; Ratings: Array<{ Source: string; Value: string;}>; Runtime: string;}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);
  const [selectedGenre  , setSelectedGenre  ] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies]                   = useState<MovieProps[]>([]);
  let id =1;
  function genreChange (genreId){ 
    setSelectedGenreId(genreId);
    console.log(selectedGenreId, ' estado no app');
    console.log(genreId, ' parametro que vem pro app');
    id = genreId;
    // api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`) // .then(response => {setMovies(response.data)}); // api.get<GenreResponseProps>(`genres/${selectedGenreId}`) // .then(response => {setSelectedGenre(response.data)})
  }
  useEffect(() => {
    console.log('entrei no use effect e o id é: ',selectedGenreId);
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
      // console.log(response.data);  
    });
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);})
      // console.log(movies);
  }, [selectedGenreId]);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genreChange     = {genreChange} selectedGenreId = {selectedGenreId}/>
      <Content movies = {movies} title = {selectedGenre.title}/>
    </div>
  )
}

// import './styles/sidebar.scss';
// import './styles/content.scss';

// interface GenreResponseProps {
//   id: number;
//   name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
//   title: string;
// }

// interface MovieProps {
//   imdbID: string;
//   Title: string;
//   Poster: string;
//   Ratings: Array<{
//     Source: string;
//     Value: string;
//   }>;
//   Runtime: string;
// }

  // const [selectedGenreId, setSelectedGenreId] = useState(1);

  // const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  // const [movies, setMovies] = useState<MovieProps[]>([]);

    // useEffect(() => {
  //   api.get<GenreResponseProps[]>('genres').then(response => {
  //     setGenres(response.data);
  //     console.log(response.data)
  //   });
  // }, []);

   // useEffect(() => {
    // api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
    //   setMovies(response.data);
    // });

  //   api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
  //     setSelectedGenre(response.data);
  //   })
  // }, [selectedGenreId]);


  // function handleClickButton(id: number) {
  //   setSelectedGenreId(id);
  // }
 
      {/* <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav> */}

      {/* <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div> */}
  