import { useReducer } from "react";
import gallerey from "./data";
console.log(gallerey);

const changeState = (state, action) => {
  const { type, payload } = action;

  if (type == "ADD_LIKE") {
    return state.map((image) => {
      if (image.id == payload) {
        return { ...image, likes: image.likes + 1 };
      } else {
        return image;
      }
    });
  } else if (type == "ADD_DISLIKE") {
    return state.map((image) => {
      if (image.id == payload) {
        return { ...image, disLikes: image.disLikes + 1 };
      } else {
        return image;
      }
    });
  }
  if (type == "DELETE") {
    return state.filter((image) => image.id != payload);
  } else {
    return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(changeState, gallerey);

  return (
    <div className="images-container">
      {state.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt="" />
            <div className="buttons-container">
              <button
                onClick={() =>
                  dispatch({ type: "ADD_LIKE", payload: image.id })
                }
              >
                👍 {image.likes}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_DISLIKE", payload: image.id })
                }
              >
                👎 {image.disLikes}
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: image.id })}
              >
                🗑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
