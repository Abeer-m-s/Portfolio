import data from "../data/content.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="glass max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold
                       bg-gradient-to-r from-orange-500 to-pink-600
                       bg-clip-text text-transparent">
          {data.name}
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
          {data.role}
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          {data.intro}
        </p>
      </div>
    </section>
  );
}
