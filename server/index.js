
const express =require('express');
const bodyParser=require('body-parser')
const app=express();
const cors =require('cors');
const mysql=require('mysql');
var session = require('express-session');
const cookieParser = require("cookie-parser");
const { generateOTP } = require('./Services/otp');
const nodemailer=require("nodemailer")

const sequelize=require('./Database');
// const Product=require('./Product');
const Product=require('./Product');
const User=require('./User');
const { response } = require('express');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:"root",
    database:'cruddatabase'
});

app.use(session({
    resave:false,
	  secret: 'secret',
	  saveUninitialized: false,
    cookie:{
        maxAge:1000*60*60,
        sameSite:"lax",
        secure:false,
    },
})
);
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}));
app.use(cookieParser())
 

//session middleware


// app.post("/api/inserttt",(req,res)=>{
// console.log("Hello im inside server");

//     const username=req.body.Username;
  
//     const password=req.body.Password;
//     const sqlInsert="SELECT * FROM cruddatabase WHERE username = ? AND password = ?";
//     db.query(sqlInsert,[username,password],(err,result)=>{
//         console.log(result);
//     });
//    res.end();
// })
var sess;
app.post("/",(req,res)=>{

    console.log(req.body);
    
       const username=req.body.Username;
          
       const password=req.body.Password;
           
       console.log("jjjjjjjjjjjjjj");

      //  Product.create({
      //     title:'Shivanna  ',
      //     Price:'500',
      //     imageUrl:'www.Shivanna.com',

      //    }).then(res=>{
      //   console.log(res);
      //   console.log("created a product")
      //    }).catch(err=>{
      //     console.log(err,);
      //    })


      if(username && password ){

     
      User
      .findOne({
       where:{username:username,password:password}
      }).then(user=>{
        console.log(user);
         if(!user){
            console.log("hellloooooooo");
            res.send('Incorrect Username and/or Password!');
         }else{
          sess=req.session
          // console.log(sess.id);
          
          sess.username=username;
          sess.fisrtlog=true;
          sess.email=user.dataValues.email;
          // console.log(sess);
          // Redirect to home page
          // res.send({username:username});
          res.send({fisrtlog:true});
         }
         res.end();	
      })

        // const sqlInsert="SELECT * FROM cruddatabase.users WHERE username = ? AND password = ?";
        // db.query(sqlInsert,[username,password],(err,result)=>{
        //   //  if(err) throw error;
        //   //   console.log(result[0].email);
        //    if (result.length > 0) {
        //     // Authenticate the user
        //     // console.log(req.session.id);
        //     sess=req.session
        //     // console.log(sess.id);
            
        //     sess.username=username;
        //     sess.fisrtlog=true;
        //     sess.email=result[0].email;

        //     // console.log(sess);
        //     // Redirect to home page
        //     // res.send({username:username});
        //     res.send({fisrtlog:true});
            
            
        // } else {
        
        //     res.send('Incorrect Username and/or Password!');
           
        // }
        // res.end();	
        // });
        
      }else {
		res.send('Please enter Username and Password!');
		res.end();
	}    
    })

app.post('/getlogin',(req,res)=>{
   
   
   if(sess==undefined){
     res.status(200).send({loggedin:"false"});
 
   }else{
     res.status(200).send({loggedin:"true"});
   }
  
})

app.post('/getmail',(req,res)=>{
console.log("getmail")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'srlohith92@gmail.com',
      pass: 'mxvffmpbiyvivzco',
    }
  });

// console.log(req.body);
// console.log(sess.username);
// // console.log(sess.id);
// sess=req.session;
//  console.log(sess.username);

const expiretime =  new Date();
expiretime.setMinutes(expiretime.getMinutes()+2)
sess.expiretime=expiretime.getMinutes();
console.log(req.body.user);

const OTP= generateOTP();
// sess.OTP=OTP;
console.log(OTP,'-newgenerated');

User.update(
  {
    OTP:OTP
  },
  {
    where:{username:req.body.user}
  }
  )

// const sqlInsert="UPDATE cruddatabase.users SET OTP = ? WHERE (username = ?)";
// db.query(sqlInsert,[OTP,req.body.user],(err,res)=>{
  
//   //console.log(res);
// })
// sess.OTP=`${sess.username}${OTP}`;
// console.log(sess.OTP);

 //console.log(sess);
  let mailOptions={
    from:`${sess.email}`,
    to:`${sess.email}`,
    subject:"Testing",
    html:'<p style="font-size:1.1em">Hi,</p>'+
    '<p>Thank you for choosing our services. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>'+
    '<h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">'+req.body.user+OTP+'</h2>'
}

transporter.sendMail(mailOptions,function (error,info){
    if(error){
         console.log(error);
    } else {
        
        res.send({message:"OTP has been successfully sent to registered mail ID for this user"});
    }
})

});

app.post('/checkOTP', (req,res)=>{
    const currentime= new Date(); 
    // console.log("lllllllll     "+req.session.id);
   if(sess?.expiretime-currentime.getMinutes()){
     const userOTP=req.body.Otp;
    // console.log(req.body.user);
    // console.log("userotp "+userOTP);
    // console.log("sessotp "+sess.OTP);
  //  console.log(req.body)
    console.log(userOTP,req.body);
    const sqlInsert="SELECT * FROM cruddatabase.users WHERE (username = ?)";
    var otp;
    db.query(sqlInsert,[req.body.username],(err,result)=>{
      console.log(err,'-------------err');
      console.log(result);
      console.log(result[0].OTP);
      if(userOTP==result[0].OTP){
        console.log("lllllllllllllllllllllllll")
        sess.loggedin = true;
        res.send({Timein:true});
      }else{
          
          // delete sess.OTP;
      
          res.send({error:"Invalid OTP!!!",Timein:false});
      }  
      

    })
    // console.log(otp);
    
   }else{
    
    // console.log("hereeeeeeeeeeeee Time out")
    delete sess.OTP;
    res.send({Timein:false})
    res.end();
   }
         
 })

 app.post('/tabledata', (req,res)=>{
  Product.findAll().then(result=>{
    // console.log(result);
    res.send(result);
    
    }).catch(err=>{

    })
 })
 
 app.post('/Updatetable', (req,res)=>{
  console.log(req.body);
  Product.update(
    req.body,
    {
      where: { id: req.body.id },
    }
  ).then(result=>{
    res.send({updated:true});
  })

 })

app.post('/logout', (req,res)=>{
    console.log("hhhhhhhhhhhhhhhhhh")
    sess=null;
   console.log(sess);
   //

 })

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})

// Product.belongsTo(User,{constraints:true, onDelete:'CASCADE'});
// User.hasMany(Product);

sequelize.sync()
.then(result=>{
  // console.log(result);
  
const PORT=8000;
app.listen(PORT,()=>{
    console.log("server is listening in 8000")
})
})
.catch(err=>{
  console.log(err);
})






// const PORT=8000;
// app.listen(PORT,()=>{
//     console.log("server is listening in 8000")
// })