const style=`<style>
.card{
    font-size:1.5rem;
    font-family: sans-serif;
    boder: 1px solid #dbdbdb;

}
.title, .description{
    text-align: center;
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
class CardComponent extends HTMLElement{
    constructor(){
        super()
        //khai bao shadow_dom
        this._shadowDom=this.attachShadow({mode:'open'});
        this.imgsrc=this.getAttribute('imgsrc')
        this.title=this.getAttribute('title')
        this._shadowDom.innerHTML=`
        ${style}
        <div class="card">
        <img class="img" src="${this.imgsrc}">
            <div class="body">
            <div class="title">${this.title}</div>
            <div class="description">discription</div>
            </div>
        </div>`
    }

}
window.customElements.define('card-container',CardComponent)
