<!DOCTYPE html>
	<head>
		<style>
			table{
				border:1px solid black;
			}
			tr{
				border:1px solid black;
			}
			td{
				border:1px solid black;
			}
			th{
				border:1px solid black;
			}

		</style>
	</head>
	<body onload="initialTime()">
		<div id="timerWindow"></div>
		<button id="button" value="Press me" onclick="showTimeDiff()">Press me!</button>
		<div id="secondTimerWindow"></div>
		<button id="calculate" value="Calculate" onclick="calculateDiff()">Calculate diff</button>
		<div id="diffWindow"></div>
		<div id="arrayWindow"></div>

		<!-- Inputs for ID and time -->
		<form class='form1' action='timer_and_database_PHP.php' method='post'>
		ID:<br><input type='number' name='deltagareID' id='deltagareID'><br>
		Number:<br><input type='number' name='test1' id='test1'><br>
		<input type='submit' value='Insert' class='insertBtn'/>

		<!-- Javascript file -->
		<script src="timer_and_database_JS.js"></script>

			<?php
		        $pdo = new PDO('mysql:host=wwwlab.iit.his.se;dbname=a17towan_examensarbete', 'sqllab', 'Tomten2009');
		        $pdo->exec("SET CHARACTER SET 'utf8'");

		        if(isset($_POST['deltagareID'])){
		        	$querystring='INSERT INTO test1(deltagareID, test1) VALUES (:deltagareID, :test1);';
		        	$stmt = $pdo->prepare($querystring);
		        	$stmt->bindParam(':deltagareID', $_POST['deltagareID']);
		        	$stmt->bindParam(':test1', $_POST['test1']);
		        	$stmt->execute();
		        }

                // Make the table for database content
		        $count = 0;
		        echo "<table>";
		        	echo "<tr>";
		        		echo "<th>ID</th>";
		        		echo "<th>Time</th>";
		        	echo "</tr>";
		        foreach($pdo->query("SELECT * FROM test1") as $row){
		        	echo "<tr>";
		        		echo "<td>".$row['deltagareID']."</td>";
		        		echo "<td>".$row['test1']."</td>";
		        	echo "</tr>";
		        }
		        echo "</tr>";
		       echo "</table>";
		    ?>
	   </body>