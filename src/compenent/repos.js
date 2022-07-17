import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from "../context/context";

import { Bar, Doughnut, Column, Pie } from './Charts/index'
const Repos = () => {
  let { repos } = useGlobalContext()


  let myData = repos.reduce((prev, next) => {

    if (!next.language) return prev

    if (!prev[next.language]) {
      prev[next.language] = {
        label: next.language,
        value: 1,
        stars: next.stargazers_count
      }
    } else {
      prev[next.language] = {
        ...prev[next.language],
        value: prev[next.language].value + 1,
        stars: prev[next.language].stars + next.stargazers_count
      }
    }

    return prev
  }, {})



  let myDataPie = Object.values(myData).sort((a, b) => b.value - a.value)
  let myDataDoughnut = Object.values(myData).sort((a, b) => b.stars - a.stars)
    .map(item => { return { ...item, value: item.stars } })

  return (
    <section className='section'>

      <div className="section-center">
        <Wrapper>
          <Pie data={myDataPie} />
          {/* <Column data={myDataDoughnut} /> */}
          <Doughnut data={myDataDoughnut} />
          {/* <Bar data={myDataDoughnut} /> */}
        </Wrapper>
      </div>

    </section>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
