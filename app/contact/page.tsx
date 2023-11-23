import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-base-100">
      <div className="flex flex-col m-4 lg:flex-row-reverse items-center justify-center h-full">
        <article className="prose lg:prose-xl">
          <h2>Contact</h2>
          <p className="break-words">
            Send me an email at{" "}
            <Link href="mailto:eric@kehoe-tech.dev?subject=App development for...">
              eric@kehoe-tech.dev
            </Link>{" "}
            for your next software project!
          </p>
        </article>
      </div>
    </main>
  );
}
