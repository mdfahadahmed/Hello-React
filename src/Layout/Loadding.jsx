import { useEffect, useState } from 'react';
import LoadingGif from "../assets/loading-raunded.gif";

function Loadding() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(true);
    },);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" m-auto pt-4 w-[100%] flex justify-center">
      {Loading && (
        <img className="justify-center items-center align-middle text-center flex flex-wrap w-[20%]" src={LoadingGif} alt="Loading" />
      )}
    </div>
  );
}

export default Loadding;