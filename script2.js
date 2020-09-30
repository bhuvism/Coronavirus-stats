var url = 'https://api.covid19api.com/summary';
$.getJSON(url, function(info){
  console.log(info.Global)
  document.getElementById("demo5").innerHTML = info.Global.TotalConfirmed;
  document.getElementById("demo6").innerHTML = info.Global.TotalDeaths;
  document.getElementById("demo7").innerHTML = info.Global.TotalRecovered;
  document.getElementById("demo8").innerHTML = info.Global.TotalConfirmed-(info.Global.TotalDeaths+info.Global.TotalRecovered);
  document.getElementById("p5").innerHTML = info.Countries[0].Date
  document.getElementById("p6").innerHTML = info.Countries[0].Date
  document.getElementById("p7").innerHTML = info.Countries[0].Date
  document.getElementById("p8").innerHTML = info.Countries[0].Date
  console.log(info.Countries)
  var res="";
  var active = "";
  var table = ' <thead class="thead-dark"><tr> <th scope="col">Country/<br>Province</th><th scope="col">Confirmed</th> <th scope="col">Deaths</th> <th scope="col">Recovered</th><th scope="col">Active</th> </tr></thead>';
  for(var i=0;i<info.Countries.length;i++){
    active = info.Countries[i].TotalConfirmed - (info.Countries[i].TotalDeaths + info.Countries[i].TotalRecovered)
    
    res += '<tr><th scope="row">'+info.Countries[i].Country+'</th><td>' + info.Countries[i].TotalConfirmed + '</td><td>'+ info.Countries[i].TotalDeaths +'</td><td>'+ info.Countries[i].TotalRecovered +'</td><td>' + active + '</td></tr>';
    
  }
  document.getElementById("tb").innerHTML = table + res
})

