import React, { Component } from 'react';
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAD2;
`;


const Button = styled.button`
  margin: 20px;
  color: red;
  margin-left: 30px;
`;

const Heading = styled.p`
  color: red;
  font-weight: bold;

`;


export default class Login extends Component{
  
   constructor(props){
    super(props)
    
    let loggedIn=false 
    this.state={

      username: '',
      password: '',
      loggedIn


   }

     this.onChange = this.onChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

   onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
   }


    handleSubmit(e){
      e.preventDefault()
      const { username, password } =this.state
      this.props.submitForm({username, password});
      
    }
    



   render()  {
         return(
        <Content>
        <Heading>Welcome to Login Page</Heading>
             
             <input type="text" placeholder="username" name="username" value= {this.state.username} onChange= {this.onChange}/>
             <br/>
             <input type="password" placeholder="password" name="password" value= {this.state.password} onChange= {this.onChange}/>
             <br/>
             <Button onClick={this.handleSubmit}>Submit</Button>

        </Content>



        )



   }



}