import React, { Component } from 'react';
import axios from 'axios';
import File from "./file";
class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: this.props.data,
            expand: false,
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.dataHandler = this.dataHandler.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
    }

    componentDidMount() {
        console.log(this.props.data);
    }

    clickHandler = () => {
        let ex = !this.state.expand;
        console.log(ex);
        this.setState({
            expand: ex
        });
    }
    dataHandler = (data) => {
        console.log(data);
        this.props.getSrcFile(data);
    }
    fileHandler = (data) => {
        console.log(data);
        this.props.getSrcFile(data);
    }

    render() {
        return (
            <div>
                <button className="bg-blue-900 text-white butt text-2xl pt-2 pb-2 mb-2 font-bold" onClick={this.clickHandler}>
                    {this.state.tree.name} 
                    <i className="float-right pt-1 mr-3 fa fa-chevron-circle-down text-white-900 iccon"></i>
                </button>
                <ul>{(this.state.expand) ?
                    (
                        this.state.tree.children.map(child => {
                            // console.log(child);
                            if (child.children) {
                                return (<li><Folder data={child} getSrcFile={(data) => { this.fileHandler(data) }} /></li>)
                            }
                            else {
                                return (<li><File data={child} sendData={(data) => { this.dataHandler(data) }} /></li>)
                            }
                        })
                    ) : (null)}</ul>
            </div>
        )
    }
}

export default Folder;