import React from "react";
import ReactDOM from "react-dom";
const img="https://picsum.photos/200/300/?blur";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img}></img>
    <div>
    <img className="food-img" src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU="></img>
    <img className="food-img" src="https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles.jpg"></img>
    <img className="food-img" src="https://static.toiimg.com/thumb/54504752.cms?width=1200&height=900"></img>
    </div>
  </div>,
  document.getElementById("root")
);
