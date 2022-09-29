
  var rand1=(Math.random() * 6)+1;
rand1=Math.floor(rand1);
  var rand2=(Math.random() * 6)+1;
  rand2=Math.floor(rand2);
  document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");
  if(rand1>rand2)
  document.querySelector("h1").innerText="Player1 wins";
  else if(rand1===rand2)
  document.querySelector("h1").innerText="Tie";
  else
  document.querySelector("h1").innerText="Player2 wins";
