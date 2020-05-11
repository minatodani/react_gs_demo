import React, { useState, useEffect } from "react";

const Booklist = (props) => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]);
  console.log(bookData);
  //   console.log(bookData.data.items.volumeInfo.imageLinks.thumbnail);
  const imageStyle = { height: 100, width: 100 };

  return (
    <div>
      <ul>
        {bookData === null ? (
          <p>now loading...</p>
        ) : (
          bookData.data.items.map((x, index) => (
            <div key={index}>
              <li>{x.volumeInfo.title}</li>

              {x.volumeInfo.imageLinks ? (
                <img
                  src={x.volumeInfo.imageLinks.thumbnail}
                  alt=""
                  style={imageStyle}
                />
              ) : (
                <p style={imageStyle}></p>
              )}
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Booklist;
