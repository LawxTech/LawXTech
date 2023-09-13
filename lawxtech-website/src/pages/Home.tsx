import React from 'react'
import { Button } from '../components/Button'

const Home: React.FC = () => {

    const redirectToGoogle = () => {
        window.location.href = 'https://www.google.com'
      };

  return (
    <div>
        <Button
        type='primary'
        onClick={redirectToGoogle}
        > 
        Join Community
        </Button>
      {/* Home content */}
    </div>
  )
}

export default Home