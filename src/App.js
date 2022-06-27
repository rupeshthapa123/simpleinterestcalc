import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const App = ()=> {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSI] = useState(0);

  const calculateInterest =() =>{
    setSI(p*t*r/100);
  }
  return (
    <div className='division'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField onChange={(event) => setP(event.target.value)} id="outlined-basic" label="Enter Principle" variant="outlined" /><br/><br/>
      <TextField onChange={(event) => setT(event.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" /><br/><br/>
      <TextField onChange={(event) => setR(event.target.value)} id="outlined-basic" label="Enter Rate" variant="outlined" />
      <br/><br/>
      <Button onClick={()=> calculateInterest()} variant="contained">Calculate</Button><br/><br/>
      <Typography variant="h6" gutterBottom component="div">
        Simple interest is:  {si}
      </Typography>
    </div>
  );
}

export default App;
