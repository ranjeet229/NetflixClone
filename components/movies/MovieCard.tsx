// components/movie-card.tsx
"use client";

import type { Movie } from "@/lib/generated/prisma";
import { IKImage } from "imagekitio-next";
import { MovieDialog } from "./MovieDialog";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <MovieDialog movie={movie}>
      <div className="relative h-48 min-w-[200px] md:h-56 md:min-w-[300px]">
        <IKImage
          urlEndpoint="https://ik.imagekit.io/dqvo3eeqn"
          className="object-cover rounded-lg"
          src={movie.thumbnailUrl || ""}
          alt={movie.movieName}
          width={300}
          height={200}
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>
    </MovieDialog>
  );
}