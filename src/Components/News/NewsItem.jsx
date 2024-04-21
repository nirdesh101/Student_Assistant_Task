import React from "react";

function NewsItem(props) {
  let { desc, title, imageURL, newsUrl, sourceName } = props;

  return (
    <div className="bg-white p-4 h-50">
      <img
        src={imageURL || "default-image-url"}
        className="w-full h-48 object-cover mb-4"
        alt="News"
      />
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-sm text-gray-600 mb-2">{desc}</p>
      <p className="text-sm text-gray-500 text-end">- {sourceName}</p>
      <a
        href={newsUrl}
        target="_blank"
        rel="noreferrer"
        className="text-white bg-blue-500 px-4 py-2 rounded-full inline-block hover:bg-blue-600 mt-5 "
      >
        Read More...
      </a>
    </div>
  );
}

export default NewsItem;
