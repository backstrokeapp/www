(function() {
  fetch('https://cors-anywhere.herokuapp.com/liberapay.com/Backstroke/').then(function(resp) {
    return resp.text();
  }).then(function(body) {
    var match = body.match(/Backstroke receives <b>\$([0-9.]+)<\/b>/);
    var amount = window.parseFloat(match[1], 10);
    if (amount > 0) {
      document.getElementById('liberapay').innerHTML = "$" + (amount).toFixed(2);
    }
  });
})();
