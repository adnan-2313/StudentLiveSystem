import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <h1>{`Copyright©️ ${year}`}</h1>
      </footer>
    </>
  )
}

export default Footer
