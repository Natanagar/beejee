import React, { Component } from 'react';
import DataUsers from './TaskListJson';
import axios from 'axios';
import SortTableHeader from './SortTableHeader';
import SortTableBody from './SortTableBody'
const TABLE_COLUMNS = [
    {
        label: 'ID',
        sort: 'default',
    }, 
    {
        label: 'User Name',
        sort: 'default',
    }, 
    {
        label: 'Email',
        sort: 'default',
    },
    {
        label: 'Text',
        sort: 'default',
    }, 
    {
        label: 'Status',
        sort: 'default',
    }, 
    {
        label: 'image_path',
        sort: 'default',
    },

];
class SortTable extends Component {
   /* static propTypes = {
        name: React.PropTypes.string,
    };*/
    
   

    constructor(props){
        super(props)
    }
    state={
        tasks : DataUsers,
        columns : TABLE_COLUMNS
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
    console.log(this.props)
       const { users  } = this.props
       const { columns } = this.state
        return(
            <div>
                <SortTableHeader 
                columns={ columns }
                />
                <SortTableBody 
                tasks={users}
                />
            </div>
        )
    }
    
}



export default SortTable