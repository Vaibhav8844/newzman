import React, { useState, useEffect } from 'react';
import { NewsItem } from './NewsItem.js';
import {Loading} from './Loading.js';

export default function News(props){
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=a2a9b26d2906458dabcd391428378526&page=${page}&cache=false`);
        const json = await response.json();
        setData(json.articles);
        setLoading(false)
      } catch (error){
        setLoading(true)
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[page,props.category]);

  return (
    <>
      <h2 className="container display-5 text-center">Top headlines of NewsMan.com -{props.category.toUpperCase()}</h2>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={page<=1} onClick={() => { setPage(page - 1);}} className="btn btn-dark m-2">Previous</button>
          <button type="button" onClick={() => { setPage(page + 1);}} className="btn btn-dark m-2">Next</button>
        </div>
      { loading && <Loading/> }
      <div className="container my-3">
        <div className="row d-flex ">
            {!loading && data
            .filter((element) => element.title!== "[Removed]")
            .map((element) => (
            <div key={element.url} className="col-md-3 my-3">
              <NewsItem title={element.title} imageUrl={element.urlToImage} description={element.description} url={element.url} date={element.publishedAt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
