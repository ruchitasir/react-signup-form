import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'

function App() {
   
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submit")
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();
    return (
      <div className="App">
        <form  className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required-name"
          label="Name"
          variant="outlined"
        />
          <TextField
          required
          id="outlined-required-email"
          label="Email"
          type="email"
          variant="outlined"
        />
       
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
           {/*  <Button variant="raised" type="submit">Submit</Button> */}
            <Button type="submit">Submit</Button>
        </form>

        {/* <div class="form-control">
        <label for="my-input">Email address</label>
        <input id="my-input" aria-describedby="my-helper-text" />
        <span id="my-helper-text">We'll never share your email.</span>
        </div> */}

      </div>
    )
  }

export default App
