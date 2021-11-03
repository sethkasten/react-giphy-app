import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifsArray: Gif[];
}

const ResultsList = ({ gifsArray }: Props) => {
  return (
    <ul className="ResultsList">
      <h2>Results</h2>
      <div className="Array">
        {gifsArray.map((gif) => (
          <Result key={gif.id} gif={gif} />
        ))}
      </div>
    </ul>
  );
};

export default ResultsList;
