import React from 'react';
import { useGlobalContext } from '../context/ContextProduct';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Breadcrumb from '../compenent/breadcrumb';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Stars from '../compenent/stars';
import AddToCart from '../compenent/addToCart';
import ProductImage from '../compenent/ProductImage';

const single_product_url = `https://course-api.com/react-store-single-product?id=`

const SinglePageProduct = () => {
  let { fetchSinglProduct, single_product_error, single_product_loading, single_product } = useGlobalContext()
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchSinglProduct(`${single_product_url}${id}`)
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      if (single_product_error) {
        navigate("/", { replace: true });
      }
    }, 3000)
  }, [single_product_error]);

  if (single_product_loading) {
    return (
      <div className="section section-center">
        <h2>loading</h2>
      </div>
    )
  }

  if (single_product_error) {
    return (
      <div className="section section-center">
        <h2>there is an error</h2>
      </div>
    )
  }
  console.log(single_product)
  let { name, id: id_prod, price, description, stock, stars, reviews, images, company } = single_product

  return (
    <Wrapper>
      <Breadcrumb title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>back to products</Link>
        <div className=' product-center'>
          <ProductImage images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">${price / 100}</h5>
            <p className="desc">{description}</p>
            <p className="info"><span>Available : </span>{stock > 0 ? "in stock" : "Out of stock"}</p>
            <p className="info"><span>SKU :</span>{id_prod}</p>
            <p className="info"><span>Brand :</span>{company}</p>
            <hr></hr>
            {stock > 0 && <AddToCart product={single_product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );

}



const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SinglePageProduct;
