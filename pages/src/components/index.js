import React, {Component} from  'react';
class FolderData extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            folder:[],

        };
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange=(event)=>{
        event.persist();
        console.log(event , "ddd");
    }
    render()
    {
        return(
            <div>
                <input type="file" onChange={this.handleChange} webkitdirectory="" multiple=""  />
                <button>Submit</button>
            </div>
        )
    }
}

export default FolderData;