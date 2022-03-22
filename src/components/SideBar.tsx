import { Button } from './Button';
import {useState, useEffect} from 'react';
import { api } from '../services/api';
import '../styles/sidebar.scss';

interface GenreResponseProps { id: number; name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'; title: string;}
interface mother {  genreChange: any; selectedGenreId : number;}

export function SideBar(props: mother) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
 
  function handleClickButton(id: number) {
    props.genreChange(id) 
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  // }, [selectedGenreId]);
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key     ={String(genre.id)}
              title   ={genre.title}
              iconName={genre.name}
              onClick ={() => handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}