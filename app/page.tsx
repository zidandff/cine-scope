import { Button } from "@/app/ui/button";
import Header from "@/app/ui/header";
import Image from "next/image";
import "@/app/ui/global.css";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex mt-20 min-h-screen flex-col p-6 text-center">
        <h1 className="text-4xl font-semibold">
          Track Movies. Save to watch. <br /> Share your favorite.
        </h1>
        <p className="my-4 text-gray-300">
          Keep your watchlist organize and discover what to watch next.
        </p>
        <Button className="self-center bg-indigo-800 hover:bg-indigo-700">
          Explore
        </Button>
      </main>
    </>
  );
}
