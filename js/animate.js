$(document).ready(function () {
    var tl = new TimelineLite();
    tl.to($('.drinks1'), .6, {
        css: {
            opacity: 1
        }
    });
    tl.to($('.drinks2'), .65, {
        css: {
            opacity: 1
        }
    });
    tl.to($('.drinks3'), .66, {
        css: {
            opacity: 1
        }
    });
    tl.to($('.drinks4'), .67, {
        css: {
            opacity: 1
        }
    });
    tl.to($('.drinks5'), .68, {
        css: {
            opacity: 1
        }
    });

});

(function () {

    var myWin = $(window).width();
    var controller = new ScrollMagic.Controller();

    if (myWin > 960) {
        var scene1 = new ScrollMagic.Scene({
                triggerElement: ".pick_fav",
                triggerHook: .9,
                offset: 200
            })

            .setClassToggle(".fav_prod", "visible")
            .addTo(controller)


        var scene2 = new ScrollMagic.Scene({
                triggerElement: ".mapstore",
                triggerHook: .7,
                offset: 50
            })
            .setClassToggle(".store_exp", "visible")
            .addTo(controller)

        var scene3 = new ScrollMagic.Scene({
                triggerElement: ".xmas_blend",
                triggerHook: .7,
                offset: 100
            })
            .setClassToggle(".blend", "visible")
            .addTo(controller)
    } else {
        var scene1 = new ScrollMagic.Scene({
                triggerElement: ".right_fav_imgbox",
                triggerHook: .9,
                offset: 200
            })

            .setClassToggle(".fav_prod", "mob_visible")
            .addTo(controller)


        var scene2 = new ScrollMagic.Scene({
                triggerElement: ".mapstore",
                triggerHook: .7,
                offset: 50
            })
            .setClassToggle(".store_exp", "visible")
            .addTo(controller)

        var scene3 = new ScrollMagic.Scene({
                triggerElement: ".xmas_blend",
                triggerHook: .7,
                offset: 100
            })
            .setClassToggle(".blend", "visible")
            .addTo(controller)

        var scene4 = new ScrollMagic.Scene({
                triggerElement: ".reserve_merry",
                triggerHook: .7,
                offset: 100
            })
            .setClassToggle(".reserve_merry_imgbox", "mob_visible")
            .addTo(controller)
        
        var scene5 = new ScrollMagic.Scene({
                triggerElement: ".left_magazine_imgbox",
                triggerHook: .7,
                offset: 100
            })
            .setClassToggle(".right_magazine_textbox", "mob_visible")
            .addTo(controller)
    }
}())
