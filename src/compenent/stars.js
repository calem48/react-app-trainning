import React from 'react';
import styled from 'styled-components';

const Stars = () => {
    return (
        <WrapperStars>
            <div className="stars">
                <span>stars</span>
            </div>
            <p className="reviews">(100 customer reviews)</p>
        </WrapperStars>
    );
}

const WrapperStars = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`

export default Stars;
