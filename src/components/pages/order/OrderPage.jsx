import { Link, useParams } from "react-router-dom";
import "./OrderPage.css";

function OrderPage() {
  const { username } = useParams();
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button className="logout-btn">Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;
