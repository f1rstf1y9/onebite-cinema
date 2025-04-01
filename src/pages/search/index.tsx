import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovie from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { MovieData } from "@/types";

export default function Search() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResults = async () => {
    const data = await fetchMovie(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResults();
    }
  }, [q]);

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
