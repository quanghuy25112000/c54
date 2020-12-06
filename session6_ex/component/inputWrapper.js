export class InputWrapper extends HTMLElement{
    constructor(){
        super()
        this.shadowDom=this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.type=this.getAttribute('type')
        this.placeholder=this.getAttribute('placeholder')
        this.error=this.getAttribute('error') || ''
        this.shadowDom.innerHTML=`
            <div class="input-wrapper">
                <input id="input-main" type="${this.type}"  placeholder="${this.placeholder}">
                
                <div class="error">${this.error}</div>
            </div>
        `
    }
    getValue(){
        const value=this.shadowDom.getElementById("input-main").value
        return value
    }
    get value(){
        const value=this.shadowDom.getElementById("input-main").value
        return value
    }
    
}
window.customElements.define('input-wrapper',InputWrapper)