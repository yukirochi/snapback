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

          <button className="btn mt">
            <svg
              class="icon"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ToggleContents({ card_data, settoggle }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] z-50 flex justify-center items-center flex-col"
      onClick={() => settoggle(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[350px] h-[200px] md:w-[400px] md:h-[250px] flex justify-center items-center"
      >
        {card_data && card(card_data.url, card_data.author, card_data.quote)}
      </div>
      <p className="text-white mt-10 cursor-pointer">
        Hover or Click the photo to see the Qoute
      </p>
    </div>
  );
}

export default ToggleContents;
