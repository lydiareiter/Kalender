<?php
if (isset($_GET['datum'])) {
    $datum = date_create_from_format('m/d/y', $_GET['datum']); // bekommen m/d/y 
    $dataCsv = preg_split("/\r\n|\n|\r/", file_get_contents("./data2020.csv"));

    for ($i = 0; $i < sizeof($dataCsv); $i++) {
        $dataCsv[$i] = str_replace("\"", "", $dataCsv[$i]);
        $dataCsv[$i] = explode(",", $dataCsv[$i]);
    }

    $toDay = [];

    foreach ($dataCsv as $i) {
        $elementDate = date_create_from_format('m/d/y', $i[1]);
        if ($elementDate == $datum) {
            array_push($toDay, $i);
        }
    }

    echo json_encode($toDay);
}
if(isset($_GET['termin'])){
    $terminchen = [];

    $dataCsv = preg_split("/\r\n|\n|\r/", file_get_contents("./data2020.csv"));

    for ($i = 0; $i < sizeof($dataCsv); $i++) {
        $dataCsv[$i] = str_replace("\"", "", $dataCsv[$i]);
        $dataCsv[$i] = explode(",", $dataCsv[$i]);
    }

    foreach($dataCsv as $i){
        $date = date_create_from_format("m/d/y", $i[1]);
        if($date->format("m/yy") == date("m/yy")){
            array_push($terminchen, $i);
        }
    }
    echo json_encode($terminchen);
}
?>