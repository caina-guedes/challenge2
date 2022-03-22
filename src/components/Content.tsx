import {useState,useEffect} from 'react'
import { api } from '../services/api';
import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';
 
interface GenreResponseProps {id: number;name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';title: string;}
interface MovieProps { imdbID: string; Title: string; Poster: string; Ratings: Array<{ Source: string; Value: string;}>; Runtime: string;}

export function Content(props: any) {
  // Complete aqui
  // useEffect(() => {
  //   setSelectedGenreId(props.selectedGenreId);
  // },[])
  // console.log('montou o content com o id chegando como : ', props.selectedGenreId)
  // console.log('montou o content com o id interno como : ' , props.selectedGenreId)

  
  
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map((movie: any) => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}