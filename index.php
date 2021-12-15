<header>
<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Open+Sans:wght@300&family=Work+Sans:wght@200&display=swap" rel="stylesheet">
<script def src="script.js" defer></script>
</header>
<body>
<?php
//$data = include 'data2020.csv';

setlocale(LC_TIME, "de_DE.utf8");
$kal_datum = time();
$kal_tage_gesamt = date("t", $kal_datum);
$kal_start_timestamp = mktime(0,0,0,date("n",$kal_datum),1,date("Y",$kal_datum));
$kal_start_tag = date("N", $kal_start_timestamp);
$kal_ende_tag = date("N", mktime(0,0,0,date("n",$kal_datum),$kal_tage_gesamt,date("Y",$kal_datum)));
?>

<div id="blurry">
    <div id="inhaltOverlay">
        <div id="header">
            <h1 id= "headerTitle"></h1>
            <div id="img">
                <img id="imgClose" src="./img/close_black_24dp.svg" alt="close">
            </div>
        </div>
        <div id="body">
          <?php 
          $data = preg_split("/\r\n|\n|\r/", file_get_contents("data2020.csv"));
          $dataArbeiten = array_splice($data, 1, sizeof($data));
          var_dump($dataArbeiten);
          
          /*
          foreach($csv_array as $day) {
            $date = date_create_from_format("m/d/y H:i:s ", $day[1] . " " . $day[2]);
            $kal_date_timestamp = new DateTime();
            $kal_date_timestamp->setTimestamp($kal_anzeige_heute_timestamp);

            if($kal_date_timestamp->getTimestamp() == $date->getTimestamp()) {
                $dateBodyLine .= "<p>$day[0]</p>";
            }

        }*/

          ?>
        </div>
    </div>
</div>

<table class="kalender" style="text-align: center; ">
  <caption><h1><?php echo utf8_decode(strftime("%B %Y", $kal_datum)); ?></h1></caption>
  <thead>
    <tr>
      <th>Mo</th>
      <th>Di</th>
      <th>Mi</th>
      <th>Do</th>
      <th>Fr</th>
      <th>Sa</th>
      <th>So</th>
    </tr>
  </thead>
  <tbody>
<?php
/*
  $data = file_get_contents("data2020.csv");
  $obj = json_decode($data);
  echo $obj;*/

  for($i = 1; $i <= $kal_tage_gesamt+($kal_start_tag-1)+(7-$kal_ende_tag); $i++)
  {
    $kal_anzeige_akt_tag = $i - $kal_start_tag;
    $kal_anzeige_heute_timestamp = strtotime($kal_anzeige_akt_tag." day", $kal_start_timestamp);
    $kal_anzeige_heute_tag = date("j", $kal_anzeige_heute_timestamp);
    if(date("N",$kal_anzeige_heute_timestamp) == 1)
      echo "    <tr>\n";
    if(date("dmY", $kal_datum) == date("dmY", $kal_anzeige_heute_timestamp))
      echo "      <td onclick=\"loadTermin(this)\" class=\"kal_aktueller_tag\">",$kal_anzeige_heute_tag,"</td>\n";
    elseif($kal_anzeige_akt_tag >= 0 AND $kal_anzeige_akt_tag < $kal_tage_gesamt)
      echo "      <td onclick=\"loadTermin(this)\" class=\"kal_standard_tag\">",$kal_anzeige_heute_tag,"</td>\n";
    else
      echo "      <td class=\"kal_vormonat_tag\">",$kal_anzeige_heute_tag,"</td>\n";
    if(date("N",$kal_anzeige_heute_timestamp) == 7)
      echo "    </tr>\n";
  }
?>
  </tbody>
</table>
</body>