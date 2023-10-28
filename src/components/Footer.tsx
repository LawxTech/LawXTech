// Footer.tsx
import React from 'react'
import { makeStyles } from '@mui/styles'
import theme from '../styles/theme'
import { Box, Link, TextField } from '@mui/material'
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
    flexDirection: 'column',
    margin: '0 5em',
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

const Footer: React.FC = () => {
  const classes = useStyles()

  const redirectToGoogle = () => {
    "https://www.google.com";
  };

  return (
    <footer className={classes.footer}>
      <Box display='flex' justifyContent='space-between' >
        <Box display='flex' marginBottom='2em'>
          <Box style={{ marginRight: '2em' }}>
            <Box marginBottom='0.5em' fontWeight='bold'> Social Media </Box>
            <Box display='flex' flexDirection='column'>
              <Link
                href="https://www.linkedin.com/company/law-x-tech/"
                target="_blank"
                rel="noopener"
                color="primary"
                underline="hover"
              >
                LinkedIn
              </Link>
              <Link
                href="https://x.com/lawxtech?s=21&t=1MzXUA2o4FeTHH1f7uE8AA"
                target="_blank"
                rel="noopener"
                color="primary"
                underline="hover"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com/lawxtech?igshid=MzMyNGUyNmU2YQ=="
                target="_blank"
                rel="noopener"
                color="primary"
                underline="hover"
              >
                Instagram
              </Link>
              <Link
                href="https://join.slack.com/t/lawxtech/shared_invite/zt-20u7mvfqu-EWVec2Qip3XhYoUyVtyvpA"
                target="_blank"
                rel="noopener"
                color="primary"
                underline="hover"
              >
                Slack
              </Link>
            </Box>
          </Box>
          <Box>
            <Box marginBottom='0.5em' fontWeight='bold'>Contact Us</Box>
            <Box marginBottom='1em'>Lagos, Nigeria</Box>
            <Box>+2349099030433</Box>
            <Box>lawxtechseries@gmail.com</Box>
          </Box>
        </Box>
        <Box className={classes.inputBox} marginBottom='2em'>
          <Box>Subscribe to our Newsletters</Box>
          <TextField
            label="First name"
            variant="outlined"
            margin="dense"
            size="small"
            InputLabelProps={{
              className: classes.whiteInputLabel
            }}
            InputProps={{
              className: classes.whiteInput
            }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            margin="dense"
            size="small"
            InputLabelProps={{
              className: classes.whiteInputLabel
            }}
            InputProps={{
              className: classes.whiteInput
            }}
          />
          <Box style={{ marginTop: "0.5em" }}>
            <Button type="primary" onClick={redirectToGoogle} fullwidth>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <img
          src={require("../assets/logo/logo_3.JPG")}
          alt="Logo"
          style={{ maxHeight: "3em" }}
        />
        <Box>&copy; 2023 Law x Tech. All Rights Reserved.</Box>
      </Box>
    </footer>
  )
}

export default Footer
