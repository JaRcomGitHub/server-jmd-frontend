import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from '../Header/Header';
import { Radio } from 'react-loader-spinner';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
      {/* <Header /> */}
      <Suspense
        fallback={
          <div className={css.container_DNA}>
            <Radio
              visible={true}
              height="150"
              width="150"
              ariaLabel="radio-loading"
              wrapperStyle={{}}
              wrapperClass="radio-wrapper"
              colors={['#7cfc00', '#90ee90', '#228b22']}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
