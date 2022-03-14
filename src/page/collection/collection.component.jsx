/** @format */

import React from "react";
import "./collection.style.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector.js";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
