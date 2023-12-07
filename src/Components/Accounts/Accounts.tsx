import './Accounts.css'
import { Typography } from '@mui/material'
import Accenture from "../../assets/Accenture-logo.png"
import Meta from "../../assets/Meta.png"
import ATT from "../../assets/ATT.png"

export const Accounts = () => {
    return(
        <div className="col Card AccountsStyle">
            <Typography fontWeight="600" variant='h4'>Current Employer</Typography>
            <div className='col'>
                <img className='LogoHorizontal'  src={Accenture} alt="" />
                <br/>
                <br/>
                <Typography fontWeight="600" variant='h4'>Projects I've worked for:</Typography>
                <br/>
                <div className='col'>
                    <div className='row'>
                        <img className='LogoMeta'  src={Meta} alt="" />    
                        <img className='LogoATT'  src={ATT} alt="" />
                    </div>
                    <div className='row' style={{alignItems:'flex-start'}}>
                        <div className='col' style={{margin:10}}>
                        <div>
                            <Typography>React : FrontEnd  || PHP(Hack), Python, C++ : Backend</Typography>
                            <Typography>Databases: MySQL, Apache Cassandra</Typography>
                            <Typography>Cloud: AWS</Typography>
                            <Typography>Area of Development: Legal Platforms Engineering</Typography>

                            <br/>
                        </div>
                            <ul>
                                <li>
                                    <Typography>
                                        Developed a feature for an internal system named Rules <br/>
                                        that creates an event when a case gets opened.<br/>
                                        Another system receives this event which creates a task <br/>
                                        that agents outside the org have access to, in another tool.<br/>
                                    </Typography>
                                </li>
                                <li><Typography>Migrated 80K Cases to another tool because of deprecation</Typography></li>
                                <li><Typography>Created an Internal Tool for managing Rules Created </Typography></li>
                                <li><Typography>Developed a Method for Extracting and Translating Text <br/> in Cases </Typography></li>
                                <li><Typography>
                                    Developed a ChatBot using GenAI (Llama) that helps<br/>
                                    to provide better solutions and route more efficiently when <br/> 
                                    employees contact helpdesk
                                  </Typography></li>
                            </ul>
                        </div>
                        <div className='col' style={{margin:10}}>
                            
                        <div>
                            <Typography>React : FrontEnd  || Java Springboot : Backend</Typography>
                            <Typography>Databases: Oracle Databases</Typography>
                            <Typography>Cloud: AWS</Typography>
                            <Typography>Area of Development: Ondemand Streaming Services</Typography>
                            <br/>
                        </div>
                            <ul>
                                <li>
                                    <Typography>
                                        Developed an API for handling purchases of the service using <br/>
                                        Affirm
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Developed an API for encryption of files when uploaded to <br/>
                                        AWS S3 Bucket (Similar to Blob Storage)
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Created extensive documentation for legacy dependant features <br/>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Created multiple forms with their underlying backend API to <br/>
                                        process orders <br/>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Created unit testing for many APIs/functions that were <br/>
                                        missing them using JUNIT
                                    </Typography>
                                </li>
                            </ul>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}