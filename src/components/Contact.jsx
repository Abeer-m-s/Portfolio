import data from "../data/content.json";

export default function Contact() {
  return (
    <section className="px-6 py-24">
      <div className="glass max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-2">GitHub: <a href="https://github.com/Abeer-m-s" target="blank">{data.contact.github}</a></p>
        <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/abeer-mohamed-shajahan-23126b316/?originalSubdomain=in" target="blank">{data.contact.linkedin}</a></p>
        <p className="mb-2">Email: <a href="https://mail.google.com/" target="blank">{data.contact.email}</a></p>
        <p className="mt-4 text-gray-600">
          {data.contact.location}
        </p>
      </div>
    </section>
  );
}
