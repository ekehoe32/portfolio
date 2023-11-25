import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
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
    <div className="card lg:card-side bg-secondary text-base-200 shadow-xl">
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
        <Link href={href} rel="noopener noreferrer" target="_blank">
          <h2 className="card-title inline-block">
            {name}{" "}
            <ArrowTopRightOnSquareIcon className="inline w-4 text-accent pb-2" />
          </h2>
        </Link>
        <div>
          <p className="font-light text-sm">{authors.join(", ")}</p>
        </div>
        <hr className="my-2 border-accent" />
        {/* <p className="font-light">{university}</p> */}
        <p>{abstract}</p>
      </div>
    </div>
  );
}
