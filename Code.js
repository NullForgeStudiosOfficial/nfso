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

let SanctumBool = false
let SanctumScale = 0.93;
let SanctumDirection = 1;
const MinScale = 0.93;
const MaxScale = 1.075;
const ScaleSpeed = 0.0385;

let PupSky = document.getElementById("Sky")
let PupStatic = document.getElementById("Static")
let PupGrass = document.getElementById("PupGrass")
let Rocks = document.querySelectorAll(".Rock");
let Coins = document.querySelectorAll(".Coin");
let Clouds = document.querySelectorAll(".Cloud");
let PupCurrentChannel = 1
let PupScore = 0
let PupCoinAmount = 0
let PupGameTime = 0
let PupLives = 3
let PupSpeed = 1
let PupAnimationSpeed = 300
let GrassScrollNumber = 0
let StaticImages = [
    "Assets/Static1.png",
    "Assets/Static2.png",
    "Assets/Static3.png",
    "Assets/Static4.png",
    "Assets/Static5.png"
];

let ChannelNumberImages =
[
    "Assets/Green0.png",
    "Assets/Green1.png",
    "Assets/Green2.png",
    "Assets/Green3.png",
    "Assets/Green4.png",
    "Assets/Green5.png",
    "Assets/Green6.png",
    "Assets/Green7.png",
    "Assets/Green8.png",
    "Assets/Green9.png"

]


let StaticBool = false
let StaticPlayBool = false

let PupChannels = [
    document.getElementById("Channel1"),
    document.getElementById("Channel2"),
    document.getElementById("Channel3"),
    document.getElementById("Channel4"),
    document.getElementById("Channel5"),
    document.getElementById("Channel6"),
    document.getElementById("Channel7"),
    document.getElementById("Channel8"),
    document.getElementById("Channel9"),
    document.getElementById("Channel10"),
    document.getElementById("Channel11"),
    document.getElementById("Channel12"),
    document.getElementById("Channel13"),
    document.getElementById("Channel14"),
    document.getElementById("Channel15"),
    document.getElementById("Channel16"),
    document.getElementById("Channel17"),
    document.getElementById("Channel18"),
    document.getElementById("Channel19"),
    document.getElementById("Channel20"),
    document.getElementById("Channel21"),
    document.getElementById("Channel22"),
    document.getElementById("Channel23"),
    document.getElementById("Channel24"),
    document.getElementById("Channel25"),
    document.getElementById("Channel26"),
    document.getElementById("Channel27"),
    document.getElementById("Channel28"),
    document.getElementById("Channel29"),
    document.getElementById("Channel30")
];

let PupPowerButton =document.getElementById("PupPowerButton");
let PupVolumeUpButton =document.getElementById("PupVolumeUpButton");
let PupVolumeDownButton =document.getElementById("PupVolumeDownButton");
let PupChannelUpButton =document.getElementById("PupChannelUpButton");
let PupChannelDownButton =document.getElementById("PupChannelDownButton");

let NumberLeft =document.getElementById("NumberLeft");
let NumberMiddleLeft =document.getElementById("NumberMiddleLeft");
let NumberMiddleRight =document.getElementById("NumberMiddleRight");
let NumberRight =document.getElementById("NumberRight");

let TVOn = false

let OnChannel3 = false;
let GameStarted = false;

let PupPowerOn = document.getElementById("PupPowerOn");

let PupVolume = 25

let PupGameMusic = new Audio();

let PupSoundEffects = new Audio();

let ScanLines =document.getElementById("ScanLines");

let ScanLinePOS = 0 

let PupStartGameButton = document.getElementById("StartButton")
let PupMenuHead = document.getElementById("PupHead")
let PupWinking = [
    "Assets/DogWink1.png",
    "Assets/DogWink2.png",
    "Assets/DogWink3.png",
    "Assets/DogWink2.png",
    "Assets/DogWink1.png",
    "Assets/DogHead.png",
]
let PupHeadPosition = 0
let PupDown = false

let PupStartScreen = document.getElementById("StartScreen")
let PupHeadScreen = document.getElementById("PupLivesHead")
let PupLivesScreen = document.getElementById("PupLives")
 
let GameTitle = document.getElementById("GameTitle")

let GameInfoBar = document.getElementById("GameInfoBar")

let InfoBarScore = document.getElementById("PupScore")
let InfoBarCoins = document.getElementById("PupCoins")
let InfoBarTime = document.getElementById("PupTime")

let PupSprite = document.getElementById("PupSprite")
let PupRunning = [
    "Assets/PupRun1.png",
    "Assets/PupRun2.png",
    "Assets/PupRun3.png",
]

let PupRockImages = [
    "Assets/Rock1.png",
    "Assets/Rock2.png",
    "Assets/Rock3.png",
    "Assets/Rock4.png",
    "Assets/Rock5.png",
    "Assets/Rock6.png",
    "Assets/Rock7.png",
]

let PupCloudImages = [
    "Assets/Cloud1.png",
    "Assets/Cloud2.png",
    "Assets/Cloud3.png",
    "Assets/Cloud4.png",
    "Assets/Cloud5.png",
]

let ScreenGracePeriod = false
let GrassSpeed = 150

let PupHitBox = document.getElementById("PupHitBox");

let PupRocks = [];
let PupCoins = [];
let PupClouds = [];

let BaseRockSpawnMin = 3000
let BaseRockSpawnMax = 4000
let RockMax = 3

let BaseCoinSpawnMin = 5000
let BaseCoinSpawnMax = 10000
let CoinMax = 2
let CoinMaxHeight = 50
let CoinMinHeight = 35
let CoinRockMinDistance = 100
let RockMinDistance = 500;

let BaseCloudSpawnMin = 1000
let BaseCloudSpawnMax = 3000
let CloudMax = 6
let CloudMinHeight = 60
let CloudMaxHeight = 80


let Jump = document.getElementById("Jump");
let JumpScreen = document.getElementById("JumpScreen")
let PupAirTime = 1000
let PupJumped = false
let PupJumping = false;
let PupYVelocity = 0;
let PupY = 0;
let PupLastHighScore = 0
let PupLastHighScoreText = document.getElementById("LastHighScore")


//===========================================================

function Start()
{

    CreateGrid();
    SpawnHead();

    BlinkEyes("VoidEyes")

    PupLastHighScoreText.innerText = `Last High Score: ${PupLastHighScore}`;

    

    SetUpButtonTexture(
    "LinksButton",
    "ButtonVoid.png",
    "Our Work",
    "Lexend"
    );

    SetUpButtonTexture(
        "VexButton",
        "ButtonGrimlowe.png",
        "Vex Info",
        "Ardron"
    );

    SetUpButtonTexture(
        "AuliButton",
        "ButtonEimon.png",
        "Auli Info",
        "Skranji"
    );

    SetUpButtonTexture(
        "PupButton",
        "ButtonElusia.png",
        "Pup Info",
        "Lilita"
    );

    SetUpButtonTexture(
        "ExtraButton",
        "ButtonVoid.png",
        "Extras",
        "Lexend"
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
       ScrollLines()

       if (OnChannel3)
       {
            UpdateClouds();
       }

       if (GameStarted)
       {
            UpdatePupTimeAndScore()
            GrassScroll()
            CheckPupCollisions();
            UpdateRocks();
            
            UpdateCoins();
            UpdatePupJump();

       }
    }
    

    requestAnimationFrame(Update);
}

function ScrollLines()
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

function SetUpButtonTexture(ButtonID, Background, Text,FontFamily)
{
    Button = document.getElementById(ButtonID);
    ButtonsBackground = Button.querySelector(".ButtonBackground");
    ButtonsBackground.style.backgroundImage = `url("Assets/${Background}")`;
    
    ButtonsBorder = Button.querySelector(".ButtonBorder");
    ButtonsBorder.style.backgroundImage = `url("Assets/ButtonBase.png")`;

    ButtonsText = Button.querySelector(".ButtonText");
    ButtonsText.style.fontFamily = FontFamily
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

    document.getElementById("ScrollSpace").scrollTop = 0;
    SanctumBool = false
    StaticPlayBool = false

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


// ---------------------------------------------------------------------------

async function RandomStatic()
{

    while(StaticPlayBool)
    {
        await Sleep(25)
        let RandomImage = Math.floor(Math.random() * StaticImages.length);

        PupStatic.style.backgroundImage = `url("${StaticImages[RandomImage]}")`;
        
    }

}

async function ChannelStatic()
{
    if (StaticBool)
    {
        StaticBool = false
    }

    StaticBool = true;
    
    while(StaticBool)
    {
        PupStatic.style.transition = "none";
        PupStatic.style.opacity = "1";

        RandomStatic();

        await Sleep(25);

        PupStatic.style.transition = "opacity 1.0s linear";
        PupStatic.style.opacity = "0";

        await Sleep(1000);

        StaticBool = false;
    }
    

    
}


function ChannelSorter()
{
    let ChannelString = PupCurrentChannel.toString().padStart(4, "0");

        NumberLeft.style.backgroundImage =
            `url("${ChannelNumberImages[Number(ChannelString[0])]}")`;

        NumberMiddleLeft.style.backgroundImage =
            `url("${ChannelNumberImages[Number(ChannelString[1])]}")`;

        NumberMiddleRight.style.backgroundImage =
            `url("${ChannelNumberImages[Number(ChannelString[2])]}")`;

        NumberRight.style.backgroundImage =
            `url("${ChannelNumberImages[Number(ChannelString[3])]}")`;

    PupChannels[PupCurrentChannel -1].style.display = "block";

    if (PupCurrentChannel == 3)
    {

        OnChannel3 = true
        CleanUpGame();
        CloudSpawner()
        PupHeadBob()

    }
    else
    {
        OnChannel3 = false
        PupHeadPosition = 0
        CleanUpGame();
    

    }

    



}

function ResetChannels()
{
    for (let i = 0; i < PupChannels.length; i++)
    {
        PupChannels[i].style.display = "none";
    }
}

function CleanUpLevel()
{
    for (let Rock of PupRocks)
    {
        Rock.remove();
    }

    for (let Coin of PupCoins)
    {
        Coin.remove();
    }

    PupRocks = [];
    PupCoins = [];

    PupJumped = false;
    PupJumping = false;
    PupYVelocity = 0;
    PupY = 0;
}

function CleanUpGame()
{
    CleanUpLevel()

    GameStarted = false
    GameTitle.style.display = "block"
    PupStartScreen.style.display = "none"
    GameInfoBar.style.display = "none"
    PupSprite.style.display = "none"
    PupScore = 0;
    PupLives = 3;
    PupCoinAmount = 0
    PupGameTime = 0
    PupSpeed = 1
    PupAnimationSpeed = 300
    BaseRockSpawnMin = 3000
    BaseRockSpawnMax = 4000
    RockMax = 3
    BaseCoinSpawnMin = 5000
    BaseCoinSpawnMax = 10000
    PupJumped = false;
    PupJumping = false;
    PupYVelocity = 0;
    PupY = 0;
    InfoBarScore.innerText = Math.floor(PupScore);
    InfoBarTime.innerText = Math.floor(PupGameTime);
    InfoBarCoins.innerText = PupCoinAmount
    JumpScreen.style.display = "none";

    for (let Cloud of PupClouds)
    {
        Cloud.remove();
    }

    PupClouds = [];
}



PupPowerButton.addEventListener("click", function()
{
    ResetChannels()

    if (!TVOn)
    {
        PupHeadPosition = 0
        TVOn = true
        StaticPlayBool = true
        PupPowerOn.style.display = "block";
        NumberLeft.style.display = "block";
        NumberMiddleLeft.style.display = "block";
        NumberMiddleRight.style.display = "block";
        NumberRight.style.display = "block";
        ChannelStatic()
        ChannelSorter();
    }    
    else
    {
        OnChannel3 = false
        TVOn = false
        StaticPlayBool = false
        PupPowerOn.style.display = "none";
        NumberLeft.style.display = "none";
        NumberMiddleLeft.style.display = "none";
        NumberMiddleRight.style.display = "none";
        NumberRight.style.display = "none";
        CleanUpGame();
    }
});

PupVolumeUpButton.addEventListener("click", function()
{
    if (PupVolume == 100 || !TVOn)
    {
        return;
    }

    PupVolume+= 1

    PupGameMusic.volume = PupVolume / 100;
    PupSoundEffects.volume = PupVolume / 100;
    
});

PupVolumeDownButton.addEventListener("click", function()
{
    if (PupVolume == 0 || !TVOn)
    {
        return;
    }

    PupVolume-= 1

    PupGameMusic.volume = PupVolume / 100;
    PupSoundEffects.volume = PupVolume / 100;
    
});

PupChannelUpButton.addEventListener("click", function()
{
    if (PupCurrentChannel == 9999 || !TVOn)
    {
        return;
    }
    StaticPlayBool = true

    PupCurrentChannel += 1
    ResetChannels()
    ChannelStatic()
    ChannelSorter()
});

PupChannelDownButton.addEventListener("click", function()
{
    if (PupCurrentChannel == 1 || !TVOn)
    {
        return;
    }
    StaticPlayBool = true

    PupCurrentChannel -= 1
    ResetChannels()
    ChannelStatic()
    ChannelSorter()
});


PupStartGameButton.addEventListener("click", function()
{

    PupWink();

    
});

async function PupWink()
{
    

    while(PupMenuHead.style.backgroundPositionY != 0 + "px")
    {
        
        await Sleep(10)
    }

    PupWinking.forEach(ImagePath =>
    {
        const Img = new Image();
        Img.src = ImagePath;
    });

    

    
    for (let i = 0; i < PupWinking.length; i++)
    {
        PupMenuHead.style.backgroundImage = `url("${PupWinking[i]}")`

        await Sleep(75)
    }




    GameTitle.style.display = "none"

    PupStartScreen.style.display = "block"
    ScreenGracePeriod = true

    GameStarted = true

    await Sleep(2000)

    GameInfoBar.style.display = "block"

    PupSprite.style.display = "block"

    PupStartScreen.style.display = "none"

    JumpScreen.style.display = "block"

    PupSpriteAnimation()

    RockSpawner()
    CoinSpawner()

    

    await Sleep(500)

    ScreenGracePeriod = false

    
}

async function PupHeadBob()
{
    PupDown = true
    while(OnChannel3 && !GameStarted)
    {
        if (PupDown)
        {
            PupHeadPosition +=1
            await Sleep(50)
            if (PupHeadPosition >= 10)
            { 
                PupDown = false
            }
        }
        else
        {
            PupHeadPosition -=1
            await Sleep(50)
            if (PupHeadPosition <= 0)
            {
                PupDown = true
            }
        }

        PupMenuHead.style.backgroundPositionY = PupHeadPosition + "px"


    }
}

async function PupSpriteAnimation()
{
    let pupframe = 0

    PupRunning.forEach(ImagePath =>
    {
        const Img = new Image();
        Img.src = ImagePath;
    });


    while(GameStarted)
    {
        if (pupframe == 3)
        {
            pupframe = 0
        }

        PupSprite.style.backgroundImage = `url("${PupRunning[pupframe]}")`
        pupframe++

        await Sleep(PupAnimationSpeed)
    }
}

function GrassScroll()
{
    GrassScrollNumber -= GrassSpeed  * DeltaTime;

    PupGrass.style.backgroundPositionX = GrassScrollNumber + "px";
}

function UpdatePupTimeAndScore()
{
    if (ScreenGracePeriod)
    {       
        return;
    }

    PupGameTime += DeltaTime;

    let CoinMultiplier = 1 + (PupCoinAmount * 0.1);

    PupScore += 100 * CoinMultiplier * DeltaTime;

    InfoBarScore.innerText = Math.floor(PupScore);
    InfoBarTime.innerText = Math.floor(PupGameTime);
    InfoBarCoins.innerText = PupCoinAmount


}

function GrabCoin()
{
    PupCoinAmount+= 1

    PupAnimationSpeed -= 5
    GrassSpeed += 4

    BaseRockSpawnMin -= 100;
    BaseRockSpawnMax -= 100;

    BaseCoinSpawnMin -= 50;
    BaseCoinSpawnMax -= 50;

    if (PupCoinAmount >= 25)
    {
        RockMax = 2
    }
}


function IsColliding(Object1, Object2)
{
    if (!Object1 || !Object2)
    {
        return false;
    }

    let Box1 = Object1.getBoundingClientRect();
    let Box2 = Object2.getBoundingClientRect();

    return (
        Box1.left < Box2.right &&
        Box1.right > Box2.left &&
        Box1.top < Box2.bottom &&
        Box1.bottom > Box2.top
    );
}


async function CheckPupCollisions()
{
    let Rocks = document.querySelectorAll(".Rock");

    for (let Rock of Rocks)
    {
        let RockHitBox = Rock.querySelector(".RockHitBox");

        if (IsColliding(PupHitBox, RockHitBox))
        {
            CleanUpLevel()
            PupStartScreen.style.display = "block"
            ScreenGracePeriod = true

            PupLives -=1

            if (PupLives == 0)
            {
                PupHeadScreen.style.display = "none"
                PupLivesScreen.innerText = "GAME OVER"
                if (PupScore > PupLastHighScore)
                {
                    PupLastHighScore = Math.floor(PupScore);


                    PupLastHighScoreText.innerText = `Last High Score: ${PupLastHighScore}`;
                }
                await Sleep(1500)
                CleanUpGame()
                await Sleep (500)
                ScreenGracePeriod = false
                PupHeadScreen.style.display = "block"

                
            }
            else
            {
                PupLivesScreen.innerText = "x" + PupLives;
                await Sleep (1500)
                PupStartScreen.style.display = "none"
                await Sleep (500)
                ScreenGracePeriod = false

            }
        }
    }

    for (let i = PupCoins.length - 1; i >= 0; i--)
    {
        let Coin = PupCoins[i];

        if (IsColliding(PupHitBox, Coin))
        {
            GrabCoin();

            Coin.remove();
            PupCoins.splice(i, 1);
        }
    }
}

async function RockSpawner()
{


    while(GameStarted)
    {
        if (ScreenGracePeriod)
        {
            await Sleep(50)
            continue
        }


        if (PupRocks.length < RockMax)
        {
            SpawnRock()

        }
        
        let ThisAmount = Randomizer(BaseRockSpawnMin, BaseRockSpawnMax)

        await Sleep(ThisAmount)
        
    }
}

async function CoinSpawner()
{
    while(GameStarted)
    {
        if (ScreenGracePeriod)
        {
            await Sleep(50)
            continue
        }

        if (PupCoins.length < CoinMax)
        {
            SpawnCoin()

        }
        
        let ThisAmount = Randomizer(BaseCoinSpawnMin, BaseCoinSpawnMax)

        await Sleep(ThisAmount)
        
    }
}

async function CloudSpawner()
{
    while(OnChannel3)
    {
        if (PupClouds.length < CloudMax)
        {
            SpawnCloud()

        }
        
        let ThisAmount = Randomizer(BaseCloudSpawnMin, BaseCloudSpawnMax)

        await Sleep(ThisAmount)
        
    }
}

function SpawnRock()
{
    let Rock = document.createElement("div");

    RandomRockImage = Randomizer(0, PupRockImages.length-1)

    Rock.style.backgroundImage = `url("${PupRockImages[RandomRockImage]}")`



    Rock.className = "Rock";
    Rock.style.display = "block";
    Rock.style.left = "100%";

    let RockHitBox = document.createElement("div");
    RockHitBox.className = "RockHitBox";

    Rock.appendChild(RockHitBox);
    Channel3.appendChild(Rock);

    let NewRockBox = Rock.getBoundingClientRect();

    for (let ExistingRock of PupRocks)
    {
        let ExistingRockBox = ExistingRock.getBoundingClientRect();

        let Gap = Math.max(
            ExistingRockBox.left - NewRockBox.right,
            NewRockBox.left - ExistingRockBox.right
        );

        if (Gap < RockMinDistance)
        {
            Rock.remove();
            return;
        }
    }

    PupRocks.push(Rock);
}

function SpawnCoin()
{
    let Coin = document.createElement("div");

    Coin.className = "Coin";
    Coin.style.display = "block";
    Coin.style.left = "100%";
    

    let CoinSpawnHeight = Randomizer(CoinMinHeight, CoinMaxHeight);
    Coin.style.bottom = `${CoinSpawnHeight}%`;

    Channel3.appendChild(Coin);

    for (let Rock of PupRocks)
    {
        let CoinBox = Coin.getBoundingClientRect();
        let RockBox = Rock.getBoundingClientRect();

        let Distance = Math.abs(CoinBox.left - RockBox.left);

        if (Distance < CoinRockMinDistance)
        {
            Coin.remove();
            return;
        }
    }

    PupCoins.push(Coin);
}

function SpawnCloud()
{
    let Cloud = document.createElement("div");
    
    RandomCloudImage = Randomizer(0, PupCloudImages.length-1)

    Cloud.style.backgroundImage = `url("${PupCloudImages[RandomCloudImage]}")`



    Cloud.className = "Cloud";
    Cloud.style.display = "block";
    Cloud.style.left = "100%";

    let CloudSpawnHeight = Randomizer(CloudMinHeight, CloudMaxHeight);

    Cloud.style.bottom = `${CloudSpawnHeight}%`;

    Channel3.appendChild(Cloud);
    PupClouds.push(Cloud);
}

function UpdateRocks()
{
    for (let i = PupRocks.length - 1; i >= 0; i--)
    {
        let Rock = PupRocks[i];

        let CurrentLeft = Rock.offsetLeft;

        Rock.style.left = `${CurrentLeft - (GrassSpeed * DeltaTime)}px`;

        if (Rock.offsetLeft + Rock.offsetWidth < 0)
        {
            Rock.remove();
            PupRocks.splice(i, 1);
        }
    }
}

function UpdateCoins()
{
    for (let i = PupCoins.length - 1; i >= 0; i--)
    {
        let Coin = PupCoins[i];

        let CurrentLeft = Coin.offsetLeft;

        Coin.style.left = `${CurrentLeft - (GrassSpeed * DeltaTime)}px`;

        if (Coin.offsetLeft + Coin.offsetWidth < 0)
        {
            Coin.remove();
            PupCoins.splice(i, 1);
        }
    }
}

function UpdateClouds()
{
    for (let i = PupClouds.length - 1; i >= 0; i--)
    {
        let Cloud = PupClouds[i];

        let CurrentLeft = Cloud.offsetLeft;

        Cloud.style.left = `${CurrentLeft - (GrassSpeed * DeltaTime)}px`;

        if (Cloud.offsetLeft + Cloud.offsetWidth < 0)
        {
            Cloud.remove();
            PupClouds.splice(i, 1);
        }
    }
}

function PupJump()
{
    if (PupJumping)
    {
        return;
    }

    PupJumping = true;

    let SpeedMultiplier = GrassSpeed / 150;

    PupYVelocity = 350 * SpeedMultiplier;
}

function UpdatePupJump()
{
    if (!PupJumping)
    {
        return;
    }

    let SpeedMultiplier = GrassSpeed / 150;

    let Gravity = 500 * SpeedMultiplier * SpeedMultiplier;

    PupYVelocity -= Gravity * DeltaTime;
    PupY += PupYVelocity * DeltaTime;

    if (PupY <= 0)
    {
        PupY = 0;
        PupYVelocity = 0;
        PupJumping = false;
    }

    PupSprite.style.transform = `translateY(${-PupY}px)`;
}

Jump.addEventListener("click", function()
{
    PupJump();

});

document.addEventListener("keydown", function(event)
{
    if (event.code === "Space")
    {
        if (GameStarted)
        {
            event.preventDefault();
            PupJump();
        }
    }
});



function Randomizer(min,max)
{
    //because why the hell is JS so complicated for RNG?
    // The actual fuck is this doing?
    // Math.random() gives: 0.0 -> 0.99
    // Multiply by the size of our range.
    // (max-min+1) counts BOTH endpoints.
    // Example:
    // 30-100
    // 100-30+1 = 71 possible numbers.
    // Math.floor() removes the decimal.
    // Now we have: 0 -> 70
    // Finally shift the range upward.
    // +30 turns: 0 -> 30
    // 70 ->100
    // Yeah. JS is so dumb i actually wrote comments. congrats. 
    // stupid ass language can do  [] + [] but not number ranges without a custom function xD

    
    return Math.floor(Math.random() * (max - min + 1)) + min
    
}

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


Resize();
window.addEventListener("resize", Resize);
Start()

