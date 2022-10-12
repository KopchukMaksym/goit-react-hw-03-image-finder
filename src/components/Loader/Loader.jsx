import s from '../Loader/loader.module.css';
import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default Loader;
