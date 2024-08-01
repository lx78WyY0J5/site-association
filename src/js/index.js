index();

async function index() {
    console.info("Loading website");
    await Metadata();
    await includes();
    await pages();
}

async function Metadata() {
    document.title = "site-association 📰";

    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = "/assets/icon/icone.png";
    document.head.appendChild(link);
}

async function includes() {
    await styles();

    console.info("Loading includes");

    await include_html("https://lx78wyy0j5.github.io/site-association/src/html/header.html", "body", false);

    await include_html("https://lx78wyy0j5.github.io/site-association/src/html/content.html", "body", false);
}

async function styles() {
    console.info("Loading style");

    await include_css("https://lx78wyy0j5.github.io/site-association/src/css/user-agent.css");

    await include_css("https://lx78wyy0j5.github.io/site-association/src/css/header.css");
    await include_css("https://lx78wyy0j5.github.io/site-association/src/css/body.css");
}

async function pages() {
    console.info("Loading custom page");
    if (pathNameMatchPage("/", true) || pathNameMatchPage("/index", true)) {
        await include_html("https://lx78wyy0j5.github.io/site-association/src/html/home.html", "contentArticle", true);
        await include_css("https://lx78wyy0j5.github.io/site-association/src/css/home.css");
    }

    else if (pathNameMatchPage("site-association/racing", false) && await pageRacing()) { }
    else if (pathNameMatchPage("site-association/events", false) && await pageEvents()) { }
    else if (pathNameMatchPage("site-association/news", false) && await pageNews()) { }

    else {
        /* await includes();

        await include_css("https://lx78wyy0j5.github.io/site-association/src/css/404.css");
        await include_html("https://lx78wyy0j5.github.io/site-association/src/html/content/404.html", "contentArticle", true);
        console.warn("Erreur : 404");

        if (pathNameMatchPage("/404", true)) {
            await include_html("https://lx78wyy0j5.github.io/site-association/src/html/content/404-custom.html", "erreur", true);
        } */
    }
}

function pathNameMatchPage(path, strict) {
    var pathname = getShortPathname();
    if (strict === true) {
        if (path.toLowerCase() === pathname.toLowerCase()) {
            console.info("Loading : " + pathname);
            return true;
        }
    }
    else if (strict === false) {
        var lowerCasePath = path.toLowerCase();
        if (pathname.startsWith(lowerCasePath.toLowerCase())) {
            console.info("Finding : " + lowerCasePath + "/...");
            return true;
        }
    }
    return false;
}

function getShortPathname() {
    var path = window.location.pathname;
    path = path.replace(".html", "");
    return path;
}

async function pageRacing() {
    return true;
}

async function pageEvents() {
    return true;
}

async function pageNews() {
    return true;
}