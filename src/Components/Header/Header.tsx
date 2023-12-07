import "./Header.css"
import AscendionLogo from '../../assets/ascendionLogo.png'
import MicrosoftLogo from '../../assets/microsoftLogo.png'
import { Typography } from "@mui/material"
import { NavLink } from "react-router-dom"


export const Header = () =>{
    return(
        
        <nav>
            <NavLink to={"/"}><img className="HeaderLogo" src={AscendionLogo} alt='Ascendion Logo'/></NavLink>
            <NavLink to={"/Crud"}><Typography fontWeight="600" variant="h5">Interview</Typography></NavLink>
            <NavLink to={"/"}><img className="HeaderLogo" src={MicrosoftLogo} alt='Microsoft Logo'/></NavLink>
        </nav>
        
    )
}