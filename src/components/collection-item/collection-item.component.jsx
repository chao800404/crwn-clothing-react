/** @format */

import React from "react";
import CustomBotton from "../custom-button/custom-botton.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
} from "./collection-item.style";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooterContainer>
      <CustomBotton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomBotton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
