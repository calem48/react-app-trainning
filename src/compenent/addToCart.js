import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import styled from 'styled-components';


const AddToCart = ({ product }) => {
    let { colors } = product
    const [color, setColor] = useState(colors[0]);

    return (
        <Wrapper>
            <div className="colors">
                <span>colors :</span>
                <div>
                    {
                        colors.map((itemColor, index) => {
                            return (
                                <button
                                    key={index}
                                    className={color === itemColor ? "color-btn active" : "color-btn"}
                                    style={{ background: `${itemColor}` }}
                                    onClick={() => setColor(colors[index])}
                                >
                                    {color === itemColor && <FaCheck />}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
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
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

export default AddToCart;
