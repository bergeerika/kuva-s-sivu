import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/weather")}>Go to weather</button>
      </p>
     
      <div className="App">
        <main className="layout">
          <h3 style={{ textAlign: "center" }}>Some pictures </h3>
          <div className="grid gallery">
            {images.map((image, index) => (
              <img
                style={{
                  cursor: "pointer"
                }}
                src={`https://picsum.photos/id/${image}/500/500`}
                alt="placeholder"
              />
            ))}
          </div>
        </main>
      </div>
  
        
    </>
  );
};
const images = ["1000", "1011", "1015", "1003", "1020", "1022", "1024", "1026"];

export default Home;