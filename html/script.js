function verif() {
  var t1 = document.forms["form1"].elements["texte1"].value;

  if (t1.indexOf("@") != -1 && t1.indexOf(".") != -1)
    document.getElementById("mail").style.borderColor = "green";
  else document.getElementById("mail").style.borderColor = "red";
}

function validForm() {
  var name = document.getElementById("fname").value;
  var adr = document.getElementById("adr").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  
  if (name == "") {
    //warning
    alert("First name is empty");
  }

  else if (adr == "") {
    //warning
    alert("Adresse is empty");
  }

  else if (city == "") {
    //warning
    alert("City is empty");
  }

  else if (state == "") {
    //warning
    alert("State is empty");
  }

  else if (zip == "") {
    //warning
    alert("Zip is empty");
  }
  
  else {
	  alert("Your pre-order has been saved");
  }
}

var oxo = 1;
var opaa = 0;
var opab = 100;

function defilmage(selimage){
	if(oxo == 1){
		opaa = 30;
		document.getElementById('divimageb').src = "contents/gallery/"+selimage+".jpg";
		oxo = 0;
	}
	
	imacibleb = document.getElementById('divimagea');
	imaciblea = document.getElementById('divimageb');

	if(imacibleb.src == imaciblea.src){
		return false;
	}
	
	opaa += 5;
	opab -= 10;
	
	if(document.all && !window.opera){ 
		imaciblea.style.filter = 'alpha(opacity=' + opaa + ');' ;
		imacibleb.style.filter = 'alpha(opacity=' + opab + ');';
	}
	
	else{ 
		imaciblea.style.opacity = opaa/100;
		imacibleb.style.opacity = opab/100;
	}
	
	if(opaa >= 100){
		opaa = 30;
		opab = 100;
		document.getElementById('divimagea').src = document.getElementById('divimageb').src
		return false;
	}
	
	setTimeout("defilmage()",25);
}