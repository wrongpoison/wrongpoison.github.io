google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Aatrox');
      data.addColumn('number', 'Ahri');
      //data.addColumn('number', 'Akali');
      //data.addColumn('number', 'Alistar');


      data.addRows([
        [0, 60.3760, 53.0400],    [1,63.57600, 56.04000],   [2, 66.77600, 59.04000],  [3, 69.97600, 62.04000],   [4, 73.17600, 65.04000],  [5, 76.37600, 68.04000],
        [6, 79.57600, 71.04000],   [7, 82.77600, 74.04000],  [8, 85.97600, 77.04000],  [9, 89.17600, 80.04000],  [10, 92.3760, 83.0400], [11, 95.57600, 86.04000],
        [12, 98.77600, 89.04000], [13, 101.97600, 92.04000], [14, 105.17600, 95.04000], [15, 108.37600, 98.04000], [16, 111.57600, 101.04000], [17, 114.77600, 104.04000],
        [18, 117.97600, 107.04000]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }