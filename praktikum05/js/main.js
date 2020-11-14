function pertambahan( ){
    var number1 = 10
    var number2 = 10

    var jumlah = number1+number2
    return jumlah
}

function pengurangan(n1, n2){
    var jumlah = n1-n2
    return jumlah
}

function perkalian(angka1, angka2){
    var hasil = angka1*angka2
    return hasil
}

const x = "global scope";

function foo() {
  x = "functional scope";
  console.log(x);
}

// alert(perkalian(10, 10))
foo()
console.log(x);