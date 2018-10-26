export interface IMovie{
   id: number;
   video: boolean;
   vote_count: number;
   vote_average: number;
   title: string;
   popularity: number;
   original_language: string;
   original_title: string;
   genre_ids: any;
   adult: boolean;
   overview: string;
   poster_path: string;
   backdrop_path: string;
   release_date: number
}
