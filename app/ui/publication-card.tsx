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
      <figure className="relative w-full h-full">
        <Image
          className="lg:object-cover h-full"
          src={src}
          alt={alt}
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{name}</h2>
        <p className="font-light">{authors.join(", ")}</p>
        {/* <p className="font-light">{university}</p> */}
        <p>{abstract}</p>
        <div className="card-actions justify-end">
          <Link
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-accent"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}
