import data from "../data/content.json";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      {Object.entries(data.skills).map(([key, list]) => (
        <div className="skill-group" key={key}>
          <h3>{key.toUpperCase()}</h3>
          <div className="skill-badges">
            {list.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
