//read one
import {getData,getDatas} from './ultis.js'



getMany()
async function getOneDocument() {
    //promise
    // firebase.firestore().collection('user').doc('9EzkUgCzfxVU8GU0IVEo').get().then(res=>{
    //     console.log(res);
    // })
//    console.log(res);


    //async await
    const res= await firebase.firestore().collection('user').doc('9EzkUgCzfxVU8GU0IVEo').get() 
    const user=res.data();
    user.id=res.id
    console.log(user);
}

//get many document
async function getMany(){
    const res =await firebase.firestore().collection('user').get()
    const user=getDatas(res)
   
    console.log(user);
}