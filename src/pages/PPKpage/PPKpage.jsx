import React, { useEffect, useState } from 'react';
import { Radio } from 'react-loader-spinner';
import { fetchPPKid } from 'utilities/helpers';
import css from './PPKpage.module.css';
import { useLocation } from 'react-router-dom';
import { SensorsList } from './SensorsList';

function PPKpage() {
  const [loading, setLoading] = useState(false);
  const [sensors, setSensors] = useState([]);
  const { pathname } = useLocation();
  const ppkid = pathname.split('/').pop();

  useEffect(() => {
    setLoading(true);
    fetchPPKid(ppkid)
      .then(setSensors)
      .catch(error => console.error(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>{ppkid}</h2>
      {loading ? (
        <div className={css.loading}>
          <Radio
            visible={true}
            height="80"
            width="80"
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass="radio-wrapper"
            colors={['#7cfc00', '#90ee90', '#228b22']}
          />
        </div>
      ) : (
        <>
          <SensorsList sensors={sensors} />
        </>
      )}
    </div>
  );
}

export default PPKpage;
