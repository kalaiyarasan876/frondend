/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MetaData from "../components/MetaData";
import ProductCart from "../components/ProductCart";
import Slider from "../components/Slider";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/product?"+searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  });

  return (
    <Fragment>
      <Slider />
      <MetaData title={"Best Product"} />
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCart product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}