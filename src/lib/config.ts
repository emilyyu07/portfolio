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
    title: "All Too Well (Taylor's Version)",
    artist: "Taylor Swift",
    color: "#20203f",
    accent: "#a39fd7",
    imageUrl: "/songs/9.jpg",
    spotify:
      "https://open.spotify.com/search/All%20Too%20Well%20Taylor%27s%20Version",
    progress: 81,
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
];

export type FavoriteMovie = {
  title: string;
  cover: string;
};

export const letterboxdProfileUrl = "https://letterboxd.com";

export const favoriteMovies: FavoriteMovie[] = [
  { title: "Get Out", cover: "/movies/1.jpg" },
  { title: "Lady Bird", cover: "/movies/2.jpg" },
  { title: "The Perks of Being a Wallflower", cover: "/movies/3.jpg" },
  { title: "Interstellar", cover: "/movies/4.jpg" },
  { title: "Little Women", cover: "/movies/5.jpg" },
  { title: "How to Lose a Guy in 10 Days", cover: "/movies/6.jpg" },
  { title: "La La Land", cover: "/movies/7.jpg" },
];
