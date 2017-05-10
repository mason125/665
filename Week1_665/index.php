<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src ="functions.js" type="text/javascript"></script>
        <link rel ="stylesheet" href="CSS.css" type ="text/css">
        <title>MSSE 665</title>
    </head>
    <body>
        <div id ="wrapper">
            <!--nav bar-->
            <nav class ="navbar navbar-inverse navbar-fixed-top" role ="navigation">
                <div class ="navbar-header">
                    <button type ="button" class ="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class ="icon-bar"></span>
                        <span class ="icon-bar"></span>
                        <span class ="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" style="color:red">Development Labs</a>
                </div>
                <!--nav bar links-->
                <div class ="collapse navbar-collapse navbar-ex1-collapse text-center">
                    <ul class ="nav navbar-nav">
                        <li><a onclick="clearKpis()"><b>Layout</b></a></li>
                        <li><a onclick="flort2()"><b>Flotr2</b></a></li>
                        <li><a onclick="chartjs()"><b>Chart.js</b></a></li>
                        <li><a onclick="chartist()"><b>Chartist.js</b></a></li>
                        <li><a onclick="google()"><b>Google Chart</b></a></li>
                        <li><a onclick="d3()"><b>D3</b></a></li>
                        <li><a onclick="leaflet()"><b>Leaflet</b></a></li>
                    </ul>
                </div>
            </nav>
            <!-- main content code-->
            <div id ="page-wrapper">
                <div class="container-fluid">
                    <div class ="row">
                        <div class ="col-lg-12">
                            <br>
                            <!-- content for header-->
                            <h2 class="page-header" style="text-align: center">
                                KPI
                            </h2>
                        </div>
                    </div>
                </div>
                <!--graphs KPI containers will respond to screen size-->
                <div class="container-fluid bg-3 text-center kpis">
                    <div class="row">
                        <div class ="col-sm-4">
                            <p>Graph 1</p>
                            <div id ="K1"></div>
                        </div>
                        <div class ="col-sm-4">
                            <p>Graph 2</p>
                            <div id ="K2"></div>
                        </div>
                        <div class="col-sm-4">
                            <p>Graph 3</p>
                            <div id ="K3"></div>
                        </div>
                    </div>
                </div>
                <div class ="container-fluid bg-3 text-center kpis">
                    <div class ="row">
                        <p>Graph 4</p>
                        <div id ="K4"></div>
                    </div>
                </div>
            </div>
        <br>
        <!--footer code-->
        <footer class="container-fluid bg-4 text-center" style ="background-color:black; color:white;">
            <p> Data visuals </p>
            <p><a href="http://www.ackmeedevlabs.com">www.ackmeedevlabs.com</a></p>
        </footer>
    </body>
</html>
