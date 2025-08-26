import "../styles/lobbycontents.css";
function card(url, author, quote) {
  return (
    <div className="card w-[350px] h-[200px] max-sm:w-[300px] md:w-[400px] md:h-[250px]">
      <div class="card-inner">
        <div
          class="card-front"
          style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="card-back flex justify-center items-center flex-col">
          <p className="card__title cursor-pointer text-black font-bold">
            {author}
          </p>
          <p className="card__description cursor-pointer text-black text-[13px] text-center w-[70%]">
            "{quote}"
          </p>
        </div>
      </div>
    </div>
  );
}

function ToggleContents({ card_data, settoggle }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] z-50 flex justify-center items-center"
      onClick={() => settoggle(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[350px] h-[200px] md:w-[400px] md:h-[250px] flex justify-center items-center">
        {card_data && card(card_data.url, card_data.author, card_data.quote)}
      </div>
    </div>
  );
}


export default ToggleContents;
