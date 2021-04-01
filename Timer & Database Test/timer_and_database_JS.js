function insert(deltagareID, startTid, slutTid) {
	return $.ajax({
		type: "POST",
		url: "./timer_and_database_PHP.php",
		data: { 
			deltagareID,
			startTid,
			slutTid
		}
	});
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
	e.preventDefault();
	console.log("SUBMIT NO REFRESH");
	const deltagareID = document.querySelector(`[name="deltagareID"]`).value;
	const startTid = document.querySelector(`[name="startTid"]`).value;
	const slutTid = document.querySelector(`[name="slutTid"]`).value;
	insert(
	  deltagareID, startTid, slutTid
	).done((response) => {
	  console.log(response);
	});
  });
  