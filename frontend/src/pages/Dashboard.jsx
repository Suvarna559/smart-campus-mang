import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Smart Campus Dashboard</h2>
      <Link to="/campus">Campus Info</Link><br/>
      <Link to="/canteen">Canteen</Link><br/>
      <Link to="/parking">Parking</Link><br/>
      <Link to="/sports">Sports</Link>
    </div>
  );
}