import $ from 'jquery'
var items_nav_bar
$('.nav-bar button.close').on('click', (e) => {
    items_nav_bar = $(e.target).siblings().not('.nav-bar .show-bar')
    items_nav_bar.toggle(() => {
        $(this).css('display', 'grid')
    }, () => {
        $(this).css('display', 'none')
    })
})
$(window).on('resize', () => {
    if (items_nav_bar) {
        items_nav_bar.css('display', 'grid')
    }
})
