import Image from "next/image";

export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <Image
            src="/background.png"
            alt="Background image of a black cat on a computer."
            className="object-contain rounded-lg shadow-2xl"
            width={500}
            height={500}
          />
        </div>
        <div>
          <article className="prose lg:prose-xl mb-4">
            <h1>Who am I?</h1>
            <p>
              I am a mathematician, data scientist, and full-stack developer. My
              day job involves end-to-end development of scientific
              applications, from machine learning algorithms to intuitive user
              interfaces and robust backend systems. My background in
              mathematics and geometry fuel my innovative approach to
              problem-solving in technology and science. I excel in creating
              tools that enhance research efficiency and data analysis, blending
              advanced computational techniques with practical application
              development.
            </p>
            <div className="font-semibold text-right mt-0">
              &mdash; Eric Kehoe, PhD
            </div>
          </article>

          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </main>
  );
}
