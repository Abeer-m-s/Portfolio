import data from "../data/content.json";

export default function Footer() {
  return (
    <footer>
      <p>{data.contact.email}</p>
      <p>{data.contact.location}</p>
    </footer>
  );
}
