import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component{
    constructor(props)
    {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username:''
        }
    }

    onChangeUsername(e){
        this.setState({
            username :  e.target.value
        })
        console.log(this.state.username);
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username:this.state.username
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add',user)
        .then(res => console.log(res.data))
        .catch(e => console.log(e));
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >UserName: </label>
                        <input type="text" className="form-control" placeholder="Enter New Username" required onChange={this.onChangeUsername} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}