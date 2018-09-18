import React, { Component } from 'react';
import DataUsers from './TaskListJson';
import SortTableHeader from './SortTableHeader';
import SortTableBody from './SortTableBody';
import { Link } from 'react-router-dom';
import { block } from 'bem-cn';


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
//const cn = require('bem-cn')('table');
class SortTable extends Component {
   /* static propTypes = {
        name: React.PropTypes.string,
    };*/
    

    state={
        tasks : DataUsers,
        columns : TABLE_COLUMNS
    }
    componentDidMount() {
        const { tasks, sendDatasFromAdmin } = this.props;
        this.setState({ tasks })
    }
    
    /*shouldComponentUpdate(nextProps) {
        const { tasks } = nextProps;
        this.setState({ tasks })
    }*/
    sortTableHandler = () => {
        console.log("BANANA")
    }
    

    render(){
    
       const { users, addChangedDatasFromAdmin, getChangedTasksFromAdmin } = this.props
       const { columns } = this.state
        return(
            <div className="sort-table">
                <SortTableHeader 
                columns={columns}
                onClick={this.sortTableHandler}
                />
                <SortTableBody 
                tasks={users}
                getChangedTasksFromAdmin={getChangedTasksFromAdmin}
                />
            </div>
        )
    }
    
}



export default SortTable