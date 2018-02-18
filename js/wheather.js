var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
	if(this.readyState==4 &&this.status==200){
	
		var temp = JSON.parse(this.responseText);
	var x = "<h1>" + temp.name + "</h1>"+"<h3>"+temp.weather[0].description+"</h3>"+"<h4>"+"humidity:"+temp.main.humidity+"</h4>"+"<h4>"+"temp <sup>o</sup>C: "+FtoCel(temp.main.temp)+"</h4>"+
	            "<h4>"+"temp_max <sup>o</sup>C: "+FtoCelmx(temp.main.temp_max)+"</h4>"+"<h4>"+"temp_min <sup>o</sup>C: "+FtoCelmn(temp.main.temp_min)+"</h4>";
		document.getElementById("1").innerHTML=x;
 }
};
xhttp.open("GET","http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",true);
xhttp.send();
function FtoCel(temp){
	var f=parseFloat(temp);
	var res=(f-32)/1.8;
	return res+"";
};
function FtoCelmx(temp){
	var f=parseFloat(temp);
	var res=(f-32)/1.8;
	return res+"";
};
function FtoCelmn(temp){
	var f=parseFloat(temp);
	var res=(f-32)/1.8;
	return res+"";
};

var xhttp1=new XMLHttpRequest();
xhttp1.onreadystatechange=function(){
	if(this.readyState==4 &&this.status==200){
	var temp = JSON.parse(this.responseText);
	var y = "<h1>" + temp.name + "</h1>"+"<h3>"+temp.weather[0].description+"</h3>"+"<h4>"+"humidity:"+temp.main.humidity+"</h4>"+"<h4>"+"temp <sup>o</sup>C: "+FtoCel(temp.main.temp)+"</h4>"+
	            "<h4>"+"temp_max <sup>o</sup>C: "+FtoCelmx(temp.main.temp_max)+"</h4>"+"<h4>"+"temp_min <sup>o</sup>C: "+FtoCelmn(temp.main.temp_min)+"</h4>";
		document.getElementById("2").innerHTML=y;

 }
};
xhttp1.open("GET","http://api.openweathermap.org/data/2.5/weather?q=pune,in&appid=d31b1cfd7e0de8414024b9eb5e152674",true);
xhttp1.send();

var xhttp2=new XMLHttpRequest();
xhttp2.onreadystatechange=function(){
	if(this.readyState==4 &&this.status==200){
	var temp = JSON.parse(this.responseText);
	var y = "<h1>" + temp.name + "</h1>"+"<h3>"+temp.weather[0].description+"</h3>"+"<h4>"+"humidity:"+temp.main.humidity+"</h4>"+"<h4>"+"temp <sup>o</sup>C: "+FtoCel(temp.main.temp)+"</h4>"+
	            "<h4>"+"temp_max <sup>o</sup>C: "+FtoCelmx(temp.main.temp_max)+"</h4>"+"<h4>"+"temp_min <sup>o</sup>C: "+FtoCelmn(temp.main.temp_min)+"</h4>";
		document.getElementById("3").innerHTML=y;

 }
};
xhttp2.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&appid=d31b1cfd7e0de8414024b9eb5e152674",true);
xhttp2.send();

var xhttp3=new XMLHttpRequest();
xhttp3.onreadystatechange=function(){
	if(this.readyState==4 &&this.status==200){
	var temp = JSON.parse(this.responseText);
	var y = "<h1>" + temp.name + "</h1>"+"<h3>"+temp.weather[0].description+"</h3>"+"<h4>"+"humidity:"+temp.main.humidity+"</h4>"+"<h4>"+"temp <sup>o</sup>C: "+FtoCel(temp.main.temp)+"</h4>"+
	            "<h4>"+"temp_max <sup>o</sup>C: "+FtoCelmx(temp.main.temp_max)+"</h4>"+"<h4>"+"temp_min <sup>o</sup>C: "+FtoCelmn(temp.main.temp_min)+"</h4>";
		document.getElementById("4").innerHTML=y;

 }
};
xhttp3.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Kolhapur,in&appid=d31b1cfd7e0de8414024b9eb5e152674",true);
xhttp3.send();

var xhttp4=new XMLHttpRequest();
xhttp4.onreadystatechange=function(){
	if(this.readyState==4 &&this.status==200){
	var temp = JSON.parse(this.responseText);
	var y = "<h1>" + temp.name + "</h1>"+"<h3>"+temp.weather[0].description+"</h3>"+"<h4>"+"humidity:"+temp.main.humidity+"</h4>"+"<h4>"+"temp <sup>o</sup>C: "+FtoCel(temp.main.temp)+"</h4>"+
	            "<h4>"+"temp_max <sup>o</sup>C: "+FtoCelmx(temp.main.temp_max)+"</h4>"+"<h4>"+"temp_min <sup>o</sup>C: "+FtoCelmn(temp.main.temp_min)+"</h4>";
		document.getElementById("5").innerHTML=y;

 }
};
xhttp4.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Delhi,in&appid=d31b1cfd7e0de8414024b9eb5e152674",true);
xhttp4.send();

var xhttp5=new XMLHttpRequest();
xhttp5.onreadystatechange=function(){
	if(this.readyState==4 &&this.status==200){
	var temp = JSON.parse(this.responseText);
	var y = "<h1>" + temp.name + "</h1>"+"<h3>"+temp.weather[0].description+"</h3>"+"<h4>"+"humidity:"+temp.main.humidity+"</h4>"+"<h4>"+"temp <sup>o</sup>C: "+FtoCel(temp.main.temp)+"</h4>"+
	            "<h4>"+"temp_max <sup>o</sup>C: "+FtoCelmx(temp.main.temp_max)+"</h4>"+"<h4>"+"temp_min <sup>o</sup>C: "+FtoCelmn(temp.main.temp_min)+"</h4>";
		document.getElementById("6").innerHTML=y;

 }
};
xhttp5.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Kolkata,in&appid=d31b1cfd7e0de8414024b9eb5e152674",true);
xhttp5.send();