function getWeatherType(weather) {
    switch (weather) {
        case 1:
            return "Sunny";
        case 2:
            return "Rainy";
        case 3:
            return "Cloudy";
        case 4:
            return "Windy";
        default:
            return "Not defined";
    }
}

console.log(getWeatherType(1));
console.log(getWeatherType(3));
console.log(getWeatherType(5));
