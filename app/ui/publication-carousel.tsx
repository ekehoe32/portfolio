import {
  fetchEducationSectionDetails,
  fetchPublicationDetails,
} from "../lib/data";
import * as changeCase from "change-case";
import PublicationCard from "./publication-card";
import Link from "next/link";

type PublicationCarouselProps = {
  section: string;
};

export default async function PublicationCarousel({
  section,
}: PublicationCarouselProps) {
  const publications = await fetchPublicationDetails(section);

  if (!publications) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 w-full max-w-[800px]">
      <div className="carousel carousel-center max-w-full px-8 lg:px-16 space-x-4 rounded-box">
        {publications.map((publication) => (
          <div
            id={changeCase.kebabCase(publication.name)}
            key={`${changeCase.kebabCase(publication.name)}-card`}
            className="carousel-item w-full"
          >
            <PublicationCard {...publication} />
          </div>
        ))}
      </div>
      <div className="hidden justify-center w-full py-2 gap-2 lg:flex">
        {publications.map((publication, index) => (
          <Link
            aria-label={`Publication ${index + 1}`}
            className="btn btn-xs"
            key={`${changeCase.kebabCase(publication.name)}-link`}
            href={`#${changeCase.kebabCase(publication.name)}`}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
