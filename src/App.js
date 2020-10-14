import React from "react";

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2017/03/kimchi-insta.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "http://foodrecipesearch.com/wp-content/uploads/2017/09/04-30-minute-korean-bibimbap.jpg",
  },
  {
    name: "Donkatsu",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg",
  },
  {
    name: "Kimbap",
    image: "https://swisshansik.files.wordpress.com/2011/09/kimbap-2.jpg",
  },
];

function Food({ name, pic }) {
  return (
    <div>
      <h1>like {name}</h1>
      <img src={pic}></img>
    </div>
  );
}

function renderFood(dish) {
  return <Food name={dish.name} pic={dish.image} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
