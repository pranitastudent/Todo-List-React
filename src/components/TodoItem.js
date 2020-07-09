    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    
    export class TodoItem extends Component {
        getStyle = () =>{
          return  {
              background: '#f4f4f4',
              padding: '10px',
              borderBottom: '1px #ccc dotted',
              textAlign: 'center',
              textDecoration: this.props.todo.completed ? 'line-through' : 'none'
          }
        // Longway of doing this 
        //    if(this.props.todo.completed){
        //        return{
        //            textDecoration: 'line-through'
        //        }

        //    } else {
        //        return {
        //            textDecoration: 'none'
        //        }
        //    }
        }

        markComplete = (e) =>{
            console.log(this.props)

        }

        render() {
            const { id, title } = this.props.todo;
            return (
                <div style={this.getStyle()}>
                   <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.id)}/>  
                    {title}
                    </p>
                </div>
            )
        }
    }

    //  PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4',
//     textAlign: 'center'
   
// }

export default TodoItem
    