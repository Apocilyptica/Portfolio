function homeFunction() {
    var a = document.getElementById("homeContent");
    var b = document.getElementById("aboutmeContent");
    var c = document.getElementById("educationContent");
    var d = document.getElementById("portfolioContent");
    var e = document.getElementById("contactContent");
    if (a.style.display == "none" || a.style.display == "block" || b.style.display === "block" || c.style.display === "block" || d.style.display === "block" || e.style.display === "block") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    } else {
        a.style.display = "block";
    }
  }

function aboutmeFunction() {
    var a = document.getElementById("homeContent");
    var b = document.getElementById("aboutmeContent");
    var c = document.getElementById("educationContent");
    var d = document.getElementById("portfolioContent");
    var e = document.getElementById("contactContent");
    if (a.style.display == "block" || b.style.display === "none" || b.style.display === "block" || c.style.display === "block" || d.style.display === "block" || e.style.display === "block") {
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    } else {
        b.style.display = "block";
        a.style.display = "none";
    }
  }

function educationFunction() {
    var a = document.getElementById("homeContent");
    var b = document.getElementById("aboutmeContent");
    var c = document.getElementById("educationContent");
    var d = document.getElementById("portfolioContent");
    var e = document.getElementById("contactContent");
    if (a.style.display == "block" || b.style.display === "block" || c.style.display === "none" || c.style.display === "block" || d.style.display === "block" || e.style.display === "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
        e.style.display = "none";
    } else {
        c.style.display = "block";
        a.style.display = "none";
    }
  }

function portfolioFunction() {
    var a = document.getElementById("homeContent");
    var b = document.getElementById("aboutmeContent");
    var c = document.getElementById("educationContent");
    var d = document.getElementById("portfolioContent");
    var e = document.getElementById("contactContent");
    if (a.style.display == "block" || b.style.display === "block" || c.style.display === "block" || d.style.display === "none" || d.style.display === "block" || e.style.display === "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        e.style.display = "none";
    } else {
        d.style.display = "block";
        a.style.display = "none";
    }
  }

function contactFunction() {
    var a = document.getElementById("homeContent");
    var b = document.getElementById("aboutmeContent");
    var c = document.getElementById("educationContent");
    var d = document.getElementById("portfolioContent");
    var e = document.getElementById("contactContent");
    if (a.style.display == "block" || b.style.display === "block" || c.style.display === "block" || d.style.display === "block" || e.style.display === "none" || e.style.display === "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
    } else {
        e.style.display = "block";
        a.style.display = "none";
    }
  }