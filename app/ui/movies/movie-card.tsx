import Image from "next/image";
import Link from "next/link";

export default function MovieCard({
  title,
  categories,
  imagePath,
  slug,
}: {
  title: string;
  categories: string;
  imagePath: string;
  slug: string;
}) {
  return (
    <Link href={`/movies/${slug}`}>
      <Image
        className="rounded-md"
        src={imagePath}
        alt={`${title} movie poster`}
        width={236}
        height={351}
      />
      <div>
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <p className="text-sm font-light">{categories}</p>
      </div>
    </Link>
  );
}
