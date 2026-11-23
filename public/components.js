class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML =  `
        <style>
        div{
            font-family: "Roboto Mono", Monospace;
            width:100%;
            display:block;
            justify-content:center;
            ul {
                list-style-type: none;
                padding: 10px 0px;

                overflow:hidden;
                background-color: #4e8f4c;
                li {
                    :hover {
                        background-color: #373;
                    }
                    float:left;
                    a{
                        margin: 14px 0px;
                        padding: 14px 16px;
                        color:#114f70;
                        text-decoration: none;
                    }
                    a:hover{
                        color:#114f00
                    }
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
