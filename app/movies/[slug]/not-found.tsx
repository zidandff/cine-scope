import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-[200px]">
      <h1 className="text-4xl font-bold">404 | Not Found</h1>
      <p className="mb-5">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-indigo-800 rounded-full">
        Return Home
      </Link>
    </div>
  );
}
