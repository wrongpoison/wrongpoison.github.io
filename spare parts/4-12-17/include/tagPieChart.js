
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Tag', 'Number of Projects'],
    ['Illustration',     1],
    ['Writing',      1],
    ['Animation', 2]
  ]);

  var options = {
    title: 'Projecst'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}