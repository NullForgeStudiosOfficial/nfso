
let LastTime = 0;
let DeltaTime = 0;

let MainBackground = document.getElementById("MainBackground")
let MainBackgroundScroll = 0

let ButtonBackgrounds = []
let ButtonBackgroundScroll = 0;
let InfoBoxBackgroundScroll = 0;


let VoidEyesImages = [
    'url("../../UniversalAssets/VoidEyeFull.png")',
    'url("../../UniversalAssets/VoidEyes66.png")',
    'url("../../UniversalAssets/VoidEyes33.png")',
    'url("../../UniversalAssets/VoidEyes0.png")',
]


let LeftRightTransition = document.getElementById("FullLeftRightTransition")
let LeftTransition = document.getElementById("LeftTransition")
let RightTransition = document.getElementById("RightTransition")
let WhichTransitionWeUsing = 0;
let TransitionX = 0;
let TransitionRunning = false;

let SiteTransitionX = 0;
let SiteTransitionRunning = false;

let ChangedPage = false;
let ChangedSite = false;
let PreviousPage = null
let NextPage = null


document.addEventListener("keydown", function(event)
{
    if (event.key === "F12")
    {
        event.preventDefault();
    }
});

document.addEventListener("keydown", function(event)
{
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")
    )
    {
        event.preventDefault();
    }
});

function Randomizer(min,max)
{    
    return Math.floor(Math.random() * (max - min + 1)) + min   
}




async function Start()
{

    ButtonBackgrounds.push(...document.querySelectorAll(".BackButtonBackground"));
    ButtonBackgrounds.push(...document.querySelectorAll(".NormalButtonBackground"));

    BlinkEyes()

    await Sleep(250);
    document.getElementById("StartupBlack").remove();
    LastTime = performance.now();
    requestAnimationFrame(Update);

    ChangedSite = true
    SiteTransitionX = 0;
    SiteTransitionRunning = true
    LeftTransition.style.display = "block";
    WhichTransitionWeUsing = 2
    InfoBoxBackgroundScroll = 0;
    ButtonBackgroundScroll = 0;


}


function Update(CurrentTime)
{
    DeltaTime = (CurrentTime - LastTime) / 1000;
    LastTime = CurrentTime;

    ScrollBackground();
    ScrollButtonBackgrounds();
    ScrollBoxBackgrounds();

    if (TransitionRunning)
    {
        UpdateTransition()
    }

    if (SiteTransitionRunning)
    {
        UpdateSiteTransition()
    }


    requestAnimationFrame(Update);
}

async function ScrollBackground()
{
    MainBackgroundScroll += 100 * DeltaTime;

    MainBackground.style.backgroundPositionX = MainBackgroundScroll + "px";
}

function ScrollButtonBackgrounds()
{
    ButtonBackgroundScroll -= 25 * DeltaTime;

    for (let Button of ButtonBackgrounds)
    {
        Button.style.backgroundPositionY = ButtonBackgroundScroll + "px";
    }
}

function ScrollBoxBackgrounds()
{
    InfoBoxBackgroundScroll += 25 * DeltaTime;

    AuliInfoBoxBack.style.backgroundPositionY = InfoBoxBackgroundScroll + "px";
    AuliButtonBoxBack.style.backgroundPositionY = InfoBoxBackgroundScroll + "px";
    
}


function Sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function BlinkEyes()
{
    const Eye = document.getElementById("VoidEyes");

    while (true)
    {
        Eye.style.backgroundImage = VoidEyesImages[0];

        await Sleep(Math.random() * 3000 + 3000);

        Eye.style.backgroundImage = VoidEyesImages[1];
        await Sleep(75);

        Eye.style.backgroundImage = VoidEyesImages[2];
        await Sleep(75);

        Eye.style.backgroundImage = VoidEyesImages[3];
        await Sleep(75);

        Eye.style.backgroundImage = VoidEyesImages[2];
        await Sleep(75);

        Eye.style.backgroundImage = VoidEyesImages[1];
        await Sleep(75);

        Eye.style.backgroundImage = VoidEyesImages[0];
        await Sleep(75);
    }
}

async function ChangePage(PageID1,PageID2)
{
    PreviousPage = PageID1
    NextPage = PageID2

    QuizTransition = false
    TransitionX = window.innerWidth;
    ChangedPage = false;
    TransitionRunning = true
    LeftRightTransition.style.display = "block";
}

async function ChangeSite()
{
    ChangedSite = true
    SiteTransitionX = window.innerWidth;
    SiteTransitionRunning = true
    RightTransition.style.display = "block";
}

async function StartSite()
{

}

async function LoadSite(SiteString)
{
    while (ChangedSite)
    {
        await Sleep(100)
        continue
    }

    window.location.href = SiteString
}

function UpdateTransition()
{
       TransitionX -= 11000 * DeltaTime;

        let usingthisthingy = null;

        switch(WhichTransitionWeUsing)
        {
            case 0:
                usingthisthingy = LeftRightTransition
                
                break;

                case 1:
                    usingthisthingy = RightTransition
                    break;

                    case 2:
                        usingthisthingy = LeftTransition
                        break;
        }


        usingthisthingy.style.left = TransitionX + "px";

        

        if (!ChangedSite && !ChangedPage && TransitionX + usingthisthingy.offsetWidth / 2 <= window.innerWidth / 2)
        {
            ChangedPage = true;
            PreviousPage.style.display = "none";
            NextPage.style.display = "flex";
            
        }

        if(!ChangedSite && ChangedPage && TransitionX + usingthisthingy.offsetWidth <= 0)
        {
            TransitionRunning = false;
            ChangedPage = false
            TransitionX = window.innerWidth;
            usingthisthingy.style.left = TransitionX + "px";
        }

        
}

function UpdateSiteTransition()
{
    let usingthisthingy = null;

    StopX = 0;

    switch(WhichTransitionWeUsing)
    {
        case 0:
            usingthisthingy = LeftRightTransition    
        break;

        case 1:
            usingthisthingy = RightTransition
            StopX = window.innerWidth - usingthisthingy.offsetWidth + 200;
        break;

        case 2:
            usingthisthingy = LeftTransition
            StopX = window.innerWidth - usingthisthingy.offsetWidth - 2000;
        break;
    }


    if (ChangedSite && SiteTransitionX <= StopX)
    {
            
            SiteTransitionRunning = false;
            WhichTransitionWeUsing = 0;
            ChangedSite = false;
            return
    }

    SiteTransitionX -= 11000 * DeltaTime;
    usingthisthingy.style.left = SiteTransitionX + "px";
    usingthisthingy.style.right = "auto";
}




//  --------------------------------- Auli Page
let AuliPage = document.getElementById("AuliPage");

let AuliExitButton = document.getElementById("AuliExitButton");
let AuliBioButton = document.getElementById("AuliBioButton");
let AuliPersonalButton = document.getElementById("AuliPersonalButton");
let AuliInfoBox = document.getElementById("AuliInfoBox");
let AuliBioInfoBox = document.getElementById("AuliBioInfoBox");
let AuliPersonalInfoBox = document.getElementById("AuliPersonalInfoBox");
let AuliInfoBoxBack = document.getElementById("AuliInfoBoxBack");
let AuliButtonBoxBack = document.getElementById("AuliButtonBoxBack");
let AuliRefButton = document.getElementById("AuliRefButton");


async function AuliTurnOffBoxes()
{
    AuliBioInfoBox.style.display = "none";
    AuliPersonalInfoBox.style.display = "none";
    AuliDevInfoBox.style.display = "none";
}

AuliExitButton.addEventListener("click", function()
{
    WhichTransitionWeUsing = 1
    ChangeSite()
    LoadSite("../index.html")
});

AuliBioButton.addEventListener("click", function()
{
    AuliTurnOffBoxes()
    AuliBioInfoBox.style.display = "block";


});

AuliPersonalButton.addEventListener("click", function()
{
    AuliTurnOffBoxes()
    AuliPersonalInfoBox.style.display = "block";
});

AuliRefButton.addEventListener("click", function()
{
    window.open("../../UniversalAssets/Aulipfp2.png", "_blank");
});

Start()