import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7FFFD4;
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
  height: 20%;
  width: 20%;
  margin: 8px;
`;

const Button = styled.button`
  margin: 20px;
  margin-left: 1400px;
  color: blue;
`;



const User = (props) => {


    const {username, handleLogout} = props;
    return(

      <Content>
        <Wrapper>
          <Heading>Welcome to the page, {username}.You are now logged in!!</Heading>
          <Button onClick={handleLogout}>Logout</Button>
        </Wrapper>

        <Image src="/ronaldo.jpeg" />
        <Image src="/258872.jpg" />
        <Image src="/lionel-messi.jpg" /> 

      </Content>


    )

  }
  export default User;
