<!DOCTYPE html>
	<html>
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
			#calculate{
				display:none;
			}

		</style>
	</head>
	<body>
		<button id="button1" value="First time" onclick="initialTime()">First time!</button>
		<div id="timerWindow"></div>

		<button id="button2" value="Press me" onclick="showTimeDiff()">Second time!</button>
		<div id="secondTimerWindow"></div>

		<button id="calculate" value="Calculate" onclick="calculateDiff()">Calculate diff</button>
		<div id="diffWindow"></div>
		<div id="arrayWindow"></div>

		<!-- Javascript file -->

			<?php
		        $pdo = new PDO('mysql:host=wwwlab.iit.his.se;dbname=a17towan_examensarbete', 'sqllab', 'Tomten2009');
		        $pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
		        $pdo->exec("SET CHARACTER SET 'utf8'");

		       	echo "<form class='form1' action='timer_and_database_PHP.php' method='post'>";
				echo "ID:<br><input name='deltagareID' id='deltagareID' required='required' placeholder='ID' autocomplete='off'><br>";
				echo "Start time:<br><input  name='startTid' id='startTid' required='required' placeholder='start tid'><br>";
				echo "End time:<br><input  name='slutTid' id='slutTid' required='required' placeholder='slut tid'><br>";
				echo "<button placeholder='submit' id='formBtn' class='insertBtn'>hey</button>";
				echo "</form>";


		        if(isset($_POST['deltagareID'])){
		        	$querystring='INSERT INTO test1(deltagareID, startTid, slutTid) VALUES (:deltagareID, :startTid, :slutTid);';
		        	$stmt = $pdo->prepare($querystring);
		        	$stmt->bindParam(':deltagareID', $_POST['deltagareID']);
		        	$stmt->bindParam(':startTid', $_POST['startTid']);
		        	$stmt->bindParam(':slutTid', $_POST['slutTid']);
		        	$stmt->execute();
		        }

		        echo "<table>";
		        	echo "<tr>";
		        		echo "<th>ID</th>";
		        		echo "<th>Start time</th>";
		        		echo "<th>End time</th>";
		        	echo "</tr>";
		        foreach($pdo->query("SELECT * FROM test1") as $row){
		        	echo "<tr>";
		        		echo "<td id='test'>".$row['deltagareID']."</td>";
		        		echo "<td>".$row['startTid']."</td>";
		        		echo "<td>".$row['slutTid']."</td>";
		        	echo "</tr>";
		        }
		        echo "</tr>";
		       echo "</table>";
		    ?>
		 <script src="timer_and_database_JS.js"></script>

	   </body>
	   </html>