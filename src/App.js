import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fwhole-cabbage-kimchi.jpg&f=1&nofb=1",
    rating: 5,
  },
  {
    id: 2,
    name: "고추 바사삭 순살",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.fmkorea.com%2Ffiles%2Fattach%2Fnew%2F20190608%2F3655304%2F1140921892%2F1885626551%2F0b09bbbac257d16ea893ddb61dec0566.jpg&f=1&nofb=1",
    rating: 4,
  },
  {
    id: 3,
    name: "pizza",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fwhole-cabbage-kimchi.jpg&f=1&nofb=1",
    rating: 5,
  },
  {
    id: 4,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fwhole-cabbage-kimchi.jpg&f=1&nofb=1",
    rating: 3,
  },
  {
    id: 5,
    name: "고추 바사삭 순살",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.fmkorea.com%2Ffiles%2Fattach%2Fnew%2F20190608%2F3655304%2F1140921892%2F1885626551%2F0b09bbbac257d16ea893ddb61dec0566.jpg&f=1&nofb=1",
    rating: 1,
  },
  {
    id: 6,
    name: "pizza",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fwhole-cabbage-kimchi.jpg&f=1&nofb=1",
    rating: 2,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food
          name={dish.name}
          picture={dish.image}
          key={dish.id}
          rating={dish.rating}
        />
      ))}
    </div>
    // <div>
    //   {console.log(foodILike.map(renderFood))}
    //   {foodILike.map(renderFood)}
    // </div>
  );
}

export default App;

// component는 html을 반환하는 함수야
// jsx는 js 안의 html입니다.
