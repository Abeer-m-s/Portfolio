import data from "../data/content.json";
export default () => (
  <section>
    <div className="glass">
      <h2>Certifications</h2>
      <ul>{data.certifications.map((c,i)=><li key={i}>{c}</li>)}</ul>
    </div>
  </section>
);
