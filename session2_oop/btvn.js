export class Studens{
    lop;
    ten;
    tuoi;
    que;

    constructor(lop,ten,tuoi,que){
        this.lop=lop;
        this.ten=ten;
        this.tuoi=tuoi;
        this.que=que;
    }
    toHtml(){
        return `<tr>
                    <td>${this.lop}</td>
                    <td>${this.ten}</td>
                    <td>${this.tuoi}</td>
                    <td>${this.que}</td>
                </tr>`
    }
    
    
}
 export class ListStudent{
    listStudent;
    constructor(){
        this.listStudent=[]
    }
    addStudent(student){
        this.listStudent.push(student);
    }
    timTuoi15(){
        return this.listStudent.filter(function(a){
            return a.tuoi===15
        })
    }
    timHN(){
        return this.listStudent.filter(function(b){
            return (b.tuoi===18 && b.que==="HN")
        })
    }
    timTen(name){
        return this.listStudent.filter(function(c){
            return c.ten.toLowerCase().includes(name.toLowerCase())
        })
    }
    show(){
        for(let i=0;i<this.listStudent.length;i++){
            document.querySelector('#table').innerHTML+=this.listStudent[i].toHtml();
        }
    }
    
}
const std1= new Studens("A","Nam",18,"HN")
const std2= new Studens("A","Quan",15,"HN")
const std3= new Studens("B","Nga",18,"LS")
const std4=new Studens("D","hgll",20,"th")
const list=new ListStudent()
list.addStudent(std1)
list.addStudent(std2)
list.addStudent(std3)
list.addStudent(std4)
console.log(list.timTuoi15());
console.log(list.timHN());
console.log(list.timTen("Nam"));
list.show()