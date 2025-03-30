import { useRouter } from "next/router";
import movies from "@/mock/movies.json";
import style from "./[id].module.css";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${movie.posterImgUrl}')` }}
      >
        <img src={movie.posterImgUrl} />
      </div>
      <div className={style.title}>{movie.title}</div>
      <div className={style.detailInfo}>
        {movie.releaseDate} / {movie.genres.join(", ")} / {movie.runtime}
      </div>
      <div className={style.company}>{movie.company}</div>
      <div className={style.subTitle}>{movie.subTitle}</div>
      <div className={style.description}>{movie.description}</div>
    </div>
  );
}
