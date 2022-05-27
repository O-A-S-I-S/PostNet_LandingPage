
class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer class="footer">

        <a class="footer__logo" href="#">
        <img src="/images/logo_transparent.png" />
        </a>

        <div class="footer__cta" style = "position:relative;  top:-130px;right:29px;">
        <a href="#" class="button" >Contact us</a>
        </div>

        <div class="footer__copyright"style = "position:relative;  top:-100px;right:29px;">
        &copy;PostNet by O.A.S.I.S. All Rights Reserved
        </div>


        </footer>

        `
    }
}
customElements.define('my-footer',MyFooter)
