import Image from "next/image";
import Link from "next/link";

type PublicationCardProps = {
  name: string;
  abstract: string;
  authors: string[];
  university: string;
  href: string;
  src: string;
  alt: string;
};

export default function PublicationCard({
  name,
  abstract,
  authors,
  university,
  href,
  src,
  alt,
}: PublicationCardProps) {
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl">
      {/* <figure className="relative w-full h-full">
        <Image
          className="object-fit w-full h-full"
          src={src}
          alt={alt}
          width={388}
          height={556}
        />
      </figure> */}
      <div className="card-body w-fit">
        <h2 className="card-title">{name}</h2>
        <div>
          <p className="font-light">{authors.join(", ")}</p>
        </div>
        <hr className="my-2 border-accent" />
        {/* <p className="font-light">{university}</p> */}
        <p>{abstract}</p>
        <div className="card-actions justify-end">
          <Link
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-accent"
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
}
