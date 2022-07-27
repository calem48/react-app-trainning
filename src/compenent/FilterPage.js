import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContextFilter } from '../context/contextFilter';
import { FaCheck } from "react-icons/fa";

const FilterPage = () => {
    let {
        all_products,
        filters: { value, category, company, colors, min_price, max_price, price, shipping },
        filterUpdate
    } = useGlobalContextFilter()
    console.log(all_products);

    let getUniqueValue = (data, type) => {
        let uniqe = data.map(u => u[type])
        if (type === "colors") {
            uniqe = uniqe.flat()
        }
        return ["all", ...new Set(uniqe)]
    }

    let comp = getUniqueValue(all_products, "company")
    let cate = getUniqueValue(all_products, "category")
    let col = getUniqueValue(all_products, "colors")


    return (
        <Wrapper>
            <div className="content">
                <form>
                    <div className="form-control">
                        <input
                            type="text"
                            name="text"
                            placeholder="search"
                            className="search-input"
                            value={value}
                            onChange={filterUpdate}
                        />
                    </div>
                    <div className="form-control">
                        <h5>category</h5>
                        <div>
                            {
                                cate.map((c, index) => {
                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            className={c === category ? "active" : ""}
                                            name="category"
                                            onClick={filterUpdate}
                                        >
                                            {c}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="form-control">
                        <h5>company</h5>
                        <select name="company" className="company" onChange={filterUpdate}>
                            {
                                comp.map((c, index) => {
                                    return (
                                        <option key={index} value={c}>{c}</option>

                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-control">
                        <h5>color</h5>
                        <div className="colors">

                            {
                                col.map((c, index) => {
                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            name="colors"
                                            data-color={c}
                                            style={{ background: c }}
                                            onClick={filterUpdate}
                                            className={c === colors ? "color-btn active" : "color-btn"}
                                        >
                                            {c === colors ? <FaCheck /> : null}

                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="form-control">
                        <h5>price</h5>
                        <p className="price">${price / 100}</p>
                        <input
                            onChange={filterUpdate}
                            type="range"
                            name="price"
                            min={min_price}
                            max={max_price}
                            value={price} />
                    </div>

                </form>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`


export default FilterPage;
