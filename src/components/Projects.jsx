import data from "../data/content.json";

export default function Projects() {
  return (
    <section>
      <div className="glass">
        <h2>Projects</h2>

        <div className="timeline">
          {data.projects
            .filter(
              p =>
                p.title !== "TCP Chat Application" &&
                p.title !== "UDP Client–Server Communication"
            )
            .map((p, i) => (
              <div className="timeline-item" key={i}>
                <h3>{p.title}</h3>
                <p>{p.details}</p>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
