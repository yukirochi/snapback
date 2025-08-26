import LobbyContents from "../homepagecomponents/contents";
import PhotosCachedFetch from "../cache/PhotosCache";
import Loading from "../../../components/loading";
import Pagin from "../homepagecomponents/pagin";
import { useState } from "react";
import QoutesuseFetch from "../cache/qoutesCache";
import ToggleContents from "../homepagecomponents/toggle";

function Landingpage() {
  const [currentPage, setCurrentPage] = useState(1);
  let [toggle, settoggle] = useState(false)
  let [card_data, setcard_data] = useState(null)
  const { data, error, loading } = PhotosCachedFetch(
    `https://picsum.photos/v2/list?page=${currentPage + 1}&limit=9`,
    300000
  );

  const { data_qoutes, error_qoutes, loading_qoutes } = QoutesuseFetch(
    `https://dummyjson.com/quotes?limit=9&skip=${
      currentPage > 1 ? currentPage * 9 - 9 : 0
    }`,
    300000
  );

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
      <Pagin currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagin>
      <LobbyContents data={data} data_qoutes={data_qoutes} toggle={toggle} settoggle={settoggle} setcard_data={setcard_data}></LobbyContents>
      {loading && Loading()}
      {toggle && <ToggleContents card_data={card_data} settoggle={settoggle}/>}
    </div>
  );
}

export default Landingpage;
