let energy = 50;
let happiness = 50;
let food = 5;

function updateStats() {
    document.getElementById("energy").textContent = energy;
    document.getElementById("happiness").textContent = happiness;
    document.getElementById("food").textContent = food;
}

function feed() {
    if (food > 0) {
        energy = Math.min(energy + 10, 100);
        happiness = Math.min(happiness + 5, 100);
        food--;
        updateStats();
        alert("Hayvan beslendi!");
    } else {
        alert("Yemek stoğunuz yok! Yemek bulmanız gerekiyor.");
    }
}

function play() {
    if (energy >= 10) {
        energy -= 10;
        happiness = Math.min(happiness + 15, 100);
        updateStats();
        alert("Hayvan oynadı!");
    } else {
        alert("Hayvan çok yorgun, enerjiye ihtiyacı var.");
    }
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    updateStats();
    alert("Hayvan uyudu!");
}

function findFood() {
    food += 3;
    updateStats();
    alert("Yeni yemek bulundu!");
}

// Sayfa yüklendiğinde başlangıç değerlerini göster
updateStats();