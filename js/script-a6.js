function dummy(arg) {
  console.log(arg);
}

$("input[type=checkbox]").change(dummy);

console.log("скрипт подгрузился");

function trackChecks() {
  let checkCount = $("input[type=checkbox]:checked").length;
  console.log(`Выбрано флажков: ${checkCount}`);
}

function init() { 

  $("input[type=checkbox]").change(trackChecks); 

  console.log("скрипт подгрузился");
}

$(document).ready(init);

const maxAllowedChecks = 2; 

function trackChecks() {
  let checkCount = $("input[type=checkbox]:checked").length;
  if (checkCount >= maxAllowedChecks) { 
    $("input[type=checkbox]:not(:checked)").prop("disabled", true)
  } else {
    $("input[type=checkbox]:not(:checked)").prop("disabled", false);
  }
}

function trackRadios() {
  $("input[type=radio]").prop("disabled", true);
}

function init() {
  $("input[type=checkbox]").change(trackChecks);
  $("input[type=radio]").change(trackRadios);

  trackChecks(); 
  trackRadios(); 
  console.log("скрипт подгрузился");
}