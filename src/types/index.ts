/* eslint-disable @typescript-eslint/no-explicit-any */
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

export interface ImageType {
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
  externalLinks?: any;
  images: ImageType[];
  classifications: Classification[];
  upcomingEvents: UpcomingEvents;
  _links: Links;
}

export interface ImagesPerRatioTypes {
  ratio: string;
  images: ImageType[];
}

///

export interface ContentRating {}

export interface Localized {
  title: string;
  description: string;
}
export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Status {
  uploadStatus: string;
  privacyStatus: string;
  license: string;
  embeddable: boolean;
  publicStatsViewable: boolean;
  madeForKids: boolean;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres?: Default;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage?: string;
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
}

export interface YoutubeDetailsType {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  status: Status;
  statistics: Statistics;
}
