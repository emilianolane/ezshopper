document.getElementById("startShoppingButton").addEventListener("click", startShoppingButton)

let totalPrice = 0

async function fullscreen() {
    await sleep(1000);
    document.documentElement.requestFullscreen();
}

fullscreen()

async function startShoppingButton() {
    fullscreen()
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
    await sleep(250)
    document.getElementById("codeInput").focus();
}

const shoppingScreenMainHTML  = `
    <div class="mainShoppingScreenContainer hideContent">
        <div class="listOfItems" id="listOfItems"></div>
    </div>
`

document.getElementById("codeInput").addEventListener("keypress", addEntry);

function addEntry(e) {
    if (e.code == "Enter") {
        console.log(codeInput.value)
        let codeFound = false
        for (let i in itemDatabase) {
            if (codeInput.value == itemDatabase[i].code) {
                codeFound = true
                let discountHTML = ``
                if (itemDatabase[i].discount != 0) {
                    discountHTML = `<p class="discountedItem">-$${itemDatabase[i].discount.toFixed(2)}</p>`
                }
                document.getElementById("listOfItems").insertAdjacentHTML("beforeend", `
                    <div>
                        <h5>${itemDatabase[i].name}</h5>
                        <div class="itemCostContainer">
                            ${discountHTML}
                            <h5>$${(itemDatabase[i].price-itemDatabase[i].discount).toFixed(2)}</h5>
                        </div>
                    </div>
                `)
                totalPrice += itemDatabase[i].price-itemDatabase[i].discount
                document.getElementById("total").innerText = `$${totalPrice.toFixed(2)}`
            }
        }
        if (!codeFound) {

        }
        codeInput.value = ""
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const itemDatabase = [
    {
        "code": "1655081",
        "name": "Ayrez",
        "price": 9999999999.99,
        "discount": 1.99
    },
    {
        "code": "619659184162",
        "name": "SanDisk 32GB MicroSD Card",
        "price": 15.99,
        "discount": 2
    },
    {
        "code": "X003I9SAVH",
        "name": "3D Printer Filament",
        "price": 29.99,
        "discount": 10
    }
]