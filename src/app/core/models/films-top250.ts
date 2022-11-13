
export interface Data{
  errorMessage: string
  items: FilmsTop250Response[];
}

export interface FilmsTop250Response {
  id: string;
  title: string;
  year: string;
  imDbRating: string
}

export class FilmsTop250 {
  id!: string;
  title!: string;
  year!: string;
  imDbRating!: string;

  constructor(data: FilmsTop250Response) {
    Object.assign(this, data);
  }
}
