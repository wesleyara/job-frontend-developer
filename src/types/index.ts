export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface Genre {
  id: string;
  name: string;
}

export interface Classification {
  primary: boolean;
  segment: Genre;
  genre: Genre;
  subGenre: Genre;
  type: Genre;
  subType: Genre;
  family: boolean;
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface UpcomingEvents {
  _total: number;
  _filtered: number;
}

export interface SearchAttraction {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  classifications: Classification[];
  upcomingEvents: UpcomingEvents;
  _links: Links;
}
