// alert("hey")
let str = "";
let btns = document.querySelectorAll("button");
Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", function (e) {
        var audio = new Audio("key.mp3");
        audio.play();
        console.log(e.target);
       
        if(ans.includes(e.target.innerHTML)){
            // entered letter -> place in order
            let posi = ans.indexOf(e.target.innerHTML) + 1;
            document.querySelector("#res").innerHTML = document.querySelector("#res").innerHTML + e.target.innerHTML
            if(document.querySelector("#res").innerHTML == ans ){
                document.querySelector("#mod").innerHTML = "YOU WON HURRAYYY!!!"
            }
        }
        else{
            mistakes++
            document.querySelector("#mist").innerHTML = mistakes;
            if(mistakes== maxAttempts){
                document.querySelector("#mod").innerHTML = "YOU LOST SORRY TRY AGAIN"
            }
        }
    })
})

const langs = [
    "python",
    "javaScript",
    "java",
    "c",
    "typeScript",
    "php",
    "ruby",
    "swift",
    "kotlin",
    "go",
    "rust",
    "dart",
    "sql",
]
let maxAttempts = 6;
let ans = "";
let mistakes = 0;
let guessed = [];

function randomLang(){
    let random = Math.floor(Math.random()*langs.length );
    console.log(langs[random]);
    console.log(random);
    ans = langs[random];
    document.querySelector("#ran").innerHTML = ans;
}
