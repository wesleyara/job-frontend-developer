/* eslint-disable @typescript-eslint/no-explicit-any */
interface HttpClientTypes {
  get: (endpoint: "youtube" | "ticket", query: string) => Promise<any>;
}

export class HttpClient implements HttpClientTypes {
  async get(endpoint: "youtube" | "ticket", query: string) {
    const url =
      endpoint === "youtube"
        ? process.env.YOUTUBE_ENDPOINT +
          query.replace(/\s/g, "%20") +
          "&key=" +
          process.env.YOUTUBE_KEY
        : process.env.TICKET_ENDPOINT +
          query.replace(/\s/g, "%20") +
          "&apikey=" +
          process.env.TICKET_KEY;

    const response = await fetch(url);
    return response.json();
  }
}
