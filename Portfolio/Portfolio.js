function displayAssignments() {
    document.getElementById("assignments_h").style.cssText = 'color: var(--hcol_s)'
    document.getElementById("autumn2018_h").style.cssText = 'color: var(--hcol_d)'
    document.getElementById("spring2019_h").style.cssText = 'color: var(--hcol_d)'
    var assignments = document.getElementById("assignments");
    assignments.classList.toggle("hidden");
    var autumn2018 = document.getElementById("autumn2018");
    autumn2018.classList.add("hidden");
    var spring2019 = document.getElementById("spring2019");
    spring2019.classList.add("hidden");
}
function displayAutumn2018() {
    document.getElementById("assignments_h").style.cssText = 'color: var(--hcol_d)'
    document.getElementById("autumn2018_h").style.cssText = 'color: var(--hcol_s)'
    document.getElementById("spring2019_h").style.cssText = 'color: var(--hcol_d)'
    var assignments = document.getElementById("assignments");
    assignments.classList.add("hidden");
    var autumn2018 = document.getElementById("autumn2018");
    autumn2018.classList.toggle("hidden");
    var spring2019 = document.getElementById("spring2019");
    spring2019.classList.add("hidden");
}

function displaySpring2019() {
    document.getElementById("assignments_h").style.cssText = 'color: var(--hcol_d)'
    document.getElementById("autumn2018_h").style.cssText = 'color: var(--hcol_d)'
    document.getElementById("spring2019_h").style.cssText = 'color: var(--hcol_s)'
    var assignments = document.getElementById("assignments");
    assignments.classList.add("hidden");
    var autumn2018 = document.getElementById("autumn2018");
    autumn2018.classList.add("hidden");
    var spring2019 = document.getElementById("spring2019");
    spring2019.classList.toggle("hidden");
}
