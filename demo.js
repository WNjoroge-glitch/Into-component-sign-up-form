window.onload =() => {
    const input = document.getElementById("firstname")
    const second_input=document.getElementById("lastname")
    const button= document.getElementById("submit-btn")
    const span_1=document.getElementById("first-input")
    const span_2=document.getElementById("second-input")
    const label=document.getElementById("first-name-label")
    const second_label=document.getElementById("second-name-label")

button.addEventListener("click", function(){
    if (input.value == "") {
        span_1.innerHTML="This field cannot be empty"
        label.appendChild(span_1)
        input.style.border="1px solid red"
    }
    if (second_input.value == "") {
        span_2.innerHTML="This field cannot be empty"
        second_label.appendChild(span_2)
        second_input.style.border="1px solid red"
    }
    
    
})

}
