let LastTime = 0;
let DeltaTime = 0;
let VoidRotation = 0;
let ButtonScrollOffset = 0;

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
let ExtraButton = document.getElementById("ExtraButton")

let LinksPage=  document.getElementById("LinksPage")
let VexPage = document.getElementById("VexesPage")
let AuliPage = document.getElementById("AulisPage")
let PupPage = document.getElementById("PupsPage")
let ExtraPage = document.getElementById("ExtrasPage")

VexPage.style.display = "none";
AuliPage.style.display = "none";
PupPage.style.display = "none";
ExtraPage.style.display = "none";

let LinksBackground = document.getElementById("LinksBackground")
let VexBackground = document.getElementById("VexesBackground")
let AuliBackground = document.getElementById("AulisBackground")
let PupBackground = document.getElementById("PupsBackground")
let ExtrasBackground = document.getElementById("ExtrasBackground")

VexBackground.style.display = "none";
AuliBackground.style.display = "none";
PupBackground.style.display = "none";
ExtrasBackground.style.display = "none";

let LinksBackgroundImage = document.getElementById("LinksBackgroundImage")
let VexBackgroundImage = document.getElementById("VexesBackgroundImage")
let AuliBackgroundImage = document.getElementById("AulisBackgroundImage")
let PupBackgroundImage = document.getElementById("PupsBackgroundImage")
let ExtraBackgroundImage = document.getElementById("ExtrasBackgroundImage")
let extrabackgroundscroll = 0;


let RainCanvas = document.getElementById("Rain");
let RainContext = RainCanvas.getContext("2d");
let RainFontSize = 15;
let RainGrid = [];
let RainHeads = [];
let RainColumns;
let RainRows;
let CharacterList = "ABCDEFJHIJKLMONPQRSTUVWXYZ0123456789";
let HereBeDragons = document.getElementById("HereBeDragons")
let HereBeDragonsAnswers = document.getElementById("HereBeDragonsAnswers")





let SanctumBool = false
let SanctumScale = 0.93;
let SanctumDirection = 1;
const MinScale = 0.93;
const MaxScale = 1.075;
const ScaleSpeed = 0.0385;





function Start()
{

    CreateGrid();
    SpawnHead();

    BlinkEyes("VoidEyes")

    

    SetUpButtonTexture(
    "LinksButton",
    "ButtonVoid.png",
    "Our Work"
    );

    SetUpButtonTexture(
        "VexButton",
        "ButtonGrimlowe.png",
        "Vex Info"
    );

    SetUpButtonTexture(
        "AuliButton",
        "ButtonEimon.png",
        "Auli Info"
    );

    SetUpButtonTexture(
        "PupButton",
        "ButtonElusia.png",
        "Pup Info"
    );

    SetUpButtonTexture(
        "ExtraButton",
        "ButtonVoid.png",
        "Extras"
    );


    requestAnimationFrame(Update);
}



function Update(CurrentTime)
{
    DeltaTime = (CurrentTime - LastTime) / 1000;
    LastTime = CurrentTime;

    VoidSpin()
    ScrollButtons()



    // Vex things
    if (VexPage.style.display == "block")
    {
        const CurrentTimeSeconds = CurrentTime / 1000;
        UpdateSpawning();
        UpdateHeads();
        UpdateCharacters(CurrentTimeSeconds);
        DrawRain(CurrentTimeSeconds);
    }

    // Auli things
    if (AuliPage.style.display == "block")
    {
        
    }

    // Pup things
    if (PupPage.style.display == "block")
    {
        
    }
    

    requestAnimationFrame(Update);
}



function ScrollLines ()
{
    ScanLinePOS += 5 * DeltaTime;

    ScanLines.style.backgroundPosition = `0px ${ScanLinePOS}px`;
    
    
}

function ScrollButtons()
{
    ButtonScrollOffset -= 25 * DeltaTime;

    const Buttons = document.querySelectorAll(".ButtonBackground");

    for (const Button of Buttons)
    {
        Button.style.backgroundPositionY = ButtonScrollOffset + "px";
    }
}

function SetUpButtonTexture(ButtonID, Background, Text)
{
    Button = document.getElementById(ButtonID);
    ButtonsBackground = Button.querySelector(".ButtonBackground");
    ButtonsBackground.style.backgroundImage = `url("Assets/${Background}")`;
    
    ButtonsBorder = Button.querySelector(".ButtonBorder");
    ButtonsBorder.style.backgroundImage = `url("Assets/ButtonBase.png")`;

    ButtonsText = Button.querySelector(".ButtonText");
    ButtonsText.textContent = Text;
    
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



async function SanctumBreath()
{
    while (SanctumBool)
    {
        SanctumScale += SanctumDirection * ScaleSpeed * DeltaTime;

        if (SanctumScale >= MaxScale)
        {
            SanctumScale = MaxScale;
            SanctumDirection = -1;

            await Sleep(75);
        }

        if (SanctumScale <= MinScale)
        {
            SanctumScale = MinScale;
            SanctumDirection = 1;

            await Sleep(75);
        }

        ExtrasBackground.style.scale = SanctumScale;

        await Sleep(3);
    }
}



Button1.addEventListener("click", function()
{
    window.open("https://store.steampowered.com/app/3300520/The_Ardron_Universe/", "_blank");
});



Button2.addEventListener("click", function()
{
    window.open("https://nullforgestudiosofficial.github.io/ArdronQuiz/", "_blank");
});

//Wikilink
Button3.addEventListener("click", function()
{
    return
});

//Discord Link
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

// Discord Archives
Button8.addEventListener("click", function()
{
    return
});

Button9.addEventListener("click", function()
{
    window.open("https://github.com/NullForgeStudiosOfficial/Falatur", "_blank");
});


async function pageresetter()
{
    SanctumBool = false

    LinksPage.style.display = "none";
    VexPage.style.display = "none";
    AuliPage.style.display = "none";
    PupPage.style.display = "none";
    ExtraPage.style.display = "none";

    VexBackground.style.display = "none";
    AuliBackground.style.display = "none";
    PupBackground.style.display = "none";
    ExtrasBackground.style.display = "none";
    LinksBackground.style.display = "none";
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
    CreateGrid();
    SpawnHead();

    
    VexBackground.style.display = "block";
    VexPage.style.display = "block"

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

ExtraButton.addEventListener("click", function()
{
    pageresetter()

    SanctumBool = true
    SanctumBreath()

    ExtrasBackground.style.display = "block";
    ExtraPage.style.display = "block"

});

HereBeDragons.addEventListener("click", function()
{
    
    HereBeDragonsAnswers.style.display = "block";
    HereBeDragons.style.display = "none"

});


function Resize()
{
    let BaseHeight = 1080;
    let BaseFontSize = 20;

    RainFontSize = BaseFontSize * (window.innerHeight/BaseHeight)

    RainCanvas.width = window.innerWidth;
    RainCanvas.height = window.innerHeight;

    RainColumns = Math.ceil(
        RainCanvas.width / RainFontSize
    );

    RainRows = Math.ceil(
        RainCanvas.height / RainFontSize
    );

    CreateGrid();
    RainHeads = [];
}

class RainCharacter
{
    constructor(Row, Character = GetRandomCharacter())
    {
        this.Row = Row;
        this.Character = Character;
        this.CreationTime = performance.now() / 1000;

        this.ChangeTimer = 0;
        this.ChangeInterval = 0.5 + Math.random() * 2;
    }

    Update()
    {
        this.ChangeTimer += DeltaTime;

        if (this.ChangeTimer >= this.ChangeInterval)
        {
            this.ChangeTimer = 0;

            if (Math.random() < 0.5)
            {
                this.Character = GetRandomCharacter();
            }
            this.ChangeInterval = 0.5 + Math.random() * 2;
        }
    }

    GetOpacity(CurrentTime)
    {
        const Age = CurrentTime - this.CreationTime;

        if (Age < 10)
        {
            return 1;
        }

        return Math.max(0, 1 - (Age - 10));
    }

    IsDead(CurrentTime)
    {
        return CurrentTime - this.CreationTime >= 26;
    }
}

class RainHead
{
    constructor(Column)
    {
        this.Column = Column;
        this.Row = 0;

        this.MoveTimer = 0;
        this.MoveInterval = 0.075;
        this.StopChance = 0.0075;
        this.Dead = false;
    }

    

    Update()
    {
        this.MoveTimer += DeltaTime;

        while (this.MoveTimer >= this.MoveInterval)
        {
            this.MoveTimer -= this.MoveInterval;

            this.Row++;

            if (this.Row >= RainRows)
            {
                this.Dead = true;
                return;
            }

            let Character;

            if (Math.random() < 0.090) 
            {
                Character = " ";
            }
            else
            {
                Character = GetRandomCharacter();
            }

            RainGrid[this.Column][this.Row] =
                new RainCharacter(this.Row, Character);

            if (Math.random() < this.StopChance)
            {
                this.Dead = true;
                return;
            }
        }
    }
}

function HasLivingHead(Column)
{
    for (let i = 0; i < RainHeads.length; i++)
    {
        const Head = RainHeads[i];

        if (
            Head.Column === Column &&
            !Head.Dead
        )
        {
            return true;
        }
    }

    return false;
}

function SpawnHead()
{
    const Candidates = [];
    let TotalWeight = 0;

    for (let Column = 0; Column < RainColumns; Column++)
    {
        if (HasLivingHead(Column))
        {
            continue;
        }

        const Score = GetColumnSpawnScore(Column);

        const Weight = Math.max(0.1, Score + 1);

        Candidates.push({
            Column: Column,
            Weight: Weight
        });

        TotalWeight += Weight;
    }

    if (Candidates.length === 0)
    {
        return;
    }

    let Roll = Math.random() * TotalWeight;

    for (let i = 0; i < Candidates.length; i++)
    {
        Roll -= Candidates[i].Weight;

        if (Roll <= 0)
        {
            const Column = Candidates[i].Column;

            const Head = new RainHead(Column);

            RainHeads.push(Head);

            RainGrid[Column][0] =
                new RainCharacter(0);

            return;
        }
    }
}

function HasActiveHead(Column)
{
    if (Column < 0 || Column >= RainColumns)
    {
        return false;
    }

    for (let i = 0; i < RainHeads.length; i++)
    {
        if (
            !RainHeads[i].Dead &&
            RainHeads[i].Column === Column
        )
        {
            return true;
        }
    }

    return false;
}

function CreateGrid()
{
    RainGrid = [];

    for (let Column = 0; Column < RainColumns; Column++)
    {
        RainGrid[Column] = Array(RainRows).fill(null);
    }
}

function UpdateHeads()
{
    for (let i = RainHeads.length - 1; i >= 0; i--)
    {
        const Head = RainHeads[i];

        Head.Update();

        if (Head.Dead)
        {
            RainHeads.splice(i, 1);
        }
    }
}

function UpdateCharacters(CurrentTime)
{
    for (let Column = 0; Column < RainColumns; Column++)
    {
        for (let Row = 0; Row < RainRows; Row++)
        {
            const Character = RainGrid[Column][Row];

            if (Character !== null)
            {
                if (Character.Character !== " ")
                {
                    Character.Update();
                }
                
            
                if(Character.IsDead(CurrentTime))
                {
                    RainGrid[Column][Row] = null;
                }
            }
            
        }
    }
}

function DrawRain(CurrentTime)
{
    RainContext.clearRect(
        0,
        0,
        RainCanvas.width,
        RainCanvas.height
    );

    RainContext.font = `${RainFontSize}px Ardron`;
    RainContext.textAlign = "center";
    RainContext.textBaseline = "middle";

    for (let Column = 0; Column < RainColumns; Column++)
    {
        for (let Row = 0; Row < RainRows; Row++)
        {
            const Character = RainGrid[Column][Row];

            if (Character === null)
            {
                continue;
            }

            const x =
                (Column * RainFontSize) +
                (RainFontSize / 2);

            const y =
                (Row * RainFontSize) +
                (RainFontSize / 2);

            const Opacity =
                Character.GetOpacity(CurrentTime);

            RainContext.fillStyle =
                `rgba(0, 0, 255, ${Opacity})`;

            RainContext.fillText(
                Character.Character,
                x,
                y
            );
        }
    }

    DrawHeads();
}

function DrawHeads()
{
    RainContext.fillStyle = "rgb(0, 197, 197)";

    for (let i = 0; i < RainHeads.length; i++)
    {
        const Head = RainHeads[i];

        if (Head.Row >= RainRows)
        {
            continue;
        }

        const Character =
            RainGrid[Head.Column][Head.Row];

        if (
            Character === null ||
            Character.Character === " "
        )
        {
            continue;
        }

        const x =
            (Head.Column * RainFontSize) +
            (RainFontSize / 2);

        const y =
            (Head.Row * RainFontSize) +
            (RainFontSize / 2);

        RainContext.fillText(
            Character.Character,
            x,
            y
        );
    }
}

function GetRandomCharacter()
{
    return CharacterList[
        Math.floor(Math.random() * CharacterList.length)
    ];
}

function UpdateSpawning()
{
    const SpawnChancePerSecond = 6;

    if (Math.random() < SpawnChancePerSecond * DeltaTime)
    {
        SpawnHead();
    }
}

function GetColumnSpawnScore(Column)
{
    if (HasLivingHead(Column))
    {
        return -1000;
    }

    let Score = 0;

    if (!ColumnHasText(Column))
    {
        Score += 3;
    }

    if (!ColumnHasText(Column - 1))
    {
        Score += 2;
    }

    if (!ColumnHasText(Column + 1))
    {
        Score += 2;
    }
    if (HasLivingHead(Column - 1))
    {
        Score -= 3;
    }

    if (HasLivingHead(Column + 1))
    {
        Score -= 3;
    }

    Score += Math.random() * 3;

    return Score;
}

function ColumnHasText(Column)
{
    if (Column < 0 || Column >= RainColumns)
    {
        return false;
    }

    for (let Row = 0; Row < RainRows; Row++)
    {
        if (RainGrid[Column][Row] !== null)
        {
            return true;
        }
    }

    return false;
}


Resize();
window.addEventListener("resize", Resize);
Start()

