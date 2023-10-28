function tongthanhtien(){
   var a2 = 250000;
   var b2 = document.getElementById("sl1").value;


    var a3 = 500000;
    var b3 = document.getElementById("sl2").value;

    var a4 = 350000;
    var b4 = document.getElementById("sl3").value;

     var tong1 = a2*b2 + a3*b3 + a4*b4 ;


    var gia2= 345000;
    var input2 = document.getElementById("sl4").value;

    var gia4= 451000;
    var input4= document.getElementById("sl5").value;

    var gia5= 545000;
    var input5= document.getElementById("sl6").value;

    var tong2 = gia2*input2 + gia4*input4 + gia5*input5;
    var tongtatca =  tong1 + tong2;
    tien = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tongtatca);
    document.getElementById("tinhtien").textContent = tien;

}