import { useState, useEffect } from "react";
import "../styles/picture.css"

function LobbyContents({ data, data_qoutes, toggle, settoggle, setcard_data }) {
  const [value, setValue] = useState([]);
  const [qoute, setqoute] = useState([]);

  useEffect(() => {
    if (data) {
      setValue(data);
    }
  }, [data]);

  useEffect(() => {
    if (data_qoutes) {
      setqoute(data_qoutes.quotes);
    }
  }, [data_qoutes]);

  return (
    <div className="w-[100%] h-[80%] flex justify-center overflow-y-scroll relative bottom-0 max-sm:mt-[5px]">
      <div className="w-[70%] flex flex-wrap justify-center gap-10 mt-5">
        {value?.map((element, key) => (
          <Card
            key={element.id}
            url={element.download_url}
            author={qoute[key]?.author}
            quote={qoute[key]?.quote || "No quote"}
            settoggle={settoggle}
            setcard_data={setcard_data}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ url, author, quote, settoggle, setcard_data }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && <div className="text-black animate-pulse">Loading...</div>}

      {/* preload image invisibly */}
      <img
        src={url}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setLoaded(true)}
      />

      {loaded && (
        <div
          className="container noselect w-[350px] h-[200px] max-sm:w-[300px]"
          onClick={() => {
            settoggle(true);
            setcard_data({
              url: url,
              author: author,
              quote: quote,
            });
          }}
        >
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div id="card">
              <div
                class="card2"
                style={{
                  backgroundImage: loaded ? `url(${url})` : "none",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LobbyContents;
