import React, { Component } from 'react';
import axios from 'axios';
import Folder from "./folder";
import MDReactComponent from 'markdown-react-js';
import { slide as Menu } from 'react-burger-menu'

class FileFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: undefined,
            htmlData: "",
            slideMenuActive: false,
        };
        this.markupHandler = this.markupHandler.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8000/fileStructure")
            .then(res => {
                console.log(res.data);
                this.setState({
                    tree: res.data,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    markupHandler = (data) => {
        this.setState({
            htmlData: data
        })
    }


    render() {
        let res = (this.state.tree) ? (<div>
            <Folder data={this.state.tree} getSrcFile={(data) => this.markupHandler(data)} />
        </div>) : (<div>Loading....</div>)
        return (
            <div>
                <div>
                    <Menu left disableOverlayClick  className="bg-red text-green w-64 pt-64">
                        <div>{res}</div>
                    </Menu>
                </div>
                <div>
                    <MDReactComponent text={this.state.htmlData} />
                </div>
            </div>
        )
    }
}

export default FileFolder;