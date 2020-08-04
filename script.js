// Generate Random Number
var generateBtn = document.querySelector('.generate-btn');

generateBtn.addEventListener('click', function() {
    var randomNum = Math.floor(1000 + Math.random() * 9000);
    document.querySelector('.pin-generator input').value = randomNum;
    document.getElementById('matched').classList.add('hideMatch');
    document.getElementById('matched').classList.remove('showMatch');
    document.getElementById('didNtMatched').classList.add('hideMatch');
    document.getElementById('didNtMatched').classList.remove('showMatch');
});

// Keypad

let input = document.getElementById("input");

function calculate(data) {
    switch (data) {
        case 'C':
            input.value = "";
            break; 
            
        case '<':
            input.value = input.value.substr(0, input.value.length-1);
            break;

        default:
            input.value += data;
            break;
    }
}

// Submit Button
document.getElementById("submit").addEventListener('click', function() {
    var randomNum = document.getElementById("generate-input").value;
    var inputNum = input.value;
    if (randomNum == inputNum) {
        document.getElementById('matched').classList.add('showMatch');
        document.getElementById('matched').classList.remove('hideMatch');
    } else {
        document.getElementById('didNtMatched').classList.add('showMatch');
        document.getElementById('didNtMatched').classList.remove('hideMatch');
    }
});
