export default function PublicationCarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 w-full max-w-[810px]">
      <div className="w-full h-96 skeleton"></div>
      <div className="flex justify-center w-full py-2 gap-2">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="btn btn-xs skeleton"></div>
        ))}
      </div>
    </div>
  );
}
