import {Router } from "express";
const router =Router ();

let users =[
    {   
    id :"1",
    name:"jair",
    address:"aña",
    age:"21",
   }
]

//post
router.post('/users/create',(req,res)=>{
    //BODY
    users.push(req.body);
    res.send("OK");
});



router.get('/users',(req,res)=>{
    res.status(200).json(users);       
});

//put
router.put('/users/update/:id',(req,res)=>{
    const user =users .find (u =>u.id === req.params.id);
    if(!user){
        res.status(404).send("EL RECURSO NO SE ENCUENTRA!!!");
        return ;
    }
    const updateUser = {...user,...req.body}
    users =users.map(u=>u.id === req.params.id ? updateUser : u);
    res.status(200).send("USUARIO ACUTUALIZADO CON EXITO!!");

});

export default router;