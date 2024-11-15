import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div data-testid='Loader' className={css.loader}>
      <InfinitySpin width="200" color='#407BFF' />
    </div>
  );
};

export default Loader;