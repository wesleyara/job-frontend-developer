/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    YOUTUBE_ENDPOINT: process.env.YOUTUBE_ENDPOINT,
    TICKET_ENDPOINT: process.env.TICKET_ENDPOINT,
    YOUTUBE_KEY: process.env.YOUTUBE_KEY,
    TICKET_KEY: process.env.TICKET_KEY,
  },
  images: {
    domains: ["s1.ticketm.net", "i.ytimg.com"],
  },
};

export default nextConfig;
