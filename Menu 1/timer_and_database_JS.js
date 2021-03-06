    // Ajax insert into database
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

  // Time stamp when find target
  function targetAquired(){
    var end = new Date();

    var year = end.getFullYear();
    var month = end.getDate();
    var day = end.getDay();
    var hour = end.getHours();
    var minute = end.getMinutes();
    var second = end.getSeconds();
    var millisecond = end.getMilliseconds();

    var result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + '.' + millisecond;
    document.getElementById("slutTid").value = result;
    document.getElementById("submit").click();
    document.getElementById("continueBox").style ="display:block";
  }
  
  // Stop the form from reloading the page on submit
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

