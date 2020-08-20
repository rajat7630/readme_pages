import React, { Component } from 'react';
import axios from 'axios';
import Folder from "./folder";
import MDReactComponent from 'markdown-react-js';
import "./filefolder.css"
class FileFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: undefined,
            htmlData: "hello",
            expand: false,
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
        const TAGS = {
            html: 'span', // root node, replaced by default
            strong: 'b',
            em: 'i'
        }
        let res = (this.state.tree) ? (<div>
            <Folder data={this.state.tree} getSrcFile={(data) => this.markupHandler(data)} />
        </div>) : (<div>Loading....</div>)
        return (
            <div className="flex bg-blue-400 bodyyy">
                <div className={`${this.state.expand ? "hidden" : "flex"}`} onClick={() => { this.setState({ expand: true }) }} >
                    <i className="fa fa-bars burger text-blue-900"></i>
                </div>
                <div className={`flex-initial ${this.state.expand ? "flex" : "hidden"} navv overflow-scroll navv example`}>
                    <div className=" bg-blue-800 navbar">
                        <div>
                            <i onClick={() => { this.setState({ expand: false }) }} className="fa fa-close text-white text-3xl font-normal float-right"></i>
                        </div>
                        <div className="mt-10">
                            {res}
                        </div>
                    </div>
                </div>
                <div className="flex-initial bodd overflow-scroll text-gray-900 example">
                    <MDReactComponent text={this.state.htmlData} tags={TAGS} />
                </div>
            </div>
        )
    }
}

export default FileFolder;