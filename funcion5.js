/*PROBLEMA: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida menos el 5% de deducciones por
impuestos. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado; */
function calculo (x){
    let total=((((1500000 + 3500000) * 0.05) * x) + 3500000)
    return total
}
let licencias=calculo(3)
console.log("El salario mensualdel es : "+licencias)