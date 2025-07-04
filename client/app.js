function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathroom");
  for (var i = 0; i < uiBathrooms.length; i++) {
    if (uiBathrooms[i].checked) {
      return parseInt(uiBathrooms[i].value);
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i = 0; i < uiBHK.length; i++) {
    if (uiBHK[i].checked) {
      return parseInt(uiBHK[i].value);
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  var sqft = parseFloat(document.getElementById("uiSqft").value);
  var bhk = getBHKValue();
  var bath = getBathValue();
  var location = document.getElementById("uiLocations").value;

  var url = "http://127.0.0.1:5000/predict_home_price";

  $.ajax({
    url: url,
    type: "POST",
    contentType: "application/json", // ✅ must be set
    data: JSON.stringify({
      total_sqft: sqft,
      bhk: bhk,
      bath: bath,
      location: location
    }),
    success: function(data) {
      console.log("Estimated Price Received:", data.estimated_price);
      document.getElementById("uiEstimatedPrice").innerHTML =
        "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
    },
    error: function(err) {
      console.error("Request failed:", err);
    }
  });
}

function onPageLoad() {
  console.log("Document loaded");
  var url = "http://127.0.0.1:5000/get_location_name";

  $.get(url, function(data, status) {
    console.log("Got response for get_location_name request");
    if (data) {
      var locations = data.locations;
      var uiLocations = document.getElementById("uiLocations");
      $('#uiLocations').empty();
      $('#uiLocations').append(new Option("Choose a Location", "", true, true));
      for (var i in locations) {
        var opt = new Option(locations[i]);
        $('#uiLocations').append(opt);
      }
    }
  });
}

// ✅ COMBINE event bindings on load
window.onload = function () {
  onPageLoad();
  document.getElementById("estimateBtn").addEventListener("click", onClickedEstimatePrice);
};
