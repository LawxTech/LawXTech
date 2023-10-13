import { Box, FormControl, Input, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../styles/theme'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import { makeStyles } from '@mui/styles'
import { Button } from "../components/Button"

const useStyles = makeStyles({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.default,
    padding: '2em 5em',
    marginTop: '2em'
  },
  inputBox: {
    display: 'flex',
    margin: '0 1em'
  },
  whiteInputLabel: {
    color: 'darkgrey !important', // Change label color to white
  },
  whiteInput: {
    '& .MuiOutlinedInput-root': {
      borderColor: 'darkgrey !important', // Change input border color to white
    },
  }
})

const Contact: React.FC = () => {
  const classes = useStyles()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    setMessage('')
  };

  const subscribe = () => {
    const formData = {
      'First Name': firstName,
      'Last Name': lastName,
      'Email': email,
      'Phone Number': phoneNumber,
      'Message': message,
    };

    fetch('https://formsubmit.co/rofiatolusanya12@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Subscription successful!')
          resetForm()
        } else {
          alert('Subscription failed. Please try again later.')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Subscription failed. Please try again later.')
      })
  }

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '7em'}}>
      <Box style={{ backgroundColor: theme.palette.background.paper, 
        color: theme.palette.text.secondary, 
        borderRadius: '0.7em', 
        padding:'1.5em' 
      }}
      >
        <Box style={{padding: '1em'}}>
        <Typography variant='h4'>
            Contact Information
        </Typography>
        </Box>
        <Box style={{paddingLeft: '1em' }}>
        <Typography variant='body1'>
            Send us a mail today
        </Typography>
        </Box>
        <Box style={{margin: '3em 0'}}>
        <Box display='flex' style={{padding: '1em'}}>
          <Box>< PhoneInTalkIcon /></Box>
          <Box>+234 909 903 0433</Box>
        </Box>
        <Box display='flex' style={{padding: '1em'}}>
          <Box>< LocalPostOfficeIcon /></Box>
          <Box>lawxtechseries@gmail.com</Box>
        </Box>
        <Box display='flex'  style={{padding: '1em'}}>
          <Box>< FmdGoodIcon /></Box>
          <Box>Lagos, Nigeria</Box>
        </Box>
        </Box>
      </Box>
      <Box style={{ backgroundColor: theme.palette.background.default }}>
        <Box className={classes.inputBox} marginBottom='5em'>
          <TextField
            label="First name"
            variant="outlined"
            margin="dense"
            size="small"
            value={firstName}
            onChange={handleFirstNameChange}
            InputLabelProps={{
              className: classes.whiteInputLabel
            }}
            InputProps={{
              className: classes.whiteInput
            }}
            style={{paddingRight:'3em'}}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="dense"
            size="small"
            value={lastName}
            onChange={handleLastNameChange}
            InputLabelProps={{
              className: classes.whiteInputLabel
            }}
            InputProps={{
              className: classes.whiteInput
            }}
          />
        </Box>
        <Box className={classes.inputBox} marginBottom='5em' >
          <TextField
            label="Email Address"
            variant="outlined"
            margin="dense"
            size="small"
            value={email}
            onChange={handleEmailChange}
            InputLabelProps={{
              className: classes.whiteInputLabel
            }}
            InputProps={{
              className: classes.whiteInput
            }}
            style={{paddingRight:'3em'}}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            margin="dense"
            size="small"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            InputLabelProps={{
              className: classes.whiteInputLabel
            }}
            InputProps={{
              className: classes.whiteInput
            }}
          />
        </Box>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Message</InputLabel>
          <Input id="standard-adornment-amount" value={message} onChange={handleMessageChange} />
        </FormControl>
        <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" onClick={subscribe}>
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
