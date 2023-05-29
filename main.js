function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/S9Ess_PGE/model.json", modelloaded);
}
function modelloaded() {
    console.log("model is loaded");
    classifier.classify(gotResults);
}
dog = 0;
cat = 0;
lion = 0;
cow = 0
function gotResults(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        r = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        sound = result[0].label;
        document.getElementById("detected_animals").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("result_animal").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("detected_sound").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("result_sound").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("result_sound").innerHTML = sound;
        if (sound == "Barking") {
            document.getElementById("animalimg").src = "dog.png";
            dog = dog + 1;
            console.log("Dog", dog);
            document.getElementById("result_animal").innerHTML = "Dog - " + dog;
        }
        if (sound == "Meowing") {
            document.getElementById("animalimg").src = "cat.png";
            cat = cat + 1;
            console.log("Cat", cat);
            document.getElementById("result_animal").innerHTML = "Cat - " + cat;
        }
        if (sound == "Roaring") {
            document.getElementById("animalimg").src = "liom.png";
            lion = lion + 1;
            console.log("Lion", lion);
            document.getElementById("result_animal").innerHTML = "Lion - " + lion;
        }
        if (sound == "Mooing") {
            document.getElementById("animalimg").src = "cow.png";
            cow = cow + 1;
            console.log("Cow", cow);
            document.getElementById("result_animal").innerHTML = "Cow - " + cow;
        }
        if (sound == "Background Noise") {
            document.getElementById("animalimg").src = "ear.png";
        }

    }
}

