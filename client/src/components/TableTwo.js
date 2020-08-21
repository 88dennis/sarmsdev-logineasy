import React from 'react'

function TableTwo(props) {
    console.log(props.users);
    return (
        <>
        <div className="col s12 tableCenter">
             <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.users.map( (user) => {
            return (
              <tr key= {user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td> <button onClick={(e)=>props.editRecord(e, user._id)} className="btn waves-effect waves-light" type="submit" name="action">
                        <i className="material-icons">edit</i>
                      </button></td>
                                <td> <button onClick={(e)=>props.deleteRecord(e, user._id)} className="btn waves-effect waves-light findbtn" type="submit" name="action">
                        <i className="material-icons">delete</i>
                      </button></td>
                      </tr>
            )
          })}
       
        
        </tbody>
      </table>
      </div>
        </>
    )
}

export default TableTwo
