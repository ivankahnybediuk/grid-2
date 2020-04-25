// React Template

// ================================================ JSX ==========================================================

let myTitle = <h1>Hello React!</h1>;
let ul=<ul className="ul">UL
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
let img=<img src="images/omg2.jpg"></img>
let parargaph= <p>Paragraph</p>
function plus(x,y) {
    return x+y
}
let func = <p>
    2+3={plus(2,3)}
</p>
let inp= <input type="text"></input>


// Маємо скласти все в купу і можна виводити в HTML
let page = <div>
    {myTitle}
    {ul}
    {img}
    {parargaph}
    {func}
    {inp}
    </div>;

// ================================================ Render ==========================================================

ReactDOM.render(page, document.getElementById("root"));
