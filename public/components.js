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
                display:inline-grid;
                grid-auto-flow:column;
                grid-auto-columns:1fr;
                list-style-type: none;
                max-width:80%;
                padding: 0;
                margin:0;
                background-color: #4e8f4cff;

                li {
                    flex-grow:1;
                    text-align:center;
                    padding:10px 15px;
                    align-items:center;
                    a{
                        color:#114f70;
                        text-align: center;
                        text-decoration: none;
                    }
                    a:hover{
                        color:#114f00
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
