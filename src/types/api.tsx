export interface Welcome {
  page:      number;
  pageCount: number;
  articles:  Article[];
}

export interface Article {
  title:       string;
  url:         string;
  source:      Source;
  imgSrc:      string;
  summary:     string;
  articleDate: string;
}

export enum Source {
  Ign = "ign",
}
