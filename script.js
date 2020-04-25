let grid=
<div className="grid">
<div className="grid__big">
    <p className="date">november 8, 2015</p>
    <h1>Fantastic Designs Of 2015
Concept Cars</h1>
</div>

<div className="grid__element">
    <img src="img/2.png"></img>
    <p className="date">november 24, 2015</p>
    <p className="topic">
        How To Find Design 
Inspiration In The Simple 
Things Around You
</p>
<div className="author"></div>
</div>

<div className="grid__element">
<img src="img/3.png"></img>
<p className="date">november 18, 2015</p>
<p className="topic">
    The Only Guide To 
Choosing Website 
Photos You’ll Ever Need
</p>
<div className="author"></div>
</div>

<div className="grid__element">
<img src="img/4.png"></img>
<p className="date">november 13, 2015</p>
<p className="topic">
Growth Hack Your Way 
to a Successful 
Freelance Career
</p>
<div className="author"></div>
</div>

<div className="grid__element">
<img src="img/5.png"></img>
<p className="date">november 8, 2015</p>
<p className="topic">
Get 80% Off DSLR 
Photography Course 
Bundle
</p>
<div className="author"></div>
</div>
</div>
// ======================page===============================

let page=
<div className="container">
{grid}
</div>
// =======================DOM===============================

ReactDOM.render(page, document.getElementById("root"));
