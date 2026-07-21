let LastTime = 0;
let DeltaTime = 0;
let VoidRotation = 0;
let ScanLines = null
let ScanLinePOS = 0;
let Button1 = null
let Button4 = null
let Button5 = null
let Button6 = null
let Button7 = null
let Button8 = null
let Button9 = null
let Button10 = null




function Start()
{
    Button1 = document.getElementById("Button1")
    Button2 = document.getElementById("Button2")
    Button3 = document.getElementById("Button3")
    Button4 = document.getElementById("Button4")
    Button5 = document.getElementById("Button5")
    Button6 = document.getElementById("Button6")
    Button7 = document.getElementById("Button7")
    Button8 = document.getElementById("Button8")
    Button9 = document.getElementById("Button9")
    Button10 = document.getElementById("Button10")
    ScanLines = document.getElementById("ScanLines")

    requestAnimationFrame(Update);
}



function Update(CurrentTime)
{
    DeltaTime = (CurrentTime - LastTime) / 1000;
    LastTime = CurrentTime;

    VoidSpin()
    ScrollLines()

    requestAnimationFrame(Update);
}

Start()

function ScrollLines ()
{
    ScanLinePOS += 5 * DeltaTime;

    ScanLines.style.backgroundPosition = `0px ${ScanLinePOS}px`;
    
    
}




function VoidSpin()
{
    VoidRotation += 75 * DeltaTime;
    const Background = document.getElementById("Background");

    const Size = Math.hypot(
    window.innerWidth,
    window.innerHeight
) *1.5;
    Background.style.width = Size + "px";
Background.style.height = Size + "px";

    Background.style.transform = `rotate(${VoidRotation}deg)`;

}


function Sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function BlinkEyes(ImageID)
{
    const Eye = document.getElementById(ImageID);

    while (true)
    {
        Eye.src = "Assets/VoidEyesFull.png";

        await Sleep(Math.random() * 3000 + 3000);

        Eye.src = "Assets/VoidEyes66.png";
        await Sleep(75);

        Eye.src = "Assets/VoidEyes33.png";
        await Sleep(75);

        Eye.src = "Assets/VoidEyes0.png";
        await Sleep(75);

        Eye.src = "Assets/VoidEyes33.png";
        await Sleep(75);

        Eye.src = "Assets/VoidEyes66.png";
        await Sleep(75);

        Eye.src = "Assets/VoidEyesFull.png";
        await Sleep(75);
    }
}
BlinkEyes("VoidEyes")

async function SanctumBreath()
{
    const sanctum = document.getElementById("Sanctum");

    while (true)
    {
        const scale = 1 + Math.sin(Date.now() * 0.0025) * 0.009;
        sanctum.style.scale = scale;

        await Sleep(16);
    }
}

SanctumBreath()

Button1.addEventListener("click", function()
{
    window.open("https://store.steampowered.com/app/3300520/The_Ardron_Universe/", "_blank");
});



Button2.addEventListener("click", function()
{
    window.open("https://github.com/NullForgeStudiosOfficial/ArdronQuiz", "_blank");
});

//Discord Link
Button3.addEventListener("click", function()
{
    return
});

//DPIntroLink
Button4.addEventListener("click", function()
{
    return
});

Button5.addEventListener("click", function()
{
    window.open("https://www.twitch.tv/nullforgestudiosofficial", "_blank");
});

Button6.addEventListener("click", function()
{
    window.open("https://ko-fi.com/nullforgestudiosofficial", "_blank");
});

Button7.addEventListener("click", function()
{
    window.open("https://github.com/NullForgeStudiosOfficial/WorkLogs", "_blank");
});

Button8.addEventListener("click", function()
{
    return
});
