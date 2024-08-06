import { SearchAttraction } from "~/types";

export const attractionMock: SearchAttraction = {
  name: "Jota Quest",
  type: "attraction",
  id: "K8vZ917jBhV",
  test: false,
  url: "https://www.ticketmaster.com/jota-quest-tickets/artist/3169008",
  locale: "en-us",
  images: [
    {
      ratio: "3_2",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_3_2.jpg",
      width: 1024,
      height: 683,
      fallback: true,
    },
    {
      ratio: "3_2",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_ARTIST_PAGE_3_2.jpg",
      width: 305,
      height: 203,
      fallback: true,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_EVENT_DETAIL_PAGE_16_9.jpg",
      width: 205,
      height: 115,
      fallback: true,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg",
      width: 2048,
      height: 1152,
      fallback: true,
    },
    {
      ratio: "3_2",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_PORTRAIT_3_2.jpg",
      width: 640,
      height: 427,
      fallback: true,
    },
    {
      ratio: "4_3",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_CUSTOM.jpg",
      width: 305,
      height: 225,
      fallback: true,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_PORTRAIT_16_9.jpg",
      width: 640,
      height: 360,
      fallback: true,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RECOMENDATION_16_9.jpg",
      width: 100,
      height: 56,
      fallback: true,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_LANDSCAPE_16_9.jpg",
      width: 1136,
      height: 639,
      fallback: true,
    },
    {
      ratio: "16_9",
      url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_16_9.jpg",
      width: 1024,
      height: 576,
      fallback: true,
    },
  ],
  classifications: [
    {
      primary: true,
      segment: { id: "KZFzniwnSyZfZ7v7nJ", name: "Music" },
      genre: { id: "KnvZfZ7vAeF", name: "World" },
      subGenre: { id: "KZazBEonSMnZfZ7v6te", name: "Brazil" },
      type: { id: "KZAyXgnZfZ7v7l1", name: "Group" },
      subType: { id: "KZFzBErXgnZfZ7vA71", name: "Band" },
      family: false,
    },
  ],
  upcomingEvents: { _total: 0, _filtered: 0 },
  _links: {
    self: { href: "/discovery/v2/attractions/K8vZ917jBhV?locale=en-us" },
  },
};

export const imagesPerRatioMock = [
  {
    ratio: "3_2",
    images: [
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: true,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: true,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: true,
      },
    ],
  },
  {
    ratio: "16_9",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: true,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: true,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: true,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: true,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: true,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: true,
      },
    ],
  },
  {
    ratio: "4_3",
    images: [
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: true,
      },
    ],
  },
];
