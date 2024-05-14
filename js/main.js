const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;

function mood () {
    document.getElementById('darkmood').classList.toggle('bgcolor');
};