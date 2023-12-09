import moment from 'moment/moment';
import css from './Sensor.module.css';

export const SensorItem = ({ sn, ver, id, msgs }) => {
  const convert = msgs => {
    const mas = [];
    let formatDate = '';
    msgs.forEach(function (item, i) {
      if (i % 2 === 0) {
        const date = new Date(item * 1000);
        formatDate = moment(date).format('YYYY-MM-DD HH:mm:ss'); // YYYY-MM-DD
        // console.log(formatDate);
      } else {
        // console.log(item);
        mas.push({ time: formatDate, msg: item });
      }
    });
    // console.log(mas);
    return mas;
  };

  return (
    <li>
      <h3 className={css.title}>{sn}</h3>
      <h4 className={css.subtitle}>
        id{id} ver={ver}
      </h4>
      <ul>
        {convert(msgs).map(({ time, msg }) => {
          return (
            <li key={msg}>
              {time} "{msg}"
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default SensorItem;
