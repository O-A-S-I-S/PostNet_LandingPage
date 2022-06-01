class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <header class="header">
        <nav class="flex flex-jc-sb flex-ai-c">
          <a href="/index.html" class="header__logo">
            <img src="images/logo_transparent.png" alt="PostNet">
        
          <div class="header___links ">
            <a href="./index.html">Home</a> <a href="#aboutUs">About us</a> 
          </div>
        
          <a href="#contactUs" class="button header__cta" >Contact us</a>
        </nav>
        </header>
        `
    }
}
customElements.define('my-header',MyHeader)