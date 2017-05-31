/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//declare arrays
var k1;
var k2;
var k3;
var k4;
//wait till the page loads to initilize arrays
window.onload = function()
{
   
    //arrays
    k1 = 
    [
        [
            [1, 2.1], 
            [2, 2.75],
            [3, 5.5],
            [4, 4.9]
        ]
    ];  

    
    k2 = 
    [
        [
            [1,1.3],
            [2,1.4],
            [3,1,4],
            [4,1.3]
        ]
    ];
    
    k3 =
    [
        [
            [1,0.8],
            [2,1.35],
            [3,4.2],
            [4,130]
        ]
    ];
    
    k4 =
    [
        [
            [1,75],
            [2,83],
            [3,150],
            [4,130]
        ]
    ];
    

};

//functions
function clearKPIs()
{
    //clear out all graphs
    document.getElementById("defects").innerHTML = "";
    document.getElementById("DA").innerHTML = "";
    document.getElementById("TE").innerHTML = "";
    document.getElementById("B").innerHTML = "";
}
function flotr2()
{
    clearKPIs();//clear out all old charts should they exsits 
 
    var DF = document.getElementById("defects");
    var DA = document.getElementById("DA");
    var TE = document.getElementById("TE");
    var B = document.getElementById("B");
    
    //describe what chart is for
    var DFTitle = {title:"Number of defects", radar:{show:true}};
    var DATitle = {title:"Defect Acceptance%",bars:{show:true}};
    var TETitle = {title:"Number of Tests/Day"};
    var BTitle  = {title:"Number of wrong fixes", bars:{show:true}};
    
    //display charts
    Flotr.draw(DF,k1,DFTitle);
    Flotr.draw(DA,k2,DATitle);
    Flotr.draw(TE,k3,TETitle);
    Flotr.draw(B,k4,BTitle);
   
}
function chartjs()
{
    clearKPIs();//clear out old charts
   
    //set up the canvas for each div
    var DFcanvas = document.createElement('canvas');
    var DAcanvas = document.createElement('canvas');
    var TEcanvas = document.createElement('canvas');
    var Bcanvas = document.createElement('canvas');
    
    //set up div tags for conversion 
    var DF = document.getElementById("defects").appendChild(DFcanvas).getContext("2d");
    var DA = document.getElementById("DA").appendChild(DAcanvas).getContext("2d");
    var TE = document.getElementById("TE").appendChild(TEcanvas).getContext("2d");
    var B = document.getElementById("B").appendChild(Bcanvas).getContext("2d");
    
    //bar chart
    var chart = new Chart(DF, {
        type:'bar',
        data:{
            labels:['1st','2nd','3d','4th'],
            datasets: [{
                    label: 'number of defects',
                    data:[2.1, 2.75, 5.6, 4.9],
                    backgroundColor:[
                        "#464682",
                        "#37B0C8",
                        "#36393E",
                        "#980404"
                    ]
                    
            }]
        },
        options: {
            scales:{
                yAxes: [{
                   scaleLabel: {
                       display:true,
                       labelString: 'Defects'
                   }     
                }],
                
                xAxes: [{
                        scaleLabel:{
                            display:true,
                            labelString:'Defects'
                        }
                }]
            }
        }
    });
    
    //radar chart
    var chart = new Chart(DA, {
        type:'radar',
        data:{
            labels:['1%','2%','3%','4%'],
            datasets: [{
                    label: 'defect acceptance',
                    data:[1.3, 1.4, 1.4, 1.3],
                    backgroundColor:"rgb(53, 248, 154)"

            }]
        },
        options: {
            scales:{
                yAxes: [{
                   scaleLabel: {
                       display:true,
                       labelString: '%'
                   }     
                }],

                xAxes: [{
                        scaleLabel:{
                            display:true,
                            labelString:'Acceptance Rate'
                        }
                }]
            }
        }
    });
    
    //doughnut chart
    var chart = new Chart(TE, {
        type:'doughnut',
        data:{
            labels:['Day 1','Day 2','Day 3','Day 4'],
            datasets: [{
                    label: 'Test Efficiency',
                    data:[0.8, 1.35, 4.2, 130],
                    backgroundColor:[
                         "#416541",
                         "#36A2EB",
                         "#FFCE56",
                         "#5F3CB6"
                    ]

            }]
        },
        options: {
            scales:{
                yAxes: [{
                   scaleLabel: {
                       display:true,
                       labelString: 'Test'
                   }     
                }],

                xAxes: [{
                        scaleLabel:{
                            display:true,
                            labelString:'Efficiency'
                        }
                }]
            }
        }
    });
    
    //line
    var chart = new Chart(B, {
        type:'line',
        data:{
            labels:['Fix 1','Fix 2','Fix 3','Fix 4'],
            datasets: [{
                    label: 'Defect Acceptance',
                    data:[75, 83, 150, 130],
                    backgroundColor:"rgb(153,255,51)"

            }]
        },
        options: {
            scales:{
                yAxes: [{
                   scaleLabel: {
                       display:true,
                       labelString: 'Severity'
                   }     
                }],

                xAxes: [{
                        scaleLabel:{
                            display:true,
                            labelString:'Acceptance Rate'
                        }
                }]
            }
        }
    });
}
function chartist()
{
    //clear KPIs
    clearKPIs();
    
    //set vars for div
    var DF = document.getElementById("defects");
    var DA = document.getElementById("DA");
    var TE = document.getElementById("TE");
    var B = document.getElementById("B");
    
    var DFdata = {
        labels:["1st", "2nd", "3rd", "4th"], 
        series:[[2.1,2.75,5.6,4.9]]
    };
    
    var DAdata = {
        labels:["1%","2%","3%","4%"], 
        series: [1.3, 1.4, 1.4, 1.3]
    };
    
    var TEdata = {
        labels:['Fix 1','Fix 2','Fix 3','Fix 4'], 
        series:[[75, 83, 150, 130]]
    };   
    
    var Bdata = {
        labels:['Fix 1','Fix 2','Fix 3','Fix 4'],
        series:[[75, 83, 150, 130]]
    };
    //charts
    new Chartist.Bar(DF,DFdata);//bar chart for defects
    new Chartist.Pie(DA, DAdata);//pie chart for defects accpetance rate
    new Chartist.Line(TE,TEdata);//line chart test efficeny 
    new Chartist.Line(B, Bdata);


}
function google(){}
function d3(){}
function leaflet(){}


