const input = "Hello";
const reversed = input.split("").reverse().join("");
console.log(reversed); // Output: "olleH"



let score = 10;

if (score < 0 || score > 100) {
    console.log("invalid score");
} else if (score >= 70) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Very good");
} else if (score >= 50) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Poor");
} else {
    console.log("Very poor");
}