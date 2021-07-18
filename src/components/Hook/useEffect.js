import React, { useEffect, useState } from "react";
import axios from "axios";

const MyuseEffect = () => {
  const [state, setState] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  useEffect(() => {
    console.log("componentDidMount");

    axios.get("https://jsonplaceholder.typicode.com/photos").then(
      (res) => {
        setPhotos(res.data);
        // console.log(photos)
      },
      () => {
        alert("error");
      }
    );
  }, []);

  const upDateState = () => {
    setState(state + 1);
  };

  return (
    <div className="container">
      {console.log("Render")}

      <h2>My useEffect Component{state}</h2>
      <button className="btn btn-warning" onClick={upDateState}>
        Update Component
      </button>

      {photos !== undefined && (
        <div className="card-deck">
          {photos.map((photo) => {
            // return <div class="card col-sm-3">
            //   <img
            //     class="card-img-top"
            //     src={photo.thumbnailUrl}
            //     alt="No image found"
            //   />
            //   <div class="card-body">
            //     <h5 class="card-title">{photo.id}{photo.title}</h5>
            //   </div>
            // </div>;
            return (
              <div class="card col-3">
                <img
                  class="card-img-top"
                  src={photo.thumbnailUrl}
                  alt="Card image cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyuseEffect;
