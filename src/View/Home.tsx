import { Accounts } from "../Components/Accounts/Accounts"
import { Abilities } from "../Components/Abilties/Abilities"
import { Profile } from "../Components/Profile/Profile"
import { Welcome } from "../Components/Welcome/Welcome"
import "./Home.css"
import { Divider } from "@mui/material"
import { useRef } from "react"


export const Home:React.FC = () => {
    const ref = useRef<null | HTMLDivElement>(null); 

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };

      
    return(
        <div className="body">
            <Welcome moveToElement={handleClick}/>
            <div ref={ref}>
                <Profile/>
            </div>
            <Abilities/>
            <Accounts/>
        </div>
    )
}