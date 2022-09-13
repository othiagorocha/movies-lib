import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  background-color: #121212;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  h2 {
    a {
      display: flex;
      align-items: center;
      gap: .5rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  gap: .5rem;
`

export const Input = styled.input`
  padding: .2rem .8rem;
  border-radius: 4px;
  border: none;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #F7D354;
  border: 2px solid #F7D354;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 1.3rem;
  padding: .3rem;
  transition: .35s;
  :hover {
    background-color: transparent;
    color: #F7D354
  }
`

