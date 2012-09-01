Package.describe({
    summary: "Tipsy - Facebook-style tooltip plugin for jQuery"
});

Package.on_use(function (api) {
    api.add_files([
        "tipsy/images/tipsy.gif",
        "tipsy/javascripts/jquery.tipsy.js",
        "tipsy/stylesheets/tipsy.css"
    ]
        , 'client');
});