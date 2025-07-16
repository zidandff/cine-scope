"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/">
        <Image
          src={"/cinescope-logo.svg"}
          alt="cinescope logo"
          width={238}
          height={45}
        />
      </Link>

      <nav className="flex gap-8">
        <Link
          href="/movies"
          className={clsx("text-gray-300", {
            "font-medium text-gray-200 border-b-2 border-gray-200":
              pathname === "/movies",
          })}
        >
          Movies
        </Link>
        <Link
          href="/reviews"
          className={clsx("text-gray-300", {
            "font-medium text-gray-200 border-b-2 border-gray-200":
              pathname === "/reviews",
          })}
        >
          reviews
        </Link>
        <Link
          href="/favorites"
          className={clsx("text-gray-300", {
            "font-medium text-gray-200 border-b-2 border-gray-200":
              pathname === "/favorites",
          })}
        >
          My Favorites
        </Link>
      </nav>

      <Link href="/profile">
        <Image
          className="rounded-full ml-40"
          src={"/balazs-orban.png"}
          alt="balazs orban photo profile"
          width={40}
          height={40}
        />
      </Link>
    </header>
  );
}
