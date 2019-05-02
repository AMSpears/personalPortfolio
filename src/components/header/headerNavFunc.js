// function to access links in mobile version
const UpdateHeader = () => {
    const menuItems = document.querySelectorAll('.linksContainer')
    const menuOpen = document.querySelector('#menuIcon')
    const menuExit = document.querySelector('#menuExitIcon')

    if (window.innerWidth < 768) {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.toggle('active');
            menuItems[i].addEventListener('click', UpdateHeader, false)
        }
    }

    if (document.querySelector('.active') !== null) {
        menuOpen.style.display = 'none'
        menuExit.style.display = 'block'
                    console.log(menuItems)

    } else {
        menuOpen.style.display = 'block'
        menuExit.style.display = 'none'
                    console.log(menuItems)

    }
}

export default UpdateHeader