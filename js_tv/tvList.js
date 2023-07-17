import TvItem from "./tvItem.js";

export const doApi = async(_search) => {
  let url = `https://api.tvmaze.com/search/shows?q=${_search}`;
  document.querySelector("#id_parent").innerHTML = `<h2>loading...</h2>`;
  let resp = await axios.get(url);
  console.log(resp.data);
  createList(resp.data)
}

const createList = (_ar) => {
  document.querySelector("#id_parent").innerHTML = "";
  _ar.forEach(item => {
    let tvShow = new TvItem("#id_parent",item.show);
    tvShow.render();
  })
}