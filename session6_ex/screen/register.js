const style=`<style>
.register-container{
    width:100vw;
    height:100vh;
    background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcuL_XB1sn7asiJsS-f9lhB0PCQnPpM3tsw&usqp=CAU');
    background-repeat: no-repeat;
    background-size:cover;
    display:flex;
    justify-content:flex-end;
}
#register-form{
    width:30%;
    background:#fff;
    height:100vh;
}
h1{
    text-align:center;
}
</style>
`
export class RegisterScreen extends HTMLElement{
    constructor(){
        super()
        this.shadowDom=this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.shadowDom.innerHTML=`
        ${style}
            <div class="register-container">
                <form id="register-form">
                    <h1>CI Project</h1>
                    <input-wrapper id="first-name" type="text" placeholder="first name"></input-wrapper>
                    <input-wrapper id="last-name" type="text" placeholder="last name"></input-wrapper>
                    <input-wrapper id="password" type="password" placeholder="password"></input-wrapper>
                    <input-wrapper id="confim-password" type="password" placeholder="confim password"></input-wrapper>
                    <button id="button">Đăng ký</button>
                    </form>
            </div>
        `
        const registerForm=this.shadowDom.getElementById("register-form");
        registerForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            alert("Đăng ký thành công")
            
            const fullname=`${this.shadowDom.getElementById('first-name').value} ${this.shadowDom.getElementById('last-name').value}`
            const data={
                 
                name: fullname,
                pass:this.shadowDom.getElementById('password').value
            }
            firebase.firestore().collection('user').add(data);
            
            
        })
    }
    // updateData(){
    //     const docId=`s7WS16IXQP5utYCWoGbt`
    //    // const data={
    //    //     name: `${this.shadowDom.getElementById('first-name').value} + ${this.shadowDom.getElementById('last-name')}`
    //    // }
    //    // firebase.firestore().collection('user').doc(docId).update(data);
    //    console.log(this.shadowDom.getElementById('last-name'))
    // }
}


window.customElements.define('register-screen',RegisterScreen)