function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GdDvAceIPA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyciNp8PpiWWosXwUlsfG5F_MOm92nIyU-GUif7KrJog2Y7dxWmjH9NbUibLlyg0XXZ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

