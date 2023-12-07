import './Profile.css';
import { Divider, Typography } from "@mui/material"
import JesusPhoto from '../../assets/jesus.jpg';
import ReactLogo from '../../assets/React-icon.svg.png'
import AngularLogo from '../../assets/angular.png';
import Java from '../../assets/Java.png'
import Python from '../../assets/python.png'
import CSharp from '../../assets/CSharp.png'
import PHP from '../../assets/PHP.png'
import Node from '../../assets/Node.png'



export const Profile = () =>{
    return(
        <div className="row ProfileStyle">
            <div>
                <img className='ProfilePhoto' src={JesusPhoto}/>
            </div>
            

            <div className='col AboutMeStyle'>
                <Typography variant="h3">Jesús Eduardo Marroquín Cavazos</Typography>
                <Typography variant="h5">
                    FrontEnd
                </Typography>
                <Divider className='Divider' flexItem/>

                <div className='row'>
                    <img className='Logos' src={ReactLogo}/>
                    <img className='Logos' src={AngularLogo}/>
                </div>
                <Typography variant="h5">
                    Backend
                </Typography>
                <Divider className='Divider' flexItem/>
                <div className='row'>
                    <img className='LogoHorizontal' src={PHP} />
                    <img className='Logos' src={CSharp}/>
                    <img className='Logos' src={Java}/>
                    <img className='Logos' src={Python}/>
                    <img className='LogoHorizontal' src={Node} />
                </div>
            </div>
        </div>
    )
}