import { useState, useEffect } from "react";
import "../styles/lobbycontents.css"

function LobbyContents({ data, data_qoutes, toggle, settoggle,setcard_data }) {
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
    <div className="w-[100%] h-[80%] flex justify-center overflow-y-scroll relative bottom-0 max-sm:mt-[]">
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
    <div
     
    >
      {!loaded && <div className="text-black animate-pulse">Loading...</div>}

      {/* preload image invisibly */}
      <img
        src={url}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setLoaded(true)}
      />

      {loaded && (
        <div className="card w-[350px] h-[200px] max-sm:w-[300px]"
        onClick={()=> {
          settoggle(true)
          setcard_data({
            url: url,
            author: author,
            quote: quote
          })
        }}
        >
          <div class="card-inner">
            <div
              class="card-front"
              style={{
                backgroundImage: loaded ? `url(${url})` : "none",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="card-back flex justify-center items-center flex-col">
              <p className="card__title cursor-pointer text-black font-bold">{author}</p>
              <p className="card__description cursor-pointer text-black text-[13px] text-center w-[70%]">"{quote}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LobbyContents;
