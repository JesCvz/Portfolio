import { Typography } from "@mui/material";
import "./Skills.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DescriptionIcon from '@mui/icons-material/Description';

export const Skills = () =>{
    const fontSize = 100
    return(
        <div className="col SkillsStyles">
            <Typography fontWeight="600" variant="h4">Skills</Typography>
            <div className="row">
                <div className="Card addPadding">
                    <CheckBoxOutlineBlankIcon sx={{fontSize}}/> 
                </div>
                <div className="Card addPadding">
                    <CampaignIcon sx={{fontSize}}/>
                </div>
                <div className="Card addPadding">
                    <GroupsIcon sx={{fontSize}}/>
                </div>
                <div className="Card addPadding">
                    <LocalLibraryIcon sx={{fontSize}}/>
                </div>
            </div>
            <div className="row">
                <div className="Card addPadding">
                    <CalendarMonthIcon sx={{fontSize}}/>
                </div>
                <div className="Card addPadding">
                    <DoneAllIcon sx={{fontSize}}/>
                </div>
                <div className="Card addPadding">
                    <EmojiObjectsIcon sx={{fontSize}}/>
                </div>
                <div className="Card addPadding">
                    <DescriptionIcon sx={{fontSize}}/>
                </div>
            </div>
        </div>
    )
}