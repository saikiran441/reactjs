function my1(request)
{
    request.onload =  function(){
    if( request.status>=200 && request.status<400){
        var data = JSON.parse(request.responseText);
        console.log(data);
        document.getElementById('temp').innerHTML = data.main.temp;
        document.getElementById('weather').innerHTML = data.weather[0].description;
        var icon = data.weather[0].icon+".png";
        document.getElementById('myimg').src = "https://openweathermap.org/img/w/"+icon ;
    }
    else {
        console.log("some error");
    }
};
request.onerror = function(){
    console.log("connection error");
};

request.send();
}


function my()
{
    var v=document.getElementById('dropdownvalue').value;
    var request = new XMLHttpRequest();
    if(v==="Hyderabad")
    {
        
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);

    }
    if(v==="delhi")
    {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);
    }
    if(v==="mumbai")
    {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);
    }
    if(v==="maharashtra")
    {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Maharashtra&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);
    }
    if(v==="kerala")
    {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Kerala&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);

    }
    if(v==="goa")
    {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);
    }
    if(v==="chennai")
    {
        request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
        my1(request);
    }

}