import React, { Component } from 'react';
import axios from 'axios';

class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: this.props.data
        };

        this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler=()=>{
        axios.post("http://localhost:8000/file", {
            file:this.state.tree.path
        })
        .then(res=>{
            console.log(res);
            this.props.sendData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    }
    render() {
        return (
            <div>
                <button className="bg-blue-900 text-white w-64 text-2xl font-bold pt-2 pb-2" onClick={this.clickHandler}>{this.state.tree.name}</button>
            </div>
        )
    }
}

export default File;