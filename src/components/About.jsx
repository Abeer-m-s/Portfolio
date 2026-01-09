import data from "../data/content.json";

export default function About() {
  return (
    <section className="px-6 py-24">
      <div className="glass max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          {data.about}
        </p>
      </div>
    </section>
  );
}
