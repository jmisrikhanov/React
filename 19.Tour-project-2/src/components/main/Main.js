import Card from "./card/Card";
import "./Main.css";
import { data } from "../../backend/data";

function Main() {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
}

export default Main;
