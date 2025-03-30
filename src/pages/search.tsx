import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-item";
import style from "./search.module.css";

export default function Search() {
  const router = useRouter();
  const q = router.query.q as string;

  return (
    <div className={style.container}>
      {movies
        .filter((movie) => movie.title.includes(q))
        .map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
