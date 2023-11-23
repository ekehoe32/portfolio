import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-base-100">
      <div className="flex h-full items-center justify-center">
        <article className="prose lg:prose-xl">
          <h2>Contact</h2>
          <p>
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
