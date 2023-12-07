import "./Header.css"
import AscendionLogo from '../../assets/ascendionLogo.png'
import MicrosoftLogo from '../../assets/microsoftLogo.png'


export const Header = () =>{
    return(
        
        <nav>
            <img className="HeaderLogo" src={AscendionLogo} alt='Ascendion Logo'/>
            <img className="HeaderLogo" src={MicrosoftLogo} alt='Microsoft Logo'/>
        </nav>
        
    )
}