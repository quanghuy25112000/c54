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

class Studens{
    anh;
    ten;
    tuoi;
    que;

    constructor(ten,tuoi,que,anh){
        
        this.ten=ten;
        this.tuoi=tuoi;
        this.que=que;
        this.anh=anh;
    }
    toHtml(){
        return `<card-container ten="${this.ten}" imgsrc="${this.anh}" que="${this.que}" tuoi=${this.tuoi}></card-container>`
    }
    
    
}
class ListStudent{
    listStudent;
    constructor(){
        this.listStudent=[]
    }
    addStudent(student){
        this.listStudent.push(student);
    }
    show(){
        for(let i=0;i<this.listStudent.length;i++){
            document.querySelector('.container').innerHTML+=this.listStudent[i].toHtml();
        }
    }
    
}
class Card extends HTMLElement{
    constructor(){
        super();
        this._shadowDom=this.attachShadow({mode:'open'});
        this.imgsrc=this.getAttribute('imgsrc')
        this.ten=this.getAttribute('ten')
        this.que=this.getAttribute('que')
        this.tuoi=this.getAttribute('tuoi')
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
const s1 =new Studens("A",18,"ls","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2qu-15n-PLgoVmNth4LldtshxWe4A-WJrQ&usqp=CAU")
const s2=new Studens("B",20,"HN","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZL9iZYWym5YB_yyvqGMS9VnFILab59UjBw&usqp=CAU")
const s3=new Studens("C",19,"HN","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRur45y-eGvRMyLUdxep-LZ62HQsKxSdOheVg&usqp=CAU")
const list =new ListStudent();
list.addStudent(s1);
list.addStudent(s2);
list.addStudent(s3)
console.log(list);
list.show();
window.customElements.define('card-container',Card)