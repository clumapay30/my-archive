<?php
/* 
echo date("l"); //display the day of the week
echo phpinfo(); 
echo strrev("Welcome") . "<br>"; // Reverse string
echo str_repeat("Chan", 2) . "<br>"; // Repeat string
echo strtoupper("hooray!") . "<br>"; // string to uppercase
echo strtolower("CHRISTIAN") . "<br>"; // string to lowercase
echo ucfirst("any # of letters and punctuation you want") . "<br>";

echo fix_names("WILLIAM", "henry", "gatES");
function fix_names($n1, $n2, $n3) {
    $n1 = ucfirst(strtolower($n1));
    $n2 = ucfirst(strtolower($n2));
    $n3 = ucfirst(strtolower($n3));

    return $n1 . " " . $n2 . " " . $n3;
}


// return a function with array
$names = fix_names("WILLIAM", "henry", "gatES");
echo $names[0] . " " . $names[1] . " " . $names[2];
function fix_names($n1, $n2, $n3) {
    $n1 = ucfirst(strtolower($n1));
    $n2 = ucfirst(strtolower($n2));
    $n3 = ucfirst(strtolower($n3));

    return array($n1, $n2, $n3);
}

*/

// Returning values in global variables

$a1 = "WILLIAM";
$a2 = "henry";
$a3 = "gatEs";

echo $a1 . " " . $a2 . " " . $a3 . "<br>";
fix_names();
echo $a1 . " " . $a2 . " " . $a3;

function fix_names() {
    global $a1; $a1 = ucfirst(strtolower($a1));
    global $a2; $a2 = ucfirst(strtolower($a2));
    global $a3; $a3 = ucfirst(strtolower($a3));
    // $a1 = $GLOBALS['a1'];
    // echo "Test " . $GLOBALS['a1'];
}