import styled from 'styled-components';
const Header1 = styled.header`
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  /* background:transparent; */
  background-position: 100%;
  background-repeat: no-repeat;
  font-size: 12px;
  color: #880001;
  border-bottom: 2px solid  grey;
  /* padding: 10px; */
  padding-left: 100px;
  padding: 10px;
  

`
const Header = () => {
  return (
    <>
      <Header1 className='header2'>
      <div className='div1'></div>
       <div className='div2'><h1>Student Live System</h1></div>
      </Header1>
    </>
  )
}

export default Header
