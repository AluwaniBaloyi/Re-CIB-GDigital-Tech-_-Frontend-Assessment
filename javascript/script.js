function background (selector, sld_args) {

    function empty_img(x) {
        if (x) {
            return "<img src='" + x + "'>";
        } else {
            return "";
        }
    }

    var def_del = 3000;

    var p = document.createElement("div");
    p.innerHTML = " ";
    p.classList.add("slide-list");

    document.body.insertBefore(p, document.body.firstChild);
    sld_args.slide.forEach(function(v, i) {
        if (v) {
            document.querySelector(".slide-list").innerHTML += empty_img(v);
            if (typeof sld_args.delay[i] == 'undefined' || typeof sld_args.delay[i] == '' || sld_args.delay[i] == 0) {
                sld_args.delay[i] = def_del;
            }
        }

    });

    document.querySelector(".slide-list").style.display = "none";


    document.querySelector(selector).style.backgroundSize = "cover";
    document.querySelector(selector).style.backgroundRepeat = "no-repeat";
    document.querySelector(selector).style.backgroundPosition = "center center";


    setTimeout(function() {
        //add various style on selector
        if (typeof sld_args.transition_timing === 'undefined') {
            sld_args.transition_timing = "ease-out";
        }
        if (typeof sld_args.transition_duration === 'undefined') {
            sld_args.transition_duration = 2000;
        }
        var transition = "all " + sld_args.transition_duration + 'ms ' + sld_args.transition_timing;
        document.querySelector(selector).style.WebkitTransition = transition;
        document.querySelector(selector).style.MozTransition = transition;
        document.querySelector(selector).style.MsTransition = transition;
        document.querySelector(selector).style.OTransition = transition;
        document.querySelector(selector).style.transition = transition;
    }, 100);


    var n = 1;
    var li = 0;

    function slider() {
        sld_args.slide.forEach(function(vvv, iii) {
            if (n > 1) {
                var delay = li;
                setTimeout(function() {
                    document.querySelector(selector).style.backgroundImage = "url('" + vvv + "')";
                }, delay);

                li = li + sld_args.delay[iii];
            } else {

                n++;
                li = sld_args.delay[iii];
                document.querySelector(selector).style.backgroundImage = "url('" + vvv + "')";

            }

        });

    };

    slider();
    setInterval(function() {
        slider();
    }, sld_args.delay.length);
}

background ("body",
    {
        slide: ["images/image-1.jpg","images/image-2.jpg","images/image-3.jpg","images/image-4.jpg"],

        delay: [10000, 10000, 10000, 10000]
    }
);
