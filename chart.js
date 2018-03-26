var data2009 = [["Social Security, Unemployment, and Labor Spending", 1.22],
                ["Income due to Individual Income Taxes", 0.915],
                ["National Defense Spending", 0.661]];
var data2016 = [["Social Security, Unemployment, and Labor Spending", 1.31],
                ["Income due to Individual Income Taxes", 1.46],
                ["National Defense Spending", 0.541]];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data2009);
var barEnter = barUpdate.enter().append("div");
var is2009 = true;
var swapButton = document.getElementById("swap");
var title = document.getElementById("title");

var makeBars = function(){
    var d;
    if(is2009){
        title.innerHTML = "2009 National Budget"
        is2009 = false;
        d = data2009
    }
    else{
        title.innerHTML = "2016 National Budget"
        is2009 = true;
        d = data2016
    }
    bar = chart.selectAll("div");
    barUpdate = bar.data(d);
    barUpdate.transition().duration(3000).style("width", function(d) { return d[1] * 500 + "px";})
    barEnter.text(function(d) { return d[0] + ": $" + d[1] + " Trillion"; });
};

makeBars();
swapButton.addEventListener("click", makeBars);
