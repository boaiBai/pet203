//返回验证码
function getV_Code() {
    var codeArray = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "J",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "g",
        "j",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];
    var v_code = "";
    for (var i = 0; i < 5; i++) {
        var num = Math.random(); //Math.random()：得到一个0到1之间的随机数
        var index = Math.ceil(num * (codeArray.length - 1)); //获得索引
        v_code += codeArray[index];
    }
    return v_code;
}

export {
    getV_Code
} 