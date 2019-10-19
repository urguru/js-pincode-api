window.addEventListener("DOMContentLoaded", event => {
  var btn = document.querySelector("#get_res");
  btn.addEventListener("click", event => {
    var text = document.querySelector("#pincode");
    console.log(typeof text.value);
    url = "https://api.postalpincode.in/pincode/" + text.value;
    console.log(url);
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        var data = JSON.parse(this.response);
        console.log(data);
        if (data[0]["Status"] == "Success") {
          var post_office = data[0]["PostOffice"][0];
          var block = post_office["Block"];
          var district = post_office["District"];
          var region = post_office["Region"];
          var state = post_office["State"];
          document.getElementById("results").classList.remove("invisible");
          document.getElementById("error").classList.add("invisible");
          document.querySelector("#block").innerHTML = block;
          document.querySelector("#district").innerHTML = district;
          document.querySelector("#region").innerHTML = region;
          document.querySelector("#state").innerHTML = state;
        } else {
          document.getElementById("results").classList.add("invisible");
          document.getElementById("error").classList.remove("invisible");
        }
      }
    };
    request.send();
  });
});
