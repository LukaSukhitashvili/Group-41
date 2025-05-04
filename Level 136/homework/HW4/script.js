let countriesMap = new Map()

countriesMap.set("georgia", "tbilisi")
countriesMap.set("spain", "madrid")
countriesMap.set("italy", "rome")
countriesMap.set("france", "paris")
countriesMap.set("germany", "berlin")

for (let [country, capital] of countriesMap) {
  console.log(`the capital of ${country} is ${capital}`)
}
