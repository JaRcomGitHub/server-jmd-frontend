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
          let s = "";
          if (sn.match("^E8")) {
            s = strParseMsg(msg, ver);
          }
          return (
            <li key={msg}>
              {time} "{msg}" {s}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default SensorItem;

function strParseMsg(strData, ver) {
  //51=2366 52=98052 53=54114 54=78330 55=3653 56=53936377 57=115 
  const str = strData
  const v51 = str.match("(?<=51=)-?\\d+");
  const v52 = str.match("(?<=52=)\\d+");
  const v53 = str.match("(?<=53=)\\d+");
  const v54 = str.match("(?<=54=)\\d+");
  const v55 = str.match("(?<=55=)\\d+");
  const v57 = str.match("(?<=57=)\\d+"); // IAQ
  const temperature = v51 ? v51[0] / 100 : 0;
  const pressure = v52 ? parseFloat((v52[0] * 0.0075006).toFixed(2)) : 0; // *0.0075006 mmHg
  const humidity = v53 ? parseFloat((v53[0] / 1000).toFixed(1)) : 0;
  const resistor = v54 ? v54[0] / 1000 : 0;
  var mul = 2;
  if ((ver == "0.2.7") || (ver == "1.2.0")) {
    mul = 1;
  }
  const voltage = v55 ? (v55[0] * mul) / 1000 : 0;
  const iaq = v57 ? parseInt(v57[0]) : 0;
  // const data = [
  //   temperature,
  //   pressure,
  //   humidity,
  //   resistor,
  //   voltage,
  //   iaq,
  // ];
  const data = (" T=" + temperature + "° P=" + pressure + "mmHg H=" + humidity + "% R=" + resistor + "kom АКБ=" + voltage + "v IAQ=" + iaq);
  return data;
}
