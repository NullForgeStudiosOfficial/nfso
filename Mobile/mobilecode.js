

let Button1 = document.getElementById("Button1")
let Button2 = document.getElementById("Button2")
let Button3 = document.getElementById("Button3")
let Button4 = document.getElementById("Button4")
let Button5 = document.getElementById("Button5")
let Button6 = document.getElementById("Button6")
let Button7 = document.getElementById("Button7")
let Button8 = document.getElementById("Button8")
let Button9 = document.getElementById("Button9")
let Button10 = document.getElementById("Button10")

let LinksButton = document.getElementById("LinksButton")
let VexButton = document.getElementById("VexButton")
let AuliButton = document.getElementById("AuliButton")
let PupButton = document.getElementById("PupButton")


let LinksPage=  document.getElementById("LinksPage")
let VexesPage = document.getElementById("VexesPage")
let AuliPage = document.getElementById("AulisPage")
let PupPage = document.getElementById("PupsPage")

let LinksBackground = document.getElementById("LinksBackground")
let VexesBackground = document.getElementById("VexesBackground")
let AuliBackground = document.getElementById("AulisBackground")
let PupBackground = document.getElementById("PupsBackground")

VexesPage.style.display = "none";
AuliPage.style.display = "none";
PupPage.style.display = "none";

VexesBackground.style.display = "none";
AuliBackground.style.display = "none";
PupBackground.style.display = "none";

let MobileWarning = document.getElementById("MobileWarning")
let CloseWarning = document.getElementById("CloseWarning")



Button1.addEventListener("click", function()
{
    window.open("https://store.steampowered.com/app/3300520/The_Ardron_Universe/", "_blank");
});


//ArdronQuiz
Button2.addEventListener("click", function()
{
    window.open("https://nullforgestudiosofficial.github.io/ArdronQuiz/", "_blank");
});

//Wikilink
Button3.addEventListener("click", function()
{
    // WIKI
    return
});

//Discord Link
Button4.addEventListener("click", function()
{
    return
});

//Twitch
Button5.addEventListener("click", function()
{
    window.open("https://www.twitch.tv/nullforgestudiosofficial", "_blank");
});

//Kofi
Button6.addEventListener("click", function()
{
    window.open("https://ko-fi.com/nullforgestudiosofficial", "_blank");
});

//WorkLogs
Button7.addEventListener("click", function()
{
    window.open("https://github.com/NullForgeStudiosOfficial/WorkLogs", "_blank");
});

// Discord Archives
Button8.addEventListener("click", function()
{
    window.open("https://github.com/NullForgeStudiosOfficial/DiscordArchives", "_blank");
    return
});

Button9.addEventListener("click", function()
{
    window.open("https://github.com/NullForgeStudiosOfficial/Falatur", "_blank");
});


async function pageresetter()
{

    document.getElementById("ScrollSpace").scrollTop = 0;
    SanctumBool = false
    StaticPlayBool = false

    LinksPage.style.display = "none";
    VexesPage.style.display = "none";
    AuliPage.style.display = "none";
    PupPage.style.display = "none";

    VexesBackground.style.display = "none";
    AuliBackground.style.display = "none";
    PupBackground.style.display = "none";
    LinksBackground.style.display = "none";
    StaticBool = false
}

LinksButton.addEventListener("click", function()
{
    pageresetter()

    LinksBackground.style.display = "block";
    LinksPage.style.display = "block"


    
});

VexButton.addEventListener("click", function()
{
    pageresetter()

    VexesBackground.style.display = "block";
    VexesPage.style.display = "block"

});

AuliButton.addEventListener("click", function()
{
    pageresetter()


    AuliBackground.style.display = "block";
    AuliPage.style.display = "block"

});

PupButton.addEventListener("click", function()
{
    pageresetter()

    PupBackground.style.display = "block";
    PupPage.style.display = "block"


});


CloseWarning.addEventListener("click", function()
{

    MobileWarning.style.display = "none";


});


