import { MovieData } from "@/types";
import Link from "next/link";

export default function MovieItem({
  id,
  title,
  subTitle,
  description,
  releaseDate,
  company,
  genres,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`}>
      <img src={posterImgUrl} />
    </Link>
  );
}
