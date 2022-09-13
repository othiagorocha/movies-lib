import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import { NavBar, Form, Input, Button } from "./style";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`);
    setSearch("")

  }

  return (
    <NavBar>
      <h2>
        <Link to="/"><BiCameraMovie /> MoviesLink</Link>
      </h2>
      <Form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button type="submit"><BiSearchAlt2 /></Button>
      </Form>
    </NavBar>
  )
}