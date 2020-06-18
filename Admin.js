import React from 'react';
import iitg from '../iitg1.jpg';
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFB6C1;
`;

const Wrapper = styled.div`
  flex-direction: row;
`;

const Heading = styled.p`
  color: red;
  margin-left: 550px;
  font-weight: bold;
`;

const Image = styled.img`
  height: 50%;
  width: 50%;
  margin: 8px;
`;

const Button = styled.button`
  margin: 20px;
  margin-left: 1400px;
`;

// make functional components

const Admin = (props) => {
    const {username, handleLogout} = props;
  return(

      <Content>
        <Wrapper>
          <Heading>Welcome to the page, {username}.You are now logged in!!</Heading>
          <Button onClick={handleLogout}>Logout</Button>
        </Wrapper>

        <Image src={iitg} alt="iitg" />
      </Content>


    )
  }

export default Admin;