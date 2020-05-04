function getRandomImage() {
    var images = ["run", "tie"];
    return images[Math.floor(Math.random() * images.length)];
}

function translateText(lang) {

    var translate = function (jsdata)
    {
        $("[tkey]").each (function (index)
        {
            var strTr = jsdata [$(this).attr ("tkey")];
            $(this).html (strTr);
        });
    };
    $.getJSON("lang/"+lang+".json", translate);
}


// MAIN
$(document).ready(function() {
    $("#ln-pic").attr("src", "img/profile_" + getRandomImage() + ".png");
    var langs = ["pt", "en"];
    var lang = "pt";
    var other_lang = "en";

    var url = window.location.href;
    if (url.indexOf("?") != -1) { // Parameters exist in URL Query String
        var params = url.split("?")[1].split("&");
        for (var i = 0; i < params.length; i++) {
            var temp = params[i].split("=");
            var key   = temp[0];
            var value = temp[1];
            if (key == "lang") {
                if(jQuery.inArray(value, langs)) {
                    if (value == "en") {
                        lang = "en";
                        other_lang = "pt";
                    }
                }
            }
        }
    }

    $("#flag_lang").attr("src", "img/flag_" + other_lang + ".png");
    $("#flag_url").attr("href", "?lang=" + other_lang);

    translateText(lang);
});
