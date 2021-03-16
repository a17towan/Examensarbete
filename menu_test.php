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
	<body>

	<?php
	        $pdo = new PDO('mysql:dbname=a17towan_examensarbete;host=wwwlab.iit.his.se', 'sqllab', 'Tomten2009');
	        $pdo->exec("SET CHARACTER SET 'utf8'");

	        //SQL FRÅGA
	        $sql = "Select deltagareID From test1";
	        //Skicka fråga till server
	        $statement = $pdo->prepare($sql);
	        //utför frågan
	        $statement->execute();
	        //get the data into tables
	        $tables = $statement->fetchAll(PDO::FETCH_NUM);
	        //loopar ut all skit
	        foreach($tables as $table){
	            //skriver till php
	            echo 'This is user med ID ' .$table[0]. '<br>';
	        }

	        echo "<form class='form1' action='menu_test.php' method='post'>";
	        echo "ID:<br><input type='number' name='deltagareID' id='deltagareID'><br>";
	        echo "Number:<br><input type='number' name='test1' id='test1'><br>";
	        echo "<input type='submit' value='Insert' class='insertBtn'/>";

	        if(isset($_POST['deltagareID'])){
	        	$querystring='INSERT INTO test1(deltagareID, test1) VALUES (:deltagareID, :test1);';
	        	$stmt = $pdo->prepare($querystring);
	        	$stmt->bindParam(':deltagareID', $_POST['deltagareID']);
	        	$stmt->bindParam(':test1', $_POST['test1']);
	        	$stmt->execute();
	        }

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