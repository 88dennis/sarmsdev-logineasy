const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/index');
const path = require('path');
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get("*", (req, res)=>{
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
//     })
// }
const uri = process.env.mongodb || 'mongodb://localhost:27017/logineasy';
mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: false
},(err)=>{
    if(err){
        console.log('unable to connect to the database');
        process.exit(1);
    } else {
        console.log('connected to db');
    }
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    }

    app.use('/api', userRouter);


    if (process.env.NODE_ENV === 'production') {
        app.get('*', function(req,res){
            res.sendFile(path.join(__dirname + '/client/build/index.html'));
        });
        }

app.listen(port, ()=>{
    console.log("connected to : " + port)
});