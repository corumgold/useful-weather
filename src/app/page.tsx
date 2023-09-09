import { Suspense } from "react";
import CurrentWeather from "./components/CurrentWeather";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="p-4 text-center text-4xl">Current Weather</h1>
        <CurrentWeather />
    </main>
  );
}
