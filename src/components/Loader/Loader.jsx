import { Bars } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="bars-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass="Bars-wrapper"
      visible={true}
    />
  );
};

export default Loader;
