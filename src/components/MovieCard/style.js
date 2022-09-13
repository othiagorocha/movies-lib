import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  color: #FFF;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 1rem;
  width: 30%;
  
  img,h2,p {
    margin-bottom: 1rem;
  }

  svg {
    color: #F7D354
  }

  a {
    align-items: center;
    background-color: #F7D354;
    border: 2px solid #F7D354;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 1rem .5rem;
    text-align: center;
    transition: .35s;
    :hover {
      background-color: transparent;
      color: #F7D354
    }
  }

`

export const Image = styled.img`
max-width: 100%;

`