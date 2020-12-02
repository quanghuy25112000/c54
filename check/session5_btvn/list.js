const style=`<style>

.card{
    font-size:1.5rem;
    font-family: sans-serif;
    boder: 1px solid #dbdbdb;

}
.ten, .thongtin{
    text-align:center;
}
.img{
    width: 400px;
    height:300px;
}
.body{
    boder: 1px solid #dbdbdb;
    padding:20px;
}
</style>`
 class Students{
    ten;
    tuoi;
    que;
    img;
    constructor(ten,tuoi,que,img){
        this.ten=ten;
        this.tuoi=tuoi;
        this.que=que;
        this.img=img;
    }
    toHtml(){
        return `<card-container ten="${this.ten}" imgsrc="${this.img}" que="${this.que}" tuoi=${this.tuoi}></card-container>`
    }
}
 class ListStudent{
    list;
    constructor(){
        this.list=[]
    }
    addStudent(student){
        this.list.push(student)
    }
    show(){
        for(let i=0;i<this.list.length;i++){
            document.querySelector('.container').innerHTML+=this.list[i].toHtml()
        }
    }
}
 class Card extends HTMLElement{
    constructor(){
        super();
        this._shadowDom=this.attachShadow({mode:'open'});
        this.ten=this.getAttribute('ten')
        this.tuoi=this.getAttribute('tuoi')
        this.que=this.getAttribute('que')
        this.imgsrc=this.getAttribute('imgsrc')
        this._shadowDom.innerHTML=`
        ${style}
        <div class="card">
        <img class="img" src="${this.imgsrc}">
            <div class="body">
            <div class="ten">${this.ten}</div>
            <div class="thongtin">${this.tuoi} tuổi sống ở ${this.que}</div>
            </div>
        </div>`
    }
}
import {getData,getDatas} from './ultis.js'






const list =new ListStudent()
async function getMany(){
    const res =await firebase.firestore().collection('user').get()
    const user=getDatas(res)
    for(let i=0;i<user.length;i++){
        const student=new Students(`${user[i].ten}`,user[i].tuoi,`${user[i].que}`,`${user[i].img}`)
        list.addStudent(student)
    }
    
    console.log(list);
    list.show()
    
}

getMany()
// const s1 =new Students("A",18,"ls","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2qu-15n-PLgoVmNth4LldtshxWe4A-WJrQ&usqp=CAU")
// list.addStudent(s1)
console.log(list);
window.customElements.define('card-container',Card)