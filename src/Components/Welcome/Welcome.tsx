import "./Welcome.css";
import { Button, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import PDF from '../../assets/CV_Jesus Marroquin_2023.pdf'

export const Welcome = ({moveToElement}:any) => {

    const handleDownload = () => {
        console.log(PDF);
        let a = document.createElement("a");
        a.href = PDF;
        a.target='_blank';
        a.click();
        a.remove();
    }
    return(
        <div className="col Introduction">
            <Typography variant="h2">I am <span className="Name">Jesus Marroquin</span><br/> a Full Stack Engineer</Typography>
            <br/>
            <br/>
            <Typography variant="h5">Personal Portfolio</Typography>
            <br/>
            <div className="row">
                <Button onClick={moveToElement} variant="contained" sx={{color:'white', backgroundColor:'rgb(114, 87, 212)', margin:'10px'}}>Go to Info</Button>
                <Button onClick={() => handleDownload()} variant="outlined" startIcon={<DownloadIcon/>} sx={{color:'grey', borderColor:'gray', margin:'10px'}}>Download CV</Button>
            </div>
         
        </div>

    )
}