function send(){
    document.getElementById("quiz-box").classList.add("quiz-hide");
    document.getElementById("ans-box").classList.add("ans-show");

    num_1 = document.getElementById("num_1").value;
    num_2 = document.getElementById("num_2").value;
    actual_answer = parseInt(num_1) * parseInt(num_2);

    console.log(actual_answer);

    q_num = "<h4>" +  num_1  + "X" +  num_2  + "</h4>"
    document.getElementById("hd1").innerHTML = q_num
}