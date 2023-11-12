let score = prompt("คะแนนของคุณ")
if (score >= 80 && score < 100){
    document.getElementById("result").innerHTML = "คุณได้เกรด A"
} else if(score >= 70){
    document.getElementById("result").innerHTML = "คุณได้เกรด B"
} else if(score >= 60){
    document.getElementById("result").innerHTML = "คุณได้เกรด C"
} else if(score >= 50){
    document.getElementById("result").innerHTML = "คุณได้เกรด D"
} else (score < 50)
    document.getElementById("result").innerHTML = "คุณได้เกรด F"

for (var i = 0; i <10 ; i++ ){
    console.log("hello" + i)
    console.log("world" +i)
}
console.log("Exit")

let qrt = prompt("จำนวนของสินค้า :")
let sum = 0
for(var i = 1; i <= qrt; i++){
    let item_price = prompt("ราคาของสินค้า :")
    sum = sum + parseInt(item_price) 
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + ":" + item_price + "บาท" + "<br>"
}
document.getElementById("result").innerHTML == "ราคารวมทั้งหมด คือ " + sum + "บาท"

let round = prompt("คุณต้องการเล่นทั้งหมดกี่รอบ :")
for(var i = 0; i < round ; i++){
    var answer = prompt("เลือกหัวหรือก้อย !!!")
    var random_answer = ""
    if(Math.floor(Math.random * 10) <= 4){
        random_answer = "หัว"
    } else {
        random_answer = "ก้อย"
    }

    if(random_answer == answer){
        alert("ยินดีด้วย คุณตอบถูกต้อง")
    } else {
        alert("คุณตอบผิด เสียใจด้วย")
    }
    console.log(random_answer + ":" + answer)
}

while(prompt("ถ้าออกต้องพิมพ์ Exit") != "Exit"){
    document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
}