// Mutation Multipliers
const SILVER = 2
const GOLD = 4
const CORRUPTED = 6
const DIAMOND = 8
const GEM = 10
const CHROME = 12
const HOLOGRAM = 15
const VOID = 35
const SECRET = 50
const RAINBOW = 100
const ONYX = 175

// return emoji given score
function getEmoji(totalScore) {
    if (totalScore >= 4000) return "👑"
    if (totalScore >= 3600) return "🏆"
    if (totalScore >= 3200) return "⚡"
    if (totalScore >= 2800) return "💎"
    if (totalScore >= 2400) return "🌟"
    if (totalScore >= 2000) return "⭐"
    if (totalScore >= 1600) return "🔥"
    if (totalScore >= 1200) return "😎"
    if (totalScore >= 800) return "😊"
    if (totalScore >= 500) return "🙂"
    if (totalScore >= 200) return "😐"
    return "😕"
}

// handle slot add
const addSlot = document.querySelector(".add-slot")
const addSlotButton = document.getElementById("add-slot")

let visibleSlots = 1
addSlotButton.addEventListener("click", () => {
    if (visibleSlots < gavels.length) {
        gavels[visibleSlots].classList.remove("hidden-slot")

        previousRemoveSlot = gavels[visibleSlots - 1].querySelector(".remove-slot")
        if (previousRemoveSlot) previousRemoveSlot.style.display = "none" 

        visibleSlots++

        if (visibleSlots === gavels.length) {
            addSlot.style.display = "none"
        }
    }
})


// handle logic for each gavel calculator
const gavels = document.querySelectorAll(".gavel")
gavels.forEach(gavel => {
    const submitButton = gavel.querySelector(".submit")
    const score = gavel.querySelector(".score")
    const gavelImg = gavel.querySelector(".gavel-img")
    const scoreEmoji = gavel.querySelector(".emoji")

    submitButton.addEventListener("click", () => {
        const silver = parseInt(gavel.querySelector(".silver_i").value) || 0
        const gold = parseInt(gavel.querySelector(".gold_i").value) || 0
        const corrupted = parseInt(gavel.querySelector(".corrupted_i").value) || 0
        const diamond = parseInt(gavel.querySelector(".diamond_i").value) || 0
        const gem = parseInt(gavel.querySelector(".gem_i").value) || 0
        const chrome = parseInt(gavel.querySelector(".chrome_i").value) || 0
        const hologram = parseInt(gavel.querySelector(".hologram_i").value) || 0
        const voidMutation = parseInt(gavel.querySelector(".void_i").value) || 0
        const secret = parseInt(gavel.querySelector(".secret_i").value) || 0
        const rainbow = parseInt(gavel.querySelector(".rainbow_i").value) || 0
        const onyx = parseInt(gavel.querySelector(".onyx_i").value) || 0

        const totalScore =
            silver * SILVER +
            gold * GOLD +
            corrupted * CORRUPTED +
            diamond * DIAMOND +
            gem * GEM +
            chrome * CHROME +
            hologram * HOLOGRAM +
            voidMutation * VOID +
            secret * SECRET +
            rainbow * RAINBOW +
            onyx * ONYX

        const emoji = getEmoji(totalScore)

        if (totalScore !== 0) {
            gavelImg.style.display = "none"
            score.textContent = `Score: ${totalScore}`
            scoreEmoji.textContent = emoji
            
        } else {
            gavelImg.style.display = "block"
            score.textContent = "Score: ???"
            scoreEmoji.textContent = ""
        }
    })

    const removeSlotButton = gavel.querySelector(".remove-slot")
    
    if (removeSlotButton) removeSlotButton.addEventListener("click", () => {
        gavels[visibleSlots - 1].classList.add("hidden-slot")
        addSlot.style.display = "flex"

        previousRemoveSlot = gavels[visibleSlots - 2].querySelector(".remove-slot")
        if (previousRemoveSlot) previousRemoveSlot.style.display = "block" 

        visibleSlots -= 1
    })
})


// handle theme switch
themeSlider = document.querySelector(".slider-input")

let darkMode = localStorage.getItem("darkMode") === "true"
themeSlider.checked = darkMode

if (darkMode) document.documentElement.classList.toggle('dark')

themeSlider.addEventListener("change", () => {
    darkMode = !darkMode

    document.documentElement.classList.toggle('dark')
    localStorage.setItem("darkMode", darkMode);
})