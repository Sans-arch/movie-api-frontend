import { BsChevronRight } from 'react-icons/bs';
import { Container, MoviesContainer, Title } from "./styles";

import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import apiCaller from '../../services/api';
import { MovieCard } from '../MovieCard';

interface IMovie {
    id: number;
    genres: string;
    imdbRating: number;
    name: string;
    originInfo: string;
    posterUrl: string;
    rottenRating: number;
}

export function FeaturedMovie() {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        apiCaller.get('/movies')
            .then(response => response.data)
            .then(data => setMovies(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <Container>
            <Title>
                <h2>Featured Movie</h2>
                <p>
                    See more
                    <BsChevronRight />
                </p>
            </Title>

            <MoviesContainer>
                {!movies.length && (
                    <CircularProgress />
                )}
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        title={movie.name}
                        originInfo={movie.originInfo}
                        imgUrl={movie.posterUrl}
                        genres={movie.genres}
                        ratings={{
                            imdb: movie.imdbRating,
                            rotten: movie.rottenRating
                        }}
                    />
                ))}
            </MoviesContainer>
        </Container>
    )
}