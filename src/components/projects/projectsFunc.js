// function checks url and hides the active project item container link
const urlCheck = () => {
    const target = window.location.pathname
    const sftSamsungContainer = document.querySelector('#sftSamsung')
    const frsVerizonContainer = document.querySelector('#frsVerizon')
    const aboveAllSecurityContainer = document.querySelector('#aboveAllSecurity')
    const provideServicesContainer = document.querySelector('#provideServices')
    const myWeatherContainer = document.querySelector('#myWeather')
    const foodSearchesContainer = document.querySelector('#foodSearches')
    const triviaGameContainer = document.querySelector('#triviaGame')
    const shoppingListContainer = document.querySelector('#shoppingList')
    const homeFinderContainer = document.querySelector('#homeFinder')

   switch (target) {
        case '/sft-samsung':
            sftSamsungContainer.style.display = 'none'
            break
        case '/frs-verizon':
            frsVerizonContainer.style.display = 'none'
             break
        case '/above-all-security':
            aboveAllSecurityContainer.style.display = 'none'
            break
        case '/provide-services':
            provideServicesContainer.style.display = 'none'
            break
        case '/my-weather':
            myWeatherContainer.style.display = 'none'
            break
        case '/food-searches':
            foodSearchesContainer.style.display = 'none'
            break
        case '/trivia-game':
            triviaGameContainer.style.display = 'none'
            break
        case '/shopping-list':
            shoppingListContainer.style.display = 'none'
            break
        case '/home-finder':
            homeFinderContainer.style.display = 'none'
            break
        default:
            break
    }
}

export default urlCheck