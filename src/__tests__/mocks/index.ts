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

export const youtubeVideosDetailsMock = {
  kind: "youtube#video",
  etag: "9aqHaETyU6SAjCwBBwnVNU0MEWo",
  id: "YlUKcNNmywk",
  snippet: {
    publishedAt: "2009-10-27T02:35:59Z",
    channelId: "UCEuOwB9vSL1oPKGNdONB4ig",
    title:
      "Red Hot Chili Peppers - Californication (Official Music Video) [HD UPGRADE]",
    description:
      "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. \n🔔 Subscribe to the channel: https://youtube.com/c/RedHotChiliPeppers/?sub_confirmation=1\n\nCalifornication available here: http://smarturl.it/getrhcpcalifornica\n\n\"Californication\" is the Red Hot Chili Peppers' fourth single and sixth track from their 1999 seventh studio album, Californication. Released as a single in 2000, the song reached #69 on the Billboard Hot 100 in the US, and #16 on the UK charts, and hit #1 on both US Mainstream Rock Tracks for 2 weeks and US Modern Rock Tracks for 1 week.\n\nFollow Red Hot Chili Peppers:\nWeb: https://redhotchilipeppers.com \nInstagram: https://instagram.com/chilipeppers  \nFacebook: https://facebook.com/chilipeppers \nTwitter: https://twitter.com/chilipeppers \nTumblr: https://chilipeppers.tumblr.com\n\nRed Hot Chili Peppers is a rock band renowned for their hits “Californication,” “Otherside,” “Scar Tissue,” “Dani California,” “Can’t Stop,” “Snow (Hey Oh),” and “Dark Necessities.” They worked with artists like George Clinton, Eddie Vedder, and Elton John — amassing billions of global streams and inducted into the “Rock and Roll Hall of Fame.”\n\nLyrics: \nPsychic spies from China try to steal your mind's elation\nAn' little girls from Sweden dream of silver screen quotation\nAnd if you want these kind of dreams, it's Californication\nIt's the edge of the world and all of Western civilization\nThe sun may rise in the east at least it settled in a final location\nIt's understood that Hollywood sells Californication\n\nPay your surgeon very well to break the spell of aging\nCelebrity skin, is this your chin or is that war you're waging?\nFirstborn unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nMarry me, girl, be my fairy to the world, be my very own constellation\nA teenage bride with a baby inside getting high on information\nAnd buy me a star on the boulevard, it's Californication\nSpace may be the final frontier but it's made in a Hollywood basement\nAnd Cobain, can you hear the spheres singing songs off Station to Station?\nAnd Alderaan's not far away, it's Californication\n\nBorn and raised by those who praise control of population\nWell, everybody's been there and I don't mean no vacation\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nDestruction leads to a very rough road but it also breeds creation\nAnd earthquakes are to a girl's guitar they're just another good vibration\nAnd tidal waves couldn't save the world from Californication\n\nPay your surgeon very well to break the spell of aging\nSicker than the rest, there is no test but this is what you're craving\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\n#OfficialMusicVideo #RedHotChiliPeppers #Californication #WeAreWarnerRecords",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/YlUKcNNmywk/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/YlUKcNNmywk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/YlUKcNNmywk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/YlUKcNNmywk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/YlUKcNNmywk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "Red Hot Chili Peppers",
    tags: [
      "rhcp californiacation",
      "rhcp music video",
      "red hot chili peppers songs",
      "rhcp",
      "californication music video",
      "red hot chili peppers music video",
      "californication album",
      "red hot chili peppers",
      "rhcp official music video",
      "redhot",
      "californication official music video",
      "dream of californication",
      "official red hot chili peppers",
      "californication rhcp",
      "warner records",
      "red hot chili peppers song",
      "californication",
      "rhcp song",
    ],
    categoryId: "10",
    liveBroadcastContent: "none",
    localized: {
      title:
        "Red Hot Chili Peppers - Californication (Official Music Video) [HD UPGRADE]",
      description:
        "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. \n🔔 Subscribe to the channel: https://youtube.com/c/RedHotChiliPeppers/?sub_confirmation=1\n\nCalifornication available here: http://smarturl.it/getrhcpcalifornica\n\n\"Californication\" is the Red Hot Chili Peppers' fourth single and sixth track from their 1999 seventh studio album, Californication. Released as a single in 2000, the song reached #69 on the Billboard Hot 100 in the US, and #16 on the UK charts, and hit #1 on both US Mainstream Rock Tracks for 2 weeks and US Modern Rock Tracks for 1 week.\n\nFollow Red Hot Chili Peppers:\nWeb: https://redhotchilipeppers.com \nInstagram: https://instagram.com/chilipeppers  \nFacebook: https://facebook.com/chilipeppers \nTwitter: https://twitter.com/chilipeppers \nTumblr: https://chilipeppers.tumblr.com\n\nRed Hot Chili Peppers is a rock band renowned for their hits “Californication,” “Otherside,” “Scar Tissue,” “Dani California,” “Can’t Stop,” “Snow (Hey Oh),” and “Dark Necessities.” They worked with artists like George Clinton, Eddie Vedder, and Elton John — amassing billions of global streams and inducted into the “Rock and Roll Hall of Fame.”\n\nLyrics: \nPsychic spies from China try to steal your mind's elation\nAn' little girls from Sweden dream of silver screen quotation\nAnd if you want these kind of dreams, it's Californication\nIt's the edge of the world and all of Western civilization\nThe sun may rise in the east at least it settled in a final location\nIt's understood that Hollywood sells Californication\n\nPay your surgeon very well to break the spell of aging\nCelebrity skin, is this your chin or is that war you're waging?\nFirstborn unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nMarry me, girl, be my fairy to the world, be my very own constellation\nA teenage bride with a baby inside getting high on information\nAnd buy me a star on the boulevard, it's Californication\nSpace may be the final frontier but it's made in a Hollywood basement\nAnd Cobain, can you hear the spheres singing songs off Station to Station?\nAnd Alderaan's not far away, it's Californication\n\nBorn and raised by those who praise control of population\nWell, everybody's been there and I don't mean no vacation\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nDestruction leads to a very rough road but it also breeds creation\nAnd earthquakes are to a girl's guitar they're just another good vibration\nAnd tidal waves couldn't save the world from Californication\n\nPay your surgeon very well to break the spell of aging\nSicker than the rest, there is no test but this is what you're craving\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\n#OfficialMusicVideo #RedHotChiliPeppers #Californication #WeAreWarnerRecords",
    },
    defaultAudioLanguage: "en",
  },
  contentDetails: {
    duration: "PT5M22S",
    dimension: "2d",
    definition: "hd",
    caption: "true",
    licensedContent: true,
    contentRating: {},
    projection: "rectangular",
  },
  status: {
    uploadStatus: "processed",
    privacyStatus: "public",
    license: "youtube",
    embeddable: true,
    publicStatsViewable: true,
    madeForKids: false,
  },
  statistics: {
    viewCount: "1163479579",
    likeCount: "5067228",
    favoriteCount: "0",
    commentCount: "131428",
  },
};
