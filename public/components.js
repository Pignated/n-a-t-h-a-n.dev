class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML =  `
        <style>
        div{
            font-family: "Roboto Mono", Monospace;
            width:100%;
            display:flex;
            justify-content:center;
            ul {
                list-style-type: none;
                max-width:80%;
                padding: 0;
                margin:0;
                overflow:hidden;
                background-color: #4e8f4cff;
                display:flex;
                justify-content:center;
                li {
                display:inline-block;
                    a{
                        display:block;
                        color:#114f70;
                        text-align: center;
                        padding: 14px 16px;
                        text-decoration: none;
                    }
                    a:hover{
                        color:magenta
                    }
                }
                li + li {
                border-left: 1px solid darkslategray;
                }
            }
        }
        .title_link{
            color:white;
            text-decoration: none;
        }
        </style>
                    <div style="text-align: center;">
                <h1>
                    <a href="/index.html" class="title_link">Nathan Cobb's Personal Website</a>
                </h1>
            </div>
        <div class="nav-bar">
            <ul>
            <li><a href="index.html">Home Page</a></li>
            <li><a href="homelab.html"  >Homelab</a></li>
            </ul>
        </div>
        `;
    }
}
customElements.define('nav-bar',NavBar)