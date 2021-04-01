<?php
	$host = "wwwlab.iit.his.se";
	$dbname = "a17towan_examensarbete";
	$username = "sqllab";
	$password = "Tomten2009";
	$dsn = "mysql:host=" . $host . ";dbname=" . $dbname . ";charset=utf8";
	$options = array(
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES => false
	);
	$conn = null;

	try {
		$conn = new PDO($dsn, $username, $password, $options);
	} catch (PDOException $e) {
		echo $e->getMessage();
	}

	if(isset($_POST["deltagareID"])) {
		try {
			$values = [
				$_POST["deltagareID"],
				$_POST["startTid"],
				$_POST["slutTid"]
			];
			$sql = "INSERT INTO test1(deltagareID, startTid, slutTid) VALUES (?, ?, ?);";
			$stmt = $conn->prepare($sql);
			$stmt->execute($values);
			echo "Successfully inserted.";
		} catch(PDOException $e) {
			echo $e->getMessage();
		}
	}
?>