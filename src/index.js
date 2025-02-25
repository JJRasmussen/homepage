import "./functionalities/themeToggle.js"
import "./styles.css";

//avoid flicker of unstyled elements on page load
window.onload = function () {
    setTimeout(function() {
        document.body.style.display = "";
    }, 200);
}