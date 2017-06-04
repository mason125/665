<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


if($_SERVER["REQUEST_METHOD"] == "POST")
{
    //data for chart
    $data = array(3,3,5,5,7);
    echo json_encode($data);
}


