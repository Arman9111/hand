//https://teachablemachine.withgoogle.com/models/4iKMYrSlZ/

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (Burrito) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + Burrito + '"/>'
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4iKMYrSlZ/model.json', modelLoaded)

function modelLoaded() {
    console.log('Model Loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is " + predicition_1;
    speak_data_2 = "And the Seconed Prediction is " + predicition_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}