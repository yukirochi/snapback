import { useEffect, useState } from "react";

const useFetch = (url, cacheTime = 5 * 60 * 1000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getData = async () => {
      try {
        setLoading(true);

        // 1. Check cache first
        const cached = localStorage.getItem(url);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() < parsed.expiry) {
            setData(parsed.data);
            setLoading(false);
            return;
          } else {
            localStorage.removeItem(url); // expired cache
          }
        }

        // 2. Fetch from API if no cache
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();

        if (!ignore) {
          setData(json);

          // 3. Save to cache
          localStorage.setItem(
            url,
            JSON.stringify({
              data: json,
              expiry: Date.now() + cacheTime,
            })
          );
        }
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    getData();

    return () => {
      ignore = true;
    };
  }, [url, cacheTime]);

  return { data, error, loading };
};

export default useFetch;
