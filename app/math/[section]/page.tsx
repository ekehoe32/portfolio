import { fetchMathSectionData } from "@/app/lib/data";
import PublicationCard from "@/app/ui/publication-card";
import * as changeCase from "change-case";
import Link from "next/link";

type PageProps = {
  params: { section: string };
};

export default async function Page({ params }: PageProps) {
  const sectionDetails = await fetchMathSectionData(params.section);

  if (!sectionDetails) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <article className="prose lg:prose-xl">
        <h2>{sectionDetails.title}</h2>
        {sectionDetails.paragraph}
        <h2 className="py-8">Related Works</h2>
      </article>
      <div className="grid grid-cols-1 lg:max-w-[810px]">
        <div className="carousel w-full">
          {sectionDetails.publications.map((publication) => (
            <div
              id={changeCase.kebabCase(publication.name)}
              key={`${changeCase.kebabCase(publication.name)}-card`}
              className="carousel-item w-full"
            >
              <PublicationCard {...publication} />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {sectionDetails.publications.map((publication, index) => (
            <Link
              className="btn btn-xs"
              key={`${changeCase.kebabCase(publication.name)}-link`}
              href={`#${changeCase.kebabCase(publication.name)}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
