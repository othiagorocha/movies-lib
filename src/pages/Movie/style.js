import styled from "styled-components";

export const MoviePage = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    color: #fff;
    flex-direction: column;
    margin: 2rem auto;
    max-width: 300px;
  }
  
  h3 {
    font-size: 1.4rem;
  }
  svg {
    font-size: 1.5rem;
    color: #f7d354;

  }

  img {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
  }
`
export const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`
export const Info = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  p {
    display: inline;
  }
`

export const Description = styled.p`
  padding-bottom: 10rem;
  line-height: 1.4rem;
`