import { SensorItem } from './SensorItem';
// import css from './Sensor.module.css';

export const SensorsList = ({ sensors }) => {
  return (
    <div>
      {sensors.length === 0 ? (
        <div>
          <h4>Sorry, no data.</h4>
        </div>
      ) : (
        <>
          {/* <p>Sensors:</p> */}
          <ul>
            {sensors.map(({ sn, ver, id, msgs }) => {
              return (
                <SensorItem key={sn} sn={sn} ver={ver} id={id} msgs={msgs} />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default SensorsList;
