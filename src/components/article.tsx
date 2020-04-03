import PropTypes, { InferProps } from "prop-types";
import React from 'react'

export default function Article({
  title,
  price
}: InferProps<typeof Article.propTypes>) {
  return (
    <div className="article">
      <h1>{title}</h1>
      <span>Priced at (incl VAT): {price * 1.2}</span>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

Article.defaultProps = {
    price:20
}