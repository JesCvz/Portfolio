import "./Crud.css";
import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

export const Crud:React.FC = () =>{

    const [page, setPage] = useState<number>(0);
    const [users, setUsers] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [_error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    const apiURL = "https://agendaappservice.azurewebsites.net/api/clients/";
    const [reload, setReload] = useState(false);


    const [id, setID] = useState<any>("");
    const [name, setName] = useState<any>("");
    const [phone, setPhone] = useState<any>("");
    const [poc_name, setPoc_Mame] = useState<any>("");
    const [rfc, setRFC] = useState<any>("");


    useEffect(() => {
        setLoading(true);
        fetch(apiURL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({page:page})
        })
        .then(res => {
          if(!res.ok){
          throw new Error("Network response not okay")
          }
          return res.json();
        })
        .then(data => {
            console.log(data)
            setUsers(data)
        })
        .catch(error => setError(error))
        .finally(()=>setLoading(false));
    },[page, reload])

    const handleDelete = (ID:number) =>{
        fetch(`${apiURL}${ID}`, {
            method: "DELETE",
            mode: "cors",
        })
        .then(res => {
          if(!res.ok){
          throw new Error("Network response not okay")
          }
          return res.json();
        })
        .then(data => {
            console.log(data)
            setReload(true)
        })
    }

    const handleClose = () => setOpen(false);

    const handleEdit = (row:any) =>{
        setID(row.id);
        setName(row.name);
        setPhone(row.phone);
        setPoc_Mame(row.poC_Name);
        setRFC(row.rfc);
        setOpen(true);
    }

    const handlePlusButtonModal = () =>{
        if(id != ''){
            fetch(`${apiURL}${id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(
                {
                    name: name,
                    phone: phone,
                    rfc: rfc,
                    poc_name: poc_name
                })
            })
            .then(res => {
            if(!res.ok){
            throw new Error("Network response not okay")
            }
            return res.json();
            })
            .then(data => {
                console.log(data)
                setReload(true)
            })
        }
        console.log('aqui')
        fetch(`${apiURL}create`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(
                {
                    name: name,
                    phone: phone,
                    rfc: rfc,
                    poc_name: poc_name
            })
        })
        .then(res => {
          if(!res.ok){
          throw new Error("Network response not okay")
          }
          return res.json();
        })
        .then(data => {
            console.log(data)
            setReload(true)
        })
    }
      
    return(
        <div className="col CrudStyles">
            {!loading 
            ?
            <>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="col"
            >
                <div className="col" style={{backgroundColor: 'white', color:'black', padding:30}}>
                    <br/>
                    <div className="row">
                        <Typography>ID:</Typography>  
                        <TextField
                            id="outlined-controlled"
                            disabled
                            label="ID"
                            value={id}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setID(event.target.value);
                            }}
                        />
                    </div>
                    <br/>
                    <div className="row">
                        <Typography>Name:</Typography>  
                        <TextField
                            id="outlined-controlled"
                            label="Name"
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                            }}
                        />
                    </div>
                    <br/>
                    <div className="row">
                        <Typography>Phone:</Typography>  
                        <TextField
                            id="outlined-controlled"
                            label="Phone"
                            value={phone}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPhone(event.target.value);
                            }}
                        />
                    </div>
                    <br/>
                    <div className="row">
                        <Typography>POC Name:</Typography>  
                        <TextField
                            id="outlined-controlled"
                            label="POC Name"
                            value={poc_name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPoc_Mame(event.target.value);
                            }}
                        />
                    </div>
                    <br/>
                    <div className="row">
                        <Typography>RFC:</Typography>  
                        <TextField
                            id="outlined-controlled"
                            label="RFC"
                            value={rfc}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setRFC(event.target.value);
                            }}
                        />
                    </div>
                    <br/>

                    <Button onClick={() => handlePlusButtonModal()}><AddIcon/></Button>
                </div>
           
            </Modal>
            <Button onClick={() => setOpen(true)}><AddIcon/></Button>
                <br/>   
                <TableContainer component={Paper} sx={{maxWidth:"70vW"}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">POC Name</TableCell>
                            <TableCell align="right">RFC</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users && users.map((row:any) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.phone}</TableCell>
                                        <TableCell align="right">{row.poC_Name}</TableCell>
                                        <TableCell align="right">{row.rfc}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => handleEdit(row)}><EditIcon color="warning"/></Button>
                                            <Button onClick={() => handleDelete(row.id)}><DeleteIcon color="error"/></Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/> 
                <div className="row">
                    <Button onClick={() => page>0 ? setPage(page-1) : console.log("No se puede ir menor a 0")}><ArrowBackIcon/></Button>
                    <Typography variant="body1"> {page} </Typography>
                    <Button onClick={() => setPage(page+1)}><ArrowForwardIcon/></Button>
                </div>
                
            </>
            :
            <CircularProgress />
            }
            
        </div>
    )
}