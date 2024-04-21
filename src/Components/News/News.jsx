import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const { category } = props;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const apiKey = "aab0c42d214c4cf8800790deb68974c0";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category, page, apiKey]);

  const fetchData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${
        page + 1
      }&apiKey=${apiKey}`;
      setPage((prevPage) => prevPage + 1);
      const response = await fetch(url);
      const data = await response.json();
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length < totalResults}
      loader={<h4 className="text-center">Loading...</h4>}
      endMessage={
        <p className="text-center text-gray-500">Yay! You have seen it all</p>
      }
    >
      <div className="container mb-auto mt-10 my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((element, index) => (
          <div
            key={element.url}
            className={`rounded-lg overflow-hidden shadow-lg ${
              index === 0 ? "col-span-full" : ""
            }`}
          >
            <NewsItem
              sourceName={element.source.name}
              title={element.title}
              desc={element.description}
              imageURL={element.urlToImage || "default-image-url"}
              newsUrl={element.url}
            />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default News;
