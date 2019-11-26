import React from "react";
 import axios from 'axios';
import MyBarChart from './Charts';


 
class Paginations extends React.Component {
    constructor() {
      super();
      this.state = {
          posts:[],
       
        currentPage: 1,
        todosPerPage: 10
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount()
    {
       
     axios.get(`http://localhost:5003/student1`)
     .then(res=>{
         console.log(res.data)
      
         this.setState({posts:res.data})
     })
     
   }
  
    handleClick(event) {
    
      this.setState({
        currentPage: Number(event.target.id)
      });
    
    }
  
    render() {
      const { posts, currentPage, todosPerPage } = this.state;

  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      console.log(indexOfLastTodo)
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      console.log(indexOfFirstTodo)
      const currentTodos = posts.slice(indexOfFirstTodo, indexOfLastTodo);
      console.log(currentTodos)


  
 let renderTodos= (currentTodos).map((data, index) => {

        // return <li key={index}>{todo}</li>;
        // console.log(index,todo)
       return( 
         
        <tbody key={index} >
            <tr >
                {/* <td>{data.Employee_Id}</td>
                <td>{data.Employee_Name}</td>
                <td>{data.Address_Line1}</td>
                <td>{data.Address_Line2}</td>
                <td>{data.City}</td>
                <td>{data.State}</td>
                <td>{data.Country_ID}</td>
                <td>{data.Department_Id}</td>
                <td>{data.Location_Id}</td> */}
                <td>{data.x}</td>
                <td>{data.y}</td>
            </tr>
        </tbody>
      )});
      
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(posts.length / todosPerPage); i++) 
      {
        pageNumbers.push(i);
       
      }
      
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          {/* {/* <ul>
            {renderTodos}
          </ul> */}
       
       <MyBarChart data={currentTodos}/>
      <table  >
              <thead >
                <tr>
                <th>Employee_Id</th>
                <th>Location_Id</th>
                  {/* <th>Employee_Id</th>
                  <th>Employee_Name</th>
                  <th>Address_Line1</th>
                  <th>Address_Line2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country_ID</th>
                  <th>Department_Id</th>
                  <th>Location_Id</th> */}
                </tr>
              </thead>
            {renderTodos}
         </table>
         <ul id="page-numbers">
            {renderPageNumbers}
          </ul> 
          
          
        </div>
      );
    }
  }

  export default Paginations