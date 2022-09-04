// import json file
let users = require("./../user.json");


module.exports.getAllUsers = (req,res,next)=>{
  const limit = parseInt(req.query.limit);
  let limitedUsers;
  if( limit ){
      limitedUsers = users.slice(0,limit)
  }
  else{
      limitedUsers = users;
  }
  res.send(limitedUsers)
}
module.exports.getUser = (req,res,next)=>{
    const keys = Object.keys(users);
    const randIndex = Math.floor(Math.random() * keys.length);
    const randKey = keys[randIndex];
    const name = users[randKey];
    res.send(name);
}

module.exports.saveAUser=(req,res)=>{
  const {id, name, gender, contact, address,photoUrl} = req.body;
  
  if(id &&  name &&  gender &&  contact &&  address && photoUrl){
      users.push(req.body)
      res.send(users)
  }
  else{
      res.send('Please provide all the required sections')
  }
}

module.exports.updateUser =(req,res)=>{
  const {_id} = req.params;
  const {id, name, gender, contact, address,photoUrl} = req.body;
  const updatedUser = users.find(user => Number(user.id)=== Number(_id));
  if(updatedUser){
      if(id){
          updatedUser.id =id;
      }
      if(name){
          updatedUser.name = name;
      }
      if(gender){
          updatedUser.gender = gender;
      }
      if(contact){
          updatedUser.contact = contact;
      }
      if(address){
          updatedUser.address = address;
      }
      if(photoUrl){
          updatedUser.photoUrl = photoUrl;
      }

      res.send(users)
  }
  else{
      res.send("No user Found!")
  }
}
module.exports.bulkUpdateUser =(req,res)=>{
  const updateReq= req.body;
  let updatedUser;
  updateReq.map(ur=>{
    updatedUser = users.find(user => Number(user.id)=== Number(ur.id))
    if(updatedUser){
      if(ur.id){
          updatedUser.id =ur.id;
      }
      if(ur.name){
          updatedUser.name = ur.name;
      }
      if(ur.gender){
          updatedUser.gender = ur.gender;
      }
      if(ur.contact){
          updatedUser.contact = ur.contact;
      }
      if(ur.address){
          updatedUser.address = ur.address;
      }
      if(ur.photoUrl){
          updatedUser.photoUrl = ur.photoUrl;
      }
  }
  else{
      console.log("No User Found")
  }

  })

  res.send(users)
}

module.exports.deleteUser=(req,res)=>{
  const {_id} = req.params;
  const findUser = users.find(user => Number(user.id)=== Number(_id));
  if(findUser){
      users = users.filter(user =>user.id !== Number(_id));
      res.send(users);
  }
  else{
      res.send("No User Found")
  }

}
