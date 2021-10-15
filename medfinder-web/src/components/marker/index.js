import './styles.css';
import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Marker = ({ pharmacy }) => {

  const { pharmacyMapSelected } = useSelector(state => state.pharmacy)

  return (
    <Link to={`/pharmacy/${pharmacy.id}`}>
    <div>
      <img
        src={ pharmacyMapSelected === pharmacy.id ? MarkerIconSelected : MarkerIcon }
      />
     <img src={pharmacy.image} className="img-marker" />
   </div>
   </Link> 
  );
};

export default Marker;
