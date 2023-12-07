import './Profile.css';
import { Typography } from "@mui/material"
import JesusPhoto from '../../assets/jesus.jpg';

export const Profile = () =>{
    return(
        <div className='row Card' style={{padding:"30px"}}>
            <img className='JesusPhoto' src={JesusPhoto} alt="" />
            <div className='col' style={{alignItems:"start"}}>
                <Typography fontWeight="600" variant='h5' sx={{padding:4}}>About me</Typography>
                <Typography sx={{padding:"0px 30px"}}>
                    I'm a Software Engineering with three years of experience working as a FullStack Engineer.<br/> 
                    My expertise lies in backend technologies including JAVA, PHP, C# and Python,<br/> 
                    complemented by my proficiency in frontend development with React and Angular. <br/> 
                    In addition to my technical roles, I’ve also served as an Operational Lead. <br/> 
                    My responsibilities encompassed steering client discussions, adeptly allocating resources, <br/> 
                    and ensuring seamless project execution.<br/> 
                </Typography>
            </div>
        </div>
        
    )
}