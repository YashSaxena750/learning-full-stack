function test() {
    var a = "3";
    var b = "8";

    // a = +a + +b;
    // b = a - b;
    // a = a - b;

    let t = b; //8
    b = a; //3
    a = t; //8


    console.log("a is " + a);
    console.log("b is " + b);
    alert(a + "," + b);
    console.log("Hello World");

    const x = 100;
    console.log(x);
    console.error("Error");
    console.warn("Warning");
    console.table({name: 'goli', email: 'aa@aa.aa'});

    console.group("message");
    console.log("ola");
    console.warn("warning");
    console.error("error");
    console.groupEnd();

    console.log("hello");
}

test();
