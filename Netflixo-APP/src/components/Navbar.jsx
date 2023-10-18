import { Link, useNavigate } from "react-router-dom"
import {BiSearchAlt2} from "react-icons/bi";
import {BsFillFilePlayFill} from "react-icons/bs";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () =>{
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }
    return(
        <nav id="navbar">
          <h1>
            <Link to="/"><BsFillFilePlayFill/>NETFLIXO</Link>
          </h1>
          <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Qual filme deseja?" 
            onChange={(e) => setSearch(e.target.value)} 
            value={search}/>
            <button type="submit">
                <BiSearchAlt2/>
            </button>
          </form>
        </nav>
    )
}
export default Navbar