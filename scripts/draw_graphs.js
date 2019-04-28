downtime_url='https://drive.google.com/file/d/18p4P4-ob1X7DSonIp6Hpy426zOAuBJsm/view?usp=sharing'
alarm_url='https://docs.google.com/spreadsheets/d/1efXgXid3tvyGs8S4OhkJAvKbNoHTsvJmVun9riH2X1A/edit?usp=sharing'
pizza_test_url='https://docs.google.com/spreadsheets/d/1eemi9_R7QEZp1SyOGUWvJ5XysUbKYlASQL9_PmcS_Po/edit#gid=0'


// Load Charts and the corechart package.
google.charts.load('current', {'packages':['corechart']});
console.log('charts loaded');

function initialize() {
  var opts = {sendMethod: 'auto'};
  // Replace the data source URL on next line with your data source URL.
  //var downtime_query = new google.visualization.Query(downtime_url, opts);
  var test_query = new google.visualization.Query(pizza_test_url, opts);
  console.log(test_query);

  // Optional request to return only column C and the sum of column B, grouped by C members.
  // downtime_query.setQuery('select C, sum(B) group by C');

  // Send the query with a callback function.
  //downtime_query.send(handleQueryResponse);
  test_query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  // Called when the query response is returned.
  if (response.isError()){
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
  }
  var data = response.getDataTable();
  console.log(data);
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, {width: 400, height:300, is3D: true});
  chart.draw(data, null);
}

google.setOnLoadCallback(initialize);