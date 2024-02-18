import "./Favorites.css";
import { selectFavorite } from "../../redux/cars/carSelectors";
import { useSelector } from "react-redux";
import  '../../components/Card/Card.css';
import { nanoid } from "nanoid";

const Favorites = () => {
  const favorites = useSelector(selectFavorite);


  return (
    <div className="favorites-box">
      <ul className="favorites-catalog">
        {favorites &&
          favorites.map((car) => (
            <li key={nanoid()}>
              <div className="card">
                <img
                  className="image-car"
                  src={car.car.img ? car.car.img : car.car.photoLink}
                  alt={car.car.make}
                />
                <p className="text-Make">{car.car.make}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
