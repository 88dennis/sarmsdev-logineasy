const express = require('express');
const router = express.Router();
const User = require('../model/index');

router.post('/', async (req, res)=>{
    console.log(req.body)
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    await user.save().then((data)=>{
    console.log(data, "SAVED SUCCESSFULLY")
        return res.json({
            data,
            message: {
                msgBody: "Successfully Saved User",
                msgError: false,
                errorMsg: null
            }
         });

}).catch((err)=>{
    console.log(err, "ERROR FROM SAVE");
    return res.status(500).json({
        message: {
            msgBody: "Not Saved",
            msgError: true,
            errorMsg: err
        }
    });
});

    // await user.save((err, data)=>{
    //         if(err) {
    //         console.log(err, "ERROR FROM SAVE");
    //         return res.status(500).json({
    //             data,
    //             message: {
    //                 msgBody: "Not Saved",
    //                 msgError: true,
    //                 errorMsg: err
    //             }
    //         });
    //     } else {
    //         console.log("SAVED SUCCESSFULLY")
    //         return res.json({
    //             data,
    //             message: {
    //                 msgBody: "Successfully Saved User",
    //                 msgError: false,
    //                 errorMsg: null
    //             }
    //          });
    //     } 
    // })
})
router.get('/', async (req, res)=> {
    console.log("Get User Route Endpoint");
    await User.find({}).then((data)=>{
        console.log("NO ERROR FROM GEY USER");
        return res.json({
            data,
            message: {
                msgBody: "Successfully Fetched User",
                msgError: false,
                errorMsg: null
            }
         });
    }).catch((error)=>{
        return res.status(500).json({
            message: {
                msgBody: "No Users",
                msgError: true,
                errorMsg: error
            }
        });
    }); 

    // await User.find({}, (err, data)=> {
    //     if(err) {
    //         console.log(err, "ERROR FROM GET");
    //         return res.status(500).json({
    //             data,
    //             message: {
    //                 msgBody: "No Users",
    //                 msgError: true,
    //                 errorMsg: err
    //             }
    //         });
    //     } else {
    //         console.log("NO ERROR FROM GEY USER")
    //         return res.json({
    //             data,
    //             message: {
    //                 msgBody: "Successfully Fetched User",
    //                 msgError: false,
    //                 errorMsg: null
    //             }
    //          });
    //     } 
    // });
});

router.get('/:id', async (req, res)=> {
    console.log("GET USER BY ID");
    await User.findById(req.params.id, (err, data)=> {
        if(err) {
            console.log(err, "ERROR FROM GET");
            return res.status(500).json({
                data,
                message: {
                    msgBody: "No User With this ID",
                    msgError: true,
                    errorMsg: err
                }
            });
        } else {
            console.log("NO ERROR FROM GET USER")
            return res.json({
                data,
                message: {
                    msgBody: "Successfully Fetched User Using This ID",
                    msgError: false,
                    errorMsg: null
                }
             });
        }
    });
});

router.put('/:id', async (req,res)=> {
    //THE {new:true} WILL RESPONSE A DATA THAT IS UPDATED
    await User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data)=> {
        if(err) {
            console.log(err, "ERROR FROM GET");
            return res.status(500).json({
                data,
                message: {
                    msgBody: "No Users",
                    msgError: true,
                    errorMsg: err
                }
            });
        } else {
            console.log(data, "NO ERROR FROM UPDATE")
            return res.json({
                data,
                message: {
                    msgBody: "Successfully Updated User",
                    msgError: false,
                    errorMsg: null
                }
             });
        } 
    });

    // await User.findByIdAndUpdate(req.params.id, req.body)
    // .then((data)=>{
    //     return res.json({
    //         data,
    //         message: {
    //             msgBody: "Successfully Updated",
    //             msgError: false,
    //             errorMsg: null
    //         }
    //      });
    // })
    // .catch((error)=>{
    //     console.log(error, "ERROR FROM DELETE");
    //     return res.status(500).json({
    //         message: {
    //             msgBody: "No User With this ID",
    //             msgError: true,
    //             errorMsg: error
    //         }
    //     });
    // })
})

router.delete('/:id', async (req, res)=>{
    await User.findByIdAndDelete(req.params.id)
        .then((data)=>{
            return res.json({
                data,
                message: {
                    msgBody: "Successfully Deleted",
                    msgError: false,
                    errorMsg: null
                }
             });
        })
        .catch((error)=>{
            console.log(error, "ERROR FROM DELETE");
            return res.status(500).json({
                message: {
                    msgBody: "No User With this ID",
                    msgError: true,
                    errorMsg: error
                }
            });
        })
})

module.exports = router;