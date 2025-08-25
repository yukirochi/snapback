import { useEffect, useState } from "react";

const useFetch =(url) => {
  let [data, setdata] = useState(null);
  let [error, seterror] = useState(null);
  let [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(url);
        if (!res.ok) throw new Error("network error");
        let data = await res.json();
        setdata(data)
      } catch (err) {
        console.log(err);
        seterror(err)
      }finally{
        setloading(false)
      }
    };

    fetchData()
  }, [url]);

  return {data, error, loading}

};

export default useFetch;
