const hourE1 = document.getElementbyId("hour");
const minuteE1 = document.getElementbyId("minutes");
const secondE1 = document.getElementbyId("seconds");
const ampmE1 = document.getElementbyId("ampm");

function updateClock() {
    let h = new date().gethours();
    let m = new date().getminutes();
    let s = new date().getseconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourE1.innertext = h;
    minuteE1.innertext = m;
    secondE1.innertext = s;
    ampmE1, (innertext = ampm);
}

updateClock();