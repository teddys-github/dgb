

  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Unique visits', 'Total visits'],
      ['DD/MM/YYYY', 950, 900],
      ['DD/MM/YYYY', 900, 944],
      ['DD/MM/YYYY', 999, 1120],
      ['DD/MM/YYYY', 900, 888]
    ]);

    var options = {
      title: 'Aggregated visits (million)',
      curveType: 'function',
      legend: {position: "bottom"},
      colors: ['#e7711b', '#1c91c0']
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);

    // added resize function to make google charts responsive;

    function resize() {
      chart.draw(data, options);
    }

    if (window.addEventListener) {
      window.addEventListener('resize', resize);
    } else {
      window.attachEvent('onresize', resize);
    }

  }
