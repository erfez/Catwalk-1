import React, { useState, useEffect } from 'react';

/* ** IMPORT COMPONENT(s) ** */
import StarRating from './StarRating.jsx';
import '../../styles/productCard.css';

const ProductCard = ({ product, changeFeaturedProduct, setToggleModal, setComparedProduct }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  product = product.product;
  let ratings = product.reviews.ratings;
  let defaultStyle;
  let DisplayPrice;

  /* ** ADDTIONAL FUNCTION(s) ** */
  product.styles.results.forEach(style => {
    style['default?'] ? defaultStyle = style : null;
    defaultStyle = defaultStyle || product.styles.results[0];
  });

  defaultStyle.sale_price ? DisplayPrice = <><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></> : DisplayPrice = <h5 className={'default-price'}>{defaultStyle.original_price}</h5>;

  return (
    <div className={`${'productCard'} ${'product-card-array'}`}
      onClick={() => changeFeaturedProduct(product.details.id)}>
      <img className={'image'} src={defaultStyle.photos[0].thumbnail_url} alt="" className="previewImage"></img>
      <h5 className={'productName'} >{product.details.name}</h5>
      <h5 className={'productCategory'}>{product.details.category}</h5>
      <StarRating ratings={ratings} />
      {defaultStyle.sale_price ? <span className={'productPrice'}><h5 className={'sale-price'}>{defaultStyle.sale_price}</h5><h5 className={'default-price'}>{defaultStyle.original_price}</h5></span> : <span className={'productPrice'}><h5>{defaultStyle.original_price}</h5></span>}
      <div className={'actionButton'} onClick={(e) => {
        e.stopPropagation();
        setComparedProduct(product);
        setToggleModal(true);
      }}>★</div>
    </div>
  );
};

export default ProductCard;

