import $ from 'jquery'
$('.nav-bar button.close').on('click', (e) => {
    let items = $(e.target).siblings().not('.nav-bar .show-bar')
    items.toggle(() => {
        $(this).css('display', 'block')
    }, () => {
        $(this).css('display', 'none')
    })
/*     $(window).on('resize', () => {
        $('.nav-bar button.close').siblings().css('display', 'block')
    }) */
})
