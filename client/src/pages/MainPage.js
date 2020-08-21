import React, { Component } from 'react'
import FormTwo from '../components/FormTwo';
import TableTwo from '../components/TableTwo';
// import axios from axios;

import API from '../API'

class MainPage extends Component {
    _isMounted = false;
    state = {
        users:[],
        id: 0,
        name: '',
        email: '',
        password:""
    }

    componentDidMount = () => {
        this._isMounted = true;
        this.getUsers();
        
    }

    getUsers = async ( ) => {
        await API.getUsers().then((response)=>{
            // console.log(response.data.data)
            let users = response.data.data
            if(this._isMounted) {
                this.setState({
                    users: users
                })
            }
        }).catch((err)=>{
            console.log(err)
        });
    }

    componentWillUnmount(){
        this._isMounted = false;

    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    emailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submitForm = async (event, id) => {
event.preventDefault();


let userInfo = {
    name: this.state.name,
    email:this.state.email,
    password:this.state.password
}
if(this.state.id === 0) {
    await API.createUser(userInfo).then((response)=> {
        console.log(response)
   this.getUsers();

    }).catch((error)=>{
        console.log(error)
    })
} else {
    await API.editRecordAPI(userInfo, id).then((response)=> {
        console.log(response);
        this.setState({
            id: 0,
            name: '',
            email: '',
            password:""
        });
    this.getUsers();
    
    }).catch((error)=>{
        console.log(error)
    })
}
        
    }

    
    editRecord = (event, id) => {
        console.log(id, "ID FORM EDITRECORD()")
        event.preventDefault();
        API.getRecordByID(id)
        .then((response)=>{
            console.log(response, "FROM EDIT RECORD");
            this.setState({
                id: id,
                name: response.data.data.name,
                email: response.data.data.email,
                password: response.data.data.password
            })
            this.getUsers();
        }).catch((err)=>{
            console.log(err)
        });
    }

    deleteRecord = (event, id) =>{
        event.preventDefault();
        API.deleteRecordAPI(id).then((response)=>{
            console.log(response);
            this.getUsers();
            window.scroll(0,0);
        }).catch((err)=>{
            console.log(err)
        });
    }

    renderTable = () =>{
        if(this.state.users.length > 0){
            return (
                <TableTwo 
                users = {this.state.users}
                editRecord = {this.editRecord}
                deleteRecord = {this.deleteRecord}

                />
            )
        } else {
            return null
        }
    }

    render(){
        console.log(this.state)
        return (
            <>
          <div className="container">
               <div className="row">
            <FormTwo 
            nameChange={this.nameChange}
            emailChange={this.emailChange}
            passwordChange={this.passwordChange}
            submitForm={this.submitForm}
            id={this.state.id}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            />
            {this.renderTable()}
            
          </div>
          </div>
          
          </>
        );  
    }
  
}

export default MainPage;
