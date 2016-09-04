/**
 * Created by Marios on 04/09/2016.
 */


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["PHP", "JS", "HTML", "CSS", "Angular", "React"],
        datasets: [
            {
                label: "Web development",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55]
            }
        ]
    },
    options: {
        legend: {
          labels: {
              boxWidth: 0
          }
        },
        scale: {
            ticks: {
                beginAtZero: true,
                display: false
            }
        }

    }
})