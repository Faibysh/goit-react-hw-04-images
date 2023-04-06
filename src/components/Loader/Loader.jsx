import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';
const Loader = () => (
  <Bars
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass={css.loader}
    visible={true}
  />
);

export default Loader;
