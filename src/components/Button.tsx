import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from '@emotion/styled'
import theme from '../styles/theme'

interface ButtonProps {
  children: string;
  onClick: () => void
  type: 'primary' | 'secondary'
  small?: boolean
  fullwidth?: boolean
}

const StyledButton = styled(MuiButton)<{ buttonType: 'primary' | 'secondary' }>`
  background-color: ${(props: { buttonType: string; }) => props.buttonType === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main};
  color: white; // Text color for the button
  border-radius: 1em;
`;

export const Button: React.FC<ButtonProps> = ({ children, onClick, type, small=false, fullwidth=false }) => {

    switch(type){
        case 'primary':
        return (
          <StyledButton
            size={small ? 'small' : 'medium'}
            color='primary'
            onClick={onClick}
            fullWidth={fullwidth} 
            buttonType={'primary'}          
            >
            {children}
          </StyledButton>
        )
        case 'secondary':
          return (
            <StyledButton
              size={small ? 'small' : 'medium'}
              color='secondary'
              onClick={onClick}
              fullWidth={fullwidth} 
              buttonType={'secondary'}            
              >
              {children}
            </StyledButton>
          )
    }

}
