import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Header with title and introduction */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">My Portfolio</h1>
        <p className="text-xl text-gray-600">
          Welcome to my personal portfolio. I am passionate about creating beautiful and efficient web experiences.
        </p>
      </header>

      {/* Section 1: Text on left, image on right */}
      <section className="flex flex-col md:flex-row items-center mb-16 w-full max-w-5xl">
        <div className="md:w-1/2 p-4">
          <p className="text-lg text-gray-700">
            I specialize in building responsive, dynamic web applications that deliver exceptional user experiences.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <Image
            src="/project1.jpg" // Replace with your image path
            alt="Project showcase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section 2: Image on left, button on right */}
      <section className="flex flex-col md:flex-row items-center w-full max-w-5xl">
        <div className="md:w-1/2 p-4 flex justify-center">
          <Image
            src="/project2.jpg" // Replace with your image path
            alt="Another project"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
