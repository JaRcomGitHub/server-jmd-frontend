import React, { useEffect, useState } from 'react';
import { Radio } from 'react-loader-spinner';
import { fetchPPKs } from 'utilities/helpers';
import css from './PPKListPage.module.css';
import PPKsList from 'components/PPKs/PPKsList';
// import InputSearch from 'components/InputSearch/InputSearch';

function PPKListPage() {
  const [loading, setLoading] = useState(false);
  const [PPKs, setPPKs] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchPPKs()
      .then(setPPKs)
      .catch(error => console.error(error.message))
      .finally(() => setLoading(false));
  }, []);

  // const getVisibleNews = () => {
  //   if (searchQuery === '') {
  //     return news.filter(news => news.title.toLocaleLowerCase());
  //   } else {
  //     return news.filter(news =>
  //       news.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  //     );
  //   }
  // };
  const getVisiblePPKs = () => {
    return PPKs;
  };

  // const onSubmitSearch = e => {
  //   e.preventDefault();
  //   const searchText = e.target[0]?.value?.trim();
  //   setSearchQuery(searchText ? searchText : '');
  //   // e.target.reset();
  // };

  return (
    <div className={css.container}>
      <h2 className={css.title}>PPK</h2>
      {/* <InputSearch onSubmit={onSubmitSearch} /> */}
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
        <PPKsList dataPpksList={getVisiblePPKs()} />
      )}
    </div>
  );
}

export default PPKListPage;
