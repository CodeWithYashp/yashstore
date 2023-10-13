import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          debitis sit sint atque sapiente natus error nihil iure, impedit illum
          animi ea corrupti nisi perferendis nemo beatae id tenetur voluptatum!
        </p>
      </div>
      <div className="bottom">
        {error ? (
          <BeatLoader color="#2879fe"/>
        ) : loading ? (
          <BeatLoader color="#2879fe"/>
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
