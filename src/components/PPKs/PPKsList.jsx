import css from './PPKs.module.css';
import { PPKsItem } from './PPKsItem';

export const PPKsList = ({ dataPpksList }) => {
  return (
    <>
      {dataPpksList.length === 0 ? (
        <div className={css.notPpksFound}>
          <h4 className={css.notPpksFoundText}>
            Sorry, your search did not match any results.
          </h4>
        </div>
      ) : (
        <ul className={css.ppksList}>
          {dataPpksList.map(ppkid => {
            return <PPKsItem key={ppkid} ppk={ppkid} />;
          })}
        </ul>
      )}
    </>
  );
};

export default PPKsList;
