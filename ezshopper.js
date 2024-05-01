document.getElementById("startShoppingButton").addEventListener("click", startShoppingButton)

let listOfItems = []

startShoppingButton() /* */

async function startShoppingButton() {
    document.querySelector(".startScreenContent").classList.add("hideContent")
    await sleep(500)
    document.querySelector(".main").classList.remove("mainStartScreen")
    document.querySelector(".projectNameText").classList.add("projectNameTextSmall")
    document.querySelector(".projectNameBetaText").classList.add("projectNameBetaTextSmall")
    document.querySelector(".overlaySpacingGrid").classList.add("overlaySpacingGridCompact")
    await sleep(250)
    document.querySelector(".rightSideContent").innerHTML = loginOrGuestHTML
    document.getElementById("shopAsGuestButton").addEventListener("click", loginAsGuestButton)
    await sleep(250)
    document.querySelector(".loginScreenContent").classList.remove("hideContent")
    await sleep(500)
    await loginAsGuestButton() 
}

const loginOrGuestHTML = `
    <div class="loginScreenContent hideContent">
        <div>
            <button class="material-symbols-outlined circleButton grayButton">
                keyboard
            </button>
            <h5>Sign in</h5>
        </div>
        <h6>OR</h6>
        <div>
            <button class="material-symbols-outlined circleButton" id="shopAsGuestButton">
                account_circle
            </button>
            <h5>Shop as guest</h5>
        </div>
    </div>
`

async function loginAsGuestButton() {
    document.querySelector(".loginScreenContent").classList.add("hideContent")
    await sleep(250)
    document.querySelector(".rightSideContent").innerHTML = shoppingScreenMainHTML
    document.getElementById("codeInput").value = ""
    listOfItems = []
    await sleep(250)
    document.querySelector(".totalWrapper").classList.remove("hideContent")
    document.querySelector(".mainShoppingScreenContainer").classList.remove("hideContent")
}

const shoppingScreenMainHTML  = `
    <div class="mainShoppingScreenContainer hideContent">
        <div class="listOfItems">
            <div>
                <h5>1LB Organic Oats</h5>
                <div class="itemCostContainer">
                    <h5>$3.99</h5>
                </div>
            </div>
            <div>
                <h5>Raspberry Pi 4 8GB RAM with SD Card</h5>
                <div class="itemCostContainer">
                    <p class="discountedItem">-$10.00</p>
                    <h5>$79.99</h5>
                </div>
            </div>
        </div>
    </div>
`

document.getElementById("codeInput").addEventListener("keypress", addEntry);

function addEntry(e) {
    if (e.code == "Enter") {
        console.log(document.getElementById("codeInput").value)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const itemDatabase = [
    {
        "code": "382",
        "name": "1LB Organic Oats",
        "price": 3.99,
        "discount": 0
    },
    {
        "code": "9823",
        "name": "Raspberry Pi 4 8GB RAM with SD Card",
        "price": 89.99,
        "discount": 10
    }
]