import './Abilities.css';
import { Typography } from "@mui/material";
import ReactImage from '../../assets/React-icon.svg.png';
import Angular from '../../assets/angular.png';
import PHP from '../../assets/PHP.png';
import CSharp from '../../assets/CSharp.png';
import Java from '../../assets/java.png';
import Python from '../../assets/python.png';
import Node from '../../assets/Node.png';
import AWS from '../../assets/AWS.png';




export const Abilities = () => {
    return(
        <div className="col HabilitiesStyles Card" style={{alignItems:'flex-start', padding:'30px'}}>
            <div className='col'>
                <Typography fontWeight="600" variant="h4">Code Proficiencies</Typography>
                <br/>

                <Typography fontWeight="600" variant="h5">FrontEnd</Typography>
                    <div className='row'>
                            <img className='LogoSquare' src={ReactImage} alt="" />
                            <img className='LogoSquare' src={Angular} alt="" />
                    </div>
                <br/>

                <div className='col'>
                    <Typography fontWeight="600" variant="h5">Backend</Typography>
                    <div className='row'>
                        <img className='LogoVertical' src={PHP} alt="" />
                        <img className='LogoSquare' src={CSharp} alt="" />
                        <img className='LogoVertical' src={Java} alt="" />
                        <img className='LogoSquare' src={Python} alt="" />
                        <img className='LogoVertical' src={Node} alt="" />
                    </div>
                </div>
                <br/>
                
                <div className='col'>
                    <Typography fontWeight="600" variant="h5">Cloud</Typography>
                    <div className='row'>
                        <img className='LogoVertical' src={AWS} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}