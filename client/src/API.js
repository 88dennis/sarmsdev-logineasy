import axios from "axios";

export default {

getUsers: async ()=>{
        console.log("API......");
        return await axios.get('/api')
                .then(res => {
                    return res
                }).catch(err => {
                    return err
                });
    }, 

getRecordByID: async (id) =>{
    return await axios.get('/api/' +id)
                .then(res => {
                    return res
                }).catch(err => {
                    return err
                });
},


createUser: async (data)=>{
        console.log("API......");
        return await axios.post('/api', data)
                .then(res => {
                    return res
                }).catch(err => {
                    return err
                });
    },

    editRecordAPI: async (data, id)=>{
        console.log("API......");
        return await axios.put('/api/'+id, data)
                .then(res => {
                    return res
                }).catch(err => {
                    return err
                });
    },

    deleteRecordAPI: async (id) => {
        return await axios.delete('/api/'+id)
                .then(res => {
                    return res
                }).catch(err => {
                    return err
                });
    }
    //CRUD


    //create
    // createEmployee: async (employee)=> {
    //     return await fetch('/employee', 
    //         {
    //             method:'post', 
    //             body: JSON.stringify(employee),
    //             //we let the server know that we are sending back json using headers
    //             headers: {
    //                 "Content-Type" : "application/json"
    //             }
    //         }
    //     )
    //     .then(res => res.json())
    //     .then(data => data);
    // },  
    
    // //read
    // getUsers: ()=>{

    //     console.log("API......")
    //     // return await axios.get('/api')
    //     //         .then(res => res.json())
    //     //         .then(data => data);
    // },

    // //update
    // updateEmployee: async (employee)=> {
    //     console.log(employee, "UPDATEEMP")
    //     return await fetch('/employee/update/'+ employee._id, 
    //         {
    //             method:'POST', 
    //             body: JSON.stringify(employee),
    //             headers : { 
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //                }
    //         }
    //     ).then(res => res.json()).then(data => {
    //         console.log(data)
    //         return data;
    //     });
    // },

    // //delete
    // deleteEmployee: async (_id) => {
    //     console.log(_id, "FROM EMPLOYEE API")
    //    return await fetch('/employee/' + _id, {
    //         method: 'DELETE',
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //            }
    //     }).then( res => {
    //         console.log(res, "FROM EMPOYEE API")
    //         return res.json()
    //     }).then(data => {
    //             console.log(data, "FROM EMPOYEE API")
    //             return data;
    //         });
    // },
}

