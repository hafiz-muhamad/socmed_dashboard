let toggle = document.querySelector('.toggle-switch-state');

toggle.addEventListener("click", function() {
    let checkbox = document.querySelector("#dark-on");
    checkbox.checked = !checkbox.checked;

    const element = document.querySelector(':root');
    const computedStyle = window.getComputedStyle(element);

    if(checkbox.checked == true){
        let state = document.querySelector('link[href="css/main.css"]')
        state.href = "css/darkmode.css"
    }
    else if(checkbox.checked == false){
        let state = document.querySelector('link[href="css/darkmode.css"]')
        state.href = "css/main.css"
    }
})