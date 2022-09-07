import axios from 'axios';

// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Details() {
  useEffect(() => {
    fetchDetails();
  }, []);

  function fetchDetails() {
    axios
      .get(
        'http://localhost:8080/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0/withinventory'
      )
      .then((payload) => {
        const { warehouse, inventories } = payload.data;
        console.log(payload);
        console.log('deconstruct', warehouse, inventories);
      });
    // axios.get('http://localhost:8080/warehouse').then((data) => {
    //   console.log(data);
    // });
  }

  return (
    <>
      <h1>ALLO</h1>
    </>
  );
}
