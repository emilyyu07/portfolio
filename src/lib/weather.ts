const WMO_CODES: Record<number, string> = {
  0: "clear",
  1: "mainly clear",
  2: "partly cloudy",
  3: "overcast",
  45: "fog",
  48: "icy fog",
  51: "light drizzle",
  53: "drizzle",
  55: "heavy drizzle",
  61: "light rain",
  63: "rain",
  65: "heavy rain",
  71: "light snow",
  73: "snow",
  75: "heavy snow",
  77: "snow grains",
  80: "showers",
  81: "showers",
  82: "heavy showers",
  85: "snow showers",
  86: "heavy snow showers",
  95: "thunderstorm",
  96: "thunderstorm",
  99: "thunderstorm",
};

export async function fetchWeather(): Promise<{
  temp: number;
  description: string;
}> {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=43.47&longitude=-80.54&current_weather=true&temperature_unit=celsius",
  );
  if (!res.ok) {
    throw new Error("Weather request failed");
  }
  const data = (await res.json()) as {
    current_weather?: { temperature: number; weathercode: number };
  };
  const w = data.current_weather;
  if (!w) {
    throw new Error("No current weather");
  }
  return {
    temp: Math.round(w.temperature),
    description: WMO_CODES[w.weathercode] ?? "clear",
  };
}
