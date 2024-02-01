import { Bars } from "react-loader-spinner";
import s from './loader.module.css'

export const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <Bars
        height="80"
        width="80"
        color="#FF4500"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
