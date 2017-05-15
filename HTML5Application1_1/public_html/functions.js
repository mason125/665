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
function clearKPIs(){}
function flotr2()
{
    //assign to div tag
    var DF = document.getElementById("defects");
    var DA = document.getElementById("DA");
    var TE = document.getElementById("TE");
    var B = document.getElementById("B");
    
    //describe what chart is for
    var DFTitle = {title:"Number of defects"};
    var DATitle = {title:"Defect Acceptacnce Rate %"};
    var TETitle = {title:"Number of Tests/Day"};
    var BTitle  = {title:"Number of wrong fixes"};
    
    //display charts
    Flotr.draw(DF,k1,DFTitle);
    Flotr.draw(DA,k2,DATitle);
    Flotr.draw(TE,k3,TETitle);
    Flotr.draw(B,k4,BTitle);
   
}
function chartjs(){}
function chartist(){}
function google(){}
function d3(){}
function leaflet(){}


