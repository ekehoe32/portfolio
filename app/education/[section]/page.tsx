import { fetchEducationSectionDetails } from "@/app/lib/data";
import PublicationCarousel from "@/app/ui/publication-carousel";
import PublicationCarouselSkeleton from "@/app/ui/skeleton/education/publication-carousel-skeleton";
import { Suspense } from "react";

type PageProps = {
  params: { section: string };
};

export default async function Page({ params }: PageProps) {
  const sectionDetails = await fetchEducationSectionDetails(params.section);
  if (!sectionDetails) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <article className="prose lg:prose-xl">
        <h2>{sectionDetails.title}</h2>
        {sectionDetails.paragraph}
        <h2 className="py-6">Related Works</h2>
      </article>
      <Suspense fallback={<PublicationCarouselSkeleton />}>
        <PublicationCarousel section={params.section} />
      </Suspense>
    </div>
  );
}
