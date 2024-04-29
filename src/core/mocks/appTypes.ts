export type PaginationProps = {
  totalPages: number;
}

export type CardProps = {
  title: string,
  date: string,
  imgLink: string,
  rating: number,
}

export type SearchItemProps = {
  release_date: string | undefined,
  title: string,
  vote_average: number,
  poster_path: string,
}