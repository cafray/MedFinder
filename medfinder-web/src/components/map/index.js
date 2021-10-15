import './styles.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker';
import { useSelector } from 'react-redux';

const Map = ({pharmacies}) => {
  const { mapCenter } = useSelector((state) => state.pharmacy);
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
        center={mapCenter}
        defaultZoom={15}
      >
       {pharmacies.map((p) =>(
         <Marker pharmacy={p} key={p.id} lat={p.coordinates.lat} lng={p.coordinates.lng} />
       ))}
          
       
      </GoogleMapReact>
    </div>
  );
};

export default Map;
