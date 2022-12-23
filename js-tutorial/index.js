document.querySelector(".class1").addEventListener('click', () => {
    console.log("Hey div 1 clicked")
})

document.querySelector(".class2").addEventListener('click', () => {
    document.querySelector(".p-class").innerHTML = "Hey div 2 hovered"
})

document.querySelector(".class3").addEventListener('mouseout', () => {
    console.log("Hey div 3 hovered")
})
