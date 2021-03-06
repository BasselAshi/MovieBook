import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getSearchedMovies } from '../../actions/movies';
import MovieOverview from '../movie-overview/movie-overview';
import BackgroundWrapper from '../background-wrapper/background-wrapper';
import NavBar from '../navbar/navbar';
import { Spin } from 'antd';
import styles from "./search-result.module.css";

export default function SearchResult(props) {
  const { input } = useParams();
  const [movies, setMovies] = useState();

  const fetchSearchedMovies = async () => {
    const response = await getSearchedMovies(input);
    await setMovies(response);
  };

  useEffect(() => {
    fetchSearchedMovies().then(() => {
    });
  }, []);

  return (
    <BackgroundWrapper>
      <NavBar user={props.user} />
      <div className={styles.titleText}>Search Result</div>
      <div className={styles.resultContainer}>
        {!movies && <div className={styles.loading}><Spin /></div>}
        {movies &&
          movies.map(movie => {
            const passedProps = {
              sectionTitle: null,
              imgURL: movie.poster,
              movieId: movie._id,
              movieTitle: movie.title,
              screeningYear: movie.year,
              plot: movie.fullplot
            };
            return <MovieOverview {...passedProps} />
          })}
      </div>
    </BackgroundWrapper>
  );
}
