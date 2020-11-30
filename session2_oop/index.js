// class Animal{
//     species;
//     color;
//     number;
//     name;

//     constructor(species,color,number,name){
//         this.species=species;
//         this.color=color;
//         this.number=number;
//         this.name=name;
//     }
//     eat(){
//         console.log(`con +${this.name}+ dang an`);
//     }
//     speak(){
//         console.log(`con +${this.name}+ dang keu`);
//     }
//     isDangerous(){
//         console.log((this.number>4)?`yes`:`no`);
//     }
// }
// class Fly extends Animal{
//     constructor(species,color,number,name){
//         super(species,color,number,name)
//     }
//     speak(){
//         console.log("gau gau");
//     }
// }
// const fly=new Fly(`con trung`,`xanh`,12,`ruoi`)
// console.log(fly.speak());














class User{
    name;
    age;
    img;
    constructor(name,age,img){
        this.name=name;
        this.age=age;
        this.img=img
    }
    update(name,age,img){
        this.name=name;
        this.age=age;
        this.img=img
    }
    toHtml(){
        return `
            <div class="user-container">
                <div class="previous">
                <
                </div>
                <img src="${this.img}"/>
                <div class="info">
                    ${this.name}
                    ${this.age}
                </div>
                <div class="next">
                >
                </div>
            </div>
        `
    }
}
class UserCollection{
    listUser;
    current;
    constructor(){
        this.listUser=[]
    }
    addUser(user){
        this.listUser.push(user)
        this.current=0
    }
    removeUser(index){
        this.listUser.splice(index,1)
    }
    show(){
        document.querySelector('#app').innerHTML=this.listUser[0].toHtml()
        this.listenUserClick()
    }
    previous(){
        if(this.current>0){
            this.current--
            document.querySelector('#app').innerHTML=this.listUser[this.current].toHtml()
            this.listenUserClick()
        }
    }
    next(){
        if(this.current<this.listUser.length-1){
            this.current++
            document.querySelector('#app').innerHTML=this.listUser[this.current].toHtml()
            this.listenUserClick()
        }
    }
    listenUserClick(){
        document.querySelector('.previous').addEventListener('click',()=>{
            userCollection.previous()
        })
        document.querySelector('.next').addEventListener('click',()=>{
            userCollection.next()
        })
    }
    
}
const userCollection=new UserCollection();
const user1=new User("Huy",20,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRZMGhQ9SjBnvYlmlFvzxPPqJK1_f4Q16DA&usqp=CAU")
const user2=new User("Mai",20,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRZMGhQ9SjBnvYlmlFvzxPPqJK1_f4Q16DA&usqp=CAU")
userCollection.addUser(user1);
userCollection.addUser(user2);
console.log(userCollection.listUser[0]);
userCollection.show();
import{Studens} from './btvn.js'
import{ListStudent} from './btvn.js'
const list=new ListStudent();
list.addStudent("a","huy",20,"ls")
console.log(list);

