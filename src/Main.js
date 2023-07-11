import React, { Component } from 'react'
import './Main.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
export class Main extends Component {
  render() {
    return (
     <>
     <div className='body'>
        
     <div className='booking'>
        <center>
        <h1 className="booktiketh1">MARK SHEET</h1>
        </center>
        </div>
        <center>
< TextField  label="REGISTER NUMBER" inputProps={{style:{width:"350px"},}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br></br><br></br><br></br></center>
  <div className='ti'>
<FormControl fullWidth>

  <InputLabel id="demo-simple-select-label">SUBJECT</InputLabel>
  
  <Select
    labelId="demo-simple-select-label" style={{width:"300px"}}
    id="demo-simple-select">
    <MenuItem value={10}>Tamil</MenuItem>
    <MenuItem value={10}>English</MenuItem>
    <MenuItem value={20}>Other</MenuItem>
  </Select>
</FormControl><br></br><br></br>
  </div>
  <br></br>
<center>
<TextField  label="MARK" type="text" inputProps={{style:{width:"350px"},}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center>
<br></br><br></br>
<center>
<TextField  label="GRADE" type="price" inputProps={{style:{width:"350px"},}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center>
<br></br><br></br>
<center>
<TextField label="RESULT" type="text"  inputProps={{style:{width:"350px"},}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center>
<br></br><br></br><br></br><br></br>
<center>
<Button variant="contained" className="booktiketbutton1" style={{width:"378px",height:"50px",}}>Proceed</Button></center>
</div>

     </>
    )
  }
}

export default Main