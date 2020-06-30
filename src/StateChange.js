import React, { Component } from "react"


export default class StageChange extends Component {

    constructor(props){

        super(props);
        this.state = {

            value : this.props.value,


        }
    }

    render(){

        return(

            <div onClick = {()=>{this.setState({

                value : this.state.value + 190,
            })}}>Value is {this.state.value}</div>
        )
    }

}