import React, { Component } from 'react';
import DataUsers from './TaskListJson';
import axios from 'axios';
import SortTableHeader from './SortTableHeader'
class SortTable extends Component {
    /*static propTypes = {
        name: React.PropTypes.string,
    };*/
    
   

    constructor(props){
        super(props)
    }
    state={
        tasks : DataUsers,
        columns : []
    }
    componentDidMount() {
        const { tasks } = this.props;
        this.setState({ tasks })
    }
    
    /*shouldComponentUpdate(nextProps) {
        const { tasks } = nextProps;
        this.setState({ tasks })
    }*/
    

    render(){
       console.log(this.props.getDatasFromServer)
        return(
            <div>
                <SortTableHeader />
                Hello World
            </div>
        )
    }
    
}



export default SortTable