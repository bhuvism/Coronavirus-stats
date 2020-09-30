var url = 'https://api.covid19india.org/state_district_wise.json'
$.getJSON(url,data=>{
  console.log(data.Karnataka.districtData)
})


var staticUrl = 'https://api.covid19india.org/data.json';
        $.getJSON(staticUrl, function(data) {
            console.log(data.statewise)
            var j = data.statewise[0].confirmed
            var k = data.statewise[0].deaths
            var l = data.statewise[0].recovered
            var m = data.statewise[0].active
           
            document.getElementById("demo1").innerHTML =  j
            document.getElementById("demo2").innerHTML = k
            document.getElementById("demo3").innerHTML = l
            document.getElementById("demo4").innerHTML = m
            
            document.getElementById("demo1").style.fontFamily='serif '
            document.getElementById("demo2").style.fontFamily='serif '
            document.getElementById("demo3").style.fontFamily='serif '
            document.getElementById("demo4").style.fontFamily='serif '
            
           
        })



  $.getJSON('https://api.covid19india.org/state_district_wise.json', function(data){
  //  for(dist in data){
  //    var ob = data[dist].districtData;
  //   for(dis in ob){
  //     console.log(ob[dis])
  //   }
     
  //  }
    var obj = data.Karnataka.districtData
    var out='';
   console.log(obj)
    
    
    var tables = ' <thead class="thead-dark"><tr> <th scope="col">Districts</th><th scope="col">Confirmed</th> <th scope="col">Deaths</th> <th scope="col">Recovered</th><th scope="col">Active</th> </tr></thead>';
    for(dist in obj){
      out+= '<tr><th scope="row">'+dist+'</th><td><i class="fas fa-arrow-alt-circle-up">'+obj[dist].delta.confirmed+'&nbsp;&nbsp;'  +obj[dist].confirmed+'</td><td><i class="fas fa-arrow-alt-circle-up">'+obj[dist].delta.deceased+'&nbsp;&nbsp;'+obj[dist].deceased+'</td><td><i class="fas fa-arrow-alt-circle-up">'+obj[dist].delta.recovered+'&nbsp;&nbsp;'+obj[dist].recovered+'</td><td>'+obj[dist].active+'</td></tr>';
    }
   
     document.querySelector('#tbdt').innerHTML = tables + out
  })
        


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

/*var options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true ,// default: true

}

const darkmode = new Darkmode(options);
darkmode.showWidget();*/

