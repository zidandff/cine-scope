import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Image
        src={"/cinescope-logo.svg"}
        alt="cinescope logo"
        width={238}
        height={45}
      />

      <nav className="flex gap-8">
        <a href="#">Movies</a>
        <a href="#">TV Show</a>
        <a href="#">Discover</a>
        <a href="#">Watchlist</a>
      </nav>

      <Image
        className="rounded-full ml-40"
        src={"/balazs-orban.png"}
        alt="balazs orban photo profile"
        width={40}
        height={40}
      />
    </header>
  );
}
