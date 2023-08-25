function fun(num1) {
    var num2 = 6;
    function TDK() {
        var num3 = 10;
        console.log(num1 * num2 * num3)
    }
    return TDK;
}

var TeamDevKode = fun(5)
TeamDevKode ()