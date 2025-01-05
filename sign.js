
/*
    anpang54/under-construction
    Version 1.1
    MIT license
*/

document.head.innerHTML += `
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
        #under-construction-sign{
            display: inline-block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(15deg);
            background-color: #fc0;
            font-size: 40px;
            font-family: "Roboto Mono";
            color: black;
            padding: 50px;
            border: 10px solid #f70;
            z-index: 10020;
        }
        #under-construction-blocker{
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 10010;
        }
    </style>
`;

document.body.innerHTML += `
    <div id="under-construction-sign">UNDER&nbsp;CONSTRUCTION</div>
    <div id="under-construction-blocker"></div>
`;
