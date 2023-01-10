var n=Math.random();
n*=6;
n+=1;
n=Math.floor(n);

var diceimg1="images/dice"+n+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", diceimg1 );



var m=Math.random();
m*=6;
m+=1;
m=Math.floor(m);

var diceimg2="images/dice"+m+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", diceimg2 );


if(n>m)
{
    document.querySelector("h1").innerHTML="Player 1 WINS";
}

else if(m>n)
{
    document.querySelector("h1").innerHTML="Player 2 WINS";
}

else
{
    document.querySelector("h1").innerHTML="Draw";
}