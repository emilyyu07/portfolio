export type SpotifySong = {
  title: string;
  artist: string;
  color: string;
  accent: string;
  imageUrl: string;
  spotify: string;
  progress: number;
};

export const spotifySongs: SpotifySong[] = [
  {
    title: "I've Seen It",
    artist: "Olivia Dean",
    color: "#1f2028",
    accent: "#9f90ab",
    imageUrl: "/songs/1.jpg",
    spotify: "https://open.spotify.com/search/I've%20Seen%20It%20Olivia%20Dean",
    progress: 9,
  },
  {
    title: "Call Your Mom",
    artist: "Noah Kahan",
    color: "#1f2630",
    accent: "#8da2bc",
    imageUrl: "/songs/2.jpg",
    spotify: "https://open.spotify.com/search/Call%20Your%20Mom%20Noah%20Kahan",
    progress: 18,
  },
  {
    title: "Come Back to Earth",
    artist: "Mac Miller",
    color: "#1b2626",
    accent: "#8fa6a0",
    imageUrl: "/songs/3.jpg",
    spotify:
      "https://open.spotify.com/search/Come%20Back%20to%20Earth%20Mac%20Miller",
    progress: 27,
  },
  {
    title: "Free Now",
    artist: "Gracie Abrams",
    color: "#20242d",
    accent: "#b0a0bb",
    imageUrl: "/songs/4.jpg",
    spotify: "https://open.spotify.com/search/Free%20Now%20Gracie%20Abrams",
    progress: 36,
  },
  {
    title: "Peter",
    artist: "Taylor Swift",
    color: "#241f27",
    accent: "#af96b2",
    imageUrl: "/songs/5.jpg",
    spotify: "https://open.spotify.com/search/Peter%20Taylor%20Swift",
    progress: 45,
  },
  {
    title: "Loose",
    artist: "Daniel Caesar",
    color: "#221f22",
    accent: "#c2ad96",
    imageUrl: "/songs/6.jpg",
    spotify: "https://open.spotify.com/search/Loose%20Daniel%20Caesar",
    progress: 54,
  },
  {
    title: "exile (feat. Bon Iver)",
    artist: "Taylor Swift, Bon Iver",
    color: "#191f2a",
    accent: "#93a7c1",
    imageUrl: "/songs/7.jpg",
    spotify:
      "https://open.spotify.com/search/exile%20Taylor%20Swift%20Bon%20Iver",
    progress: 63,
  },
  {
    title: "Do I Wanna Know?",
    artist: "Hozier",
    color: "#1f2323",
    accent: "#8fa19d",
    imageUrl: "/songs/8.jpg",
    spotify: "https://open.spotify.com/search/Do%20I%20Wanna%20Know%20Hozier",
    progress: 72,
  },
  {
    title: "Everywhere, Everything",
    artist: "Noah Kahan, Gracie Abrams",
    color: "#222b2c",
    accent: "#8ea4a1",
    imageUrl: "/songs/10.jpg",
    spotify:
      "https://open.spotify.com/search/Everywhere%2C%20Everything%20Noah%20Kahan%20Gracie%20Abrams",
    progress: 90,
  },
  {
    title: "No. 1 Party Anthem",
    artist: "Arctic Monkeys",
    color: "#231d20",
    accent: "#af949c",
    imageUrl: "/songs/11.jpg",
    spotify:
      "https://open.spotify.com/search/No.%201%20Party%20Anthem%20Arctic%20Monkeys",
    progress: 100,
  },
  {
    title: "Radio",
    artist: "Lana Del Rey",
    color: "#1d1a22",
    accent: "#d7b0a0",
    imageUrl: "/songs/12.jpg",
    spotify: "https://open.spotify.com/search/Radio%20Lana%20Del%20Rey",
    progress: 12,
  },
  {
    title: "Redbone",
    artist: "Childish Gambino",
    color: "#1c2620",
    accent: "#d1a06d",
    imageUrl: "/songs/13.jpg",
    spotify: "https://open.spotify.com/search/Redbone%20Childish%20Gambino",
    progress: 22,
  },
  {
    title: "If I Knew",
    artist: "Bruno Mars",
    color: "#211b28",
    accent: "#bfa9d7",
    imageUrl: "/songs/14.jpg",
    spotify: "https://open.spotify.com/search/If%20I%20Knew%20Bruno%20Mars",
    progress: 34,
  },
  {
    title: "About You",
    artist: "the 1975",
    color: "#1a1d2d",
    accent: "#a9b6d6",
    imageUrl: "/songs/15.jpg",
    spotify: "https://open.spotify.com/search/About%20You%20the%201975",
    progress: 48,
  },
  {
    title: "For Emma",
    artist: "Bon Iver",
    color: "#1c2422",
    accent: "#b9d0c4",
    imageUrl: "/songs/16.jpg",
    spotify: "https://open.spotify.com/search/For%20Emma%20Bon%20Iver",
    progress: 62,
  },
  {
    title: "Float",
    artist: "Olivia Dean",
    color: "#1f1a20",
    accent: "#d3b2d7",
    imageUrl: "/songs/17.jpg",
    spotify: "https://open.spotify.com/search/Float%20Olivia%20Dean",
    progress: 76,
  },
  {
    title: "Coming Home",
    artist: "Leon Bridges",
    color: "#182330",
    accent: "#b9c8d8",
    imageUrl: "/songs/18.jpg",
    spotify: "https://open.spotify.com/search/Coming%20Home%20Leon%20Bridges",
    progress: 89,
  },
];

export type FavoriteMovie = {
  title: string;
  cover: string;
  letterboxd: string;
};

export const letterboxdProfileUrl = "https://letterboxd.com";

export const favoriteMovies: FavoriteMovie[] = [
  {
    title: "Get Out",
    cover: "/movies/1.jpg",
    letterboxd: "https://letterboxd.com/film/get-out-2017/",
  },
  {
    title: "Lady Bird",
    cover: "/movies/2.jpg",
    letterboxd: "https://letterboxd.com/film/lady-bird/",
  },
  {
    title: "The Perks of Being a Wallflower",
    cover: "/movies/3.jpg",
    letterboxd: "https://letterboxd.com/film/the-perks-of-being-a-wallflower/",
  },
  {
    title: "Interstellar",
    cover: "/movies/4.jpg",
    letterboxd: "https://letterboxd.com/film/interstellar/",
  },
  {
    title: "Little Women",
    cover: "/movies/5.jpg",
    letterboxd: "https://letterboxd.com/film/little-women-2019/",
  },
  {
    title: "How to Lose a Guy in 10 Days",
    cover: "/movies/6.jpg",
    letterboxd: "https://letterboxd.com/film/how-to-lose-a-guy-in-10-days/",
  },
  {
    title: "La La Land",
    cover: "/movies/7.jpg",
    letterboxd: "https://letterboxd.com/film/la-la-land/",
  },
  {
    title: "Superbad",
    cover: "/movies/8.jpg",
    letterboxd: "https://letterboxd.com/film/superbad/",
  },
];
