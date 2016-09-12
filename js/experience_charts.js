//Change these two variable to manipulate the color of the graphs
var bgColor = "rgba(240,95,64,0.2)";
var borderColor = "rgba(240,94,64,1)";

//You can change the labels and data for each chart here
//Make sure to have an equal number of labels and data
//Chart 1 labels and data
chartOneLabels = ["PHP", "JS", "HTML", "CSS", "Angular", "React"];
chartOneData = [65, 59, 90, 81, 56, 55];
//Chart 2 labels and data
chartTwoLabels = ["Java", "Python", "C++", "C#", "Lua"];
chartTwoData = [65, 59, 90, 81, 56];

//***CHART CODE***
//Chart 1
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: chartOneLabels,
        datasets: [
            {
                label: "Web development",
                backgroundColor: bgColor,
                borderColor: borderColor,
                pointBackgroundColor: borderColor,
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(34,34,34,1)",
                data: chartOneData
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
        },
    }
})

//Chart 2
var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: chartTwoLabels,
        datasets: [
            {
                label: "Other languages",
                backgroundColor: bgColor,
                borderColor: borderColor,
                pointBackgroundColor: borderColor,
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(34,34,34,1)",
                data: chartTwoData
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