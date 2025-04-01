import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovie from "@/lib/fetch-movies";
import { InferGetStaticPropsType } from "next";
import { fetchRandomMovies } from "@/lib/fetch-random-movies";

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovie(),
    fetchRandomMovies(),
  ]);
  return {
    props: { allMovies, recoMovies },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section className={style.recommend_section}>
        <h3>지금 가장 추천하는 영화</h3>
        <div>
          {recoMovies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section className={style.all_section}>
        <h3>등록된 모든 영화</h3>
        <div>
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
