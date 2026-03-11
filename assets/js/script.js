const navbarNav = document.getElementById("navbarNavLinks")
const searchBar = document.querySelector('.search-bar')

/*============ Event Listener per spostare gli elementi dell'header sullo scroll ============*/
window.addEventListener('scroll', () => {
    if (window.scrollY >= 0 && window.scrollY <= 50) {
        navbarNav.classList.remove('outside')
        searchBar.classList.remove('shrink')
    } else {
        navbarNav.classList.add('outside')
        searchBar.classList.add('shrink')
    }
})

