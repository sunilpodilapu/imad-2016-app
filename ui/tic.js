var a=0;var b=0;var c=0;var d=0;var e=0;var f=0;var g=0;var h=0;var i=0;
var whose_move=1;
var temp='';
var ok=0;
var who_won=0;
var count_player1_wins=0;
var count_player2_wins=0;
var count_ties=0;
function move(c)
{
temp=c;
 ok=0;
if(whose_move==1)
{
    check_space();
	if(ok==1)
	{	document.getElementById(c).src="/ui/rose2.png";
	whose_move=2;
	process();
    }
	else
	{
	alert("the square is already occupied:please choose another square");
	}
}
else
{
check_space();
            if(ok==1)	{
			document.getElementById(c).src="/ui/jamine2.png";
           whose_move=1;
		   process();
		   }
		   else
		   {
		   alert("the square is already occupied:please choose another square");
			}
}
}
function check_space()
{
      if((temp=='A') && (a===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  a=1;
	  if(whose_move==2)
	  a=2;
	  }
	   if((temp=='B') && (b===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  b=1;
	  if(whose_move==2)
	  b=2;
	  }
	   if((temp=='C') && (c===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  c=1;
	  if(whose_move==2)
	  c=2;
	  }
	   if((temp=='D') && (d===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  d=1;
	  if(whose_move==2)
	  d=2;
	  }
	   if((temp=='E') && (e===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  e=1;
	  if(whose_move==2)
	  e=2;
	  }
	   if((temp=='F') && (f===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  f=1;
	  if(whose_move==2)
	  f=2;
	  }
	   if((temp=='G') && (g===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  g=1;
	  if(whose_move==2)
	  g=2;
	  }
	   if((temp=='H') && (h===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  h=1;
	   if(whose_move==2)
	  h=2;
	  }
	  if((temp=='I') && (i===0))
	  {
	  ok=1;
	  if(whose_move==1)
	  i=1;
	  if(whose_move==2)
	  i=2;
	  }
}
function process()
{
  check_win();
  if(who_won==1)
  {
  alert("player1 won:");
  count_player1_wins++; document.getElementById("player1").value=count_player1_wins;
  }
   if(who_won==2)
  {
  alert("player2 won:");
  count_player2_wins++;
document.getElementById("player2").value=count_player2_wins;
  }
   if(who_won==3)
  {
  alert("there is tie");
  count_ties++;
document.getElementById("ties").value=count_ties;
  }
}
function check_win()
{
 if(a==1 && b==1 && c==1)
  who_won=1;
  if(a==1 && d==1 && g==1)
  who_won=1;
 if(c==1 && f==1 && i==1)
  who_won=1;
  if(a==1 && e==1 && i==1)
  who_won=1;
   if(b==1 && e==1 && h==1)
  who_won=1;
   if(c==1 && e==1 && g==1)
  who_won=1;
   if(d==1 && e==1 && f==1)
  who_won=1;
   if(g==1 && h==1 && i==1)
  who_won=1;
   if(a==2 && b==2 && c==2)
  who_won=2;
   if(a==2 && d==2 && g==2)
  who_won=2;
   if(c==2 && f==2 && i==2)
  who_won=2;
   if(a==2 && e==2 && i==2)
  who_won=2;
   if(b==2 && e==2 && h==2)
  who_won=2;
   if(c==2 && e==2 && g==2)
  who_won=2;
   if(d==2 && e==2 && f==2)
  who_won=2;
  if(g==2 && h==2 && i==2)
  who_won=2;
  if ((a!=0) && (b!=0) && (c!=0 )&& (d!=0) && (e!=0) && (f!=0) && (g!=0) && (h!=0) && (i!=0) && (who_won==0))
  who_won=3;
  }
  function playagain()
  {
   whose_move=1;
   ok=0;
   temp='';
   who_won=0;
   a=0;b=0;c=0;d=0;e=0;f=0;g=0;h=0;i=0;
   document.getElementById('A').src="/ui/mountain.png"
     document.getElementById('B').src="/ui/mountain.png"
	   document.getElementById('C').src="/ui/mountain.png"
  document.getElementById('D').src="/ui/mountain.png"
    document.getElementById('E').src="/ui/mountain.png"
	  document.getElementById('F').src="/ui/mountain.png"
  document.getElementById('G').src="/ui/mountain.png"
    document.getElementById('H').src="/ui/mountain.png"
	  document.getElementById('I').src="/ui/mountain.png"
	  }
	function help()
	{
	alert("welcome to tic-tac-toe.player1 plays as rose's and player2 plays as jasmine's .select the variable you want to click by clicking it.you cannot occpy a square that is already occupied.the plays who gets three variables in  a row wins")
	}