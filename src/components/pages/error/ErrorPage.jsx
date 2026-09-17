import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div>
      <h1>Erreur</h1>
      <h2>Cette page n'est plus au menu</h2>
      <Link to="/">
        <button className="error-btn">Retourner vers la page d'accueil</button>
      </Link>
    </div>
  );
}
