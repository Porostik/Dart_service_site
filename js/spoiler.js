$(function () {
    $(document).on('click', '.services-item', function (e) {
        const wrap = $('.services-item.active')
        if(!checkTarget($(e.target))) return
        const target = findWrapp($(e.target))
        if(target == undefined) {
            return
        }

        if (wrap.attr('id') != target.parent().attr('id')) {
            console.log(wrap)
            wrap.toggleClass('active').find('.services-item-body').slideToggle()
        }

        target.parent().toggleClass('active').find('.services-item-body').slideToggle()
    })
})

const checkTarget = (target) => {
    if($(target)[0].tagName == 'P' ) {
        return false
    }
    return true
}

const findWrapp = (targetItem) => {
    let target = targetItem

    if(target.attr('class').split(' ')[0] == 'services-item') {
        console.log($(target))
        return $(target).children('div.services-item-head')
    }

    while (true) {
        if(target.attr('class') == 'services') {
            return
        }
            console.log(target)
        if (target.attr('class').split(' ')[0] != 'services-item-head') {
            target = target.parent()
            console.log(target.attr('class').split(' ')[0])
            continue
        }
        return target
    }
}