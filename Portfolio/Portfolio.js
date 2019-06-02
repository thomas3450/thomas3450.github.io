function displayAssignments() {
  document.getElementById("assignments_h").style.cssText = 'font-size: 3em'
  document.getElementById("autumn2018_h").style.cssText = 'font-size: 1.5em'
  document.getElementById("spring2019_h").style.cssText = 'font-size: 1.5em'
  var assignments = document.getElementById("assignments");
  assignments.classList.toggle("hidden");
  var autumn2018 = document.getElementById("autumn2018");
  autumn2018.classList.add("hidden");
  var spring2019 = document.getElementById("spring2019");
  spring2019.classList.add("hidden");
}
function displayAutumn2018() {
  document.getElementById("assignments_h").style.cssText = 'font-size: 1.9em'
  document.getElementById("autumn2018_h").style.cssText = 'font-size: 2.1em'
  document.getElementById("spring2019_h").style.cssText = 'font-size: 1.5em'
  var assignments = document.getElementById("assignments");
  assignments.classList.add("hidden");
  var autumn2018 = document.getElementById("autumn2018");
  autumn2018.classList.toggle("hidden");
  var spring2019 = document.getElementById("spring2019");
  spring2019.classList.add("hidden");
}
function displaySpring2019() {
  document.getElementById("assignments_h").style.cssText = 'font-size: 1.9em'
  document.getElementById("autumn2018_h").style.cssText = 'font-size: 1.5em'
  document.getElementById("spring2019_h").style.cssText = 'font-size: 2.1em'
  var assignments = document.getElementById("assignments");
  assignments.classList.add("hidden");
  var autumn2018 = document.getElementById("autumn2018");
  autumn2018.classList.add("hidden");
  var spring2019 = document.getElementById("spring2019");
  spring2019.classList.toggle("hidden");
}
