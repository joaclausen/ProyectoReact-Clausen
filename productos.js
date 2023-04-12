const productos = [
    {
        name: "Chrono Trigger",
        background_image: "https://ucarecdn.com/a89685e8-b2cc-49db-9011-a2129a0bfd29/1268883.jpg",
        Genres: [
            {
                0: "JRPG"
            } 
        ],
        description: "When a newly developed teleportation device malfunctions at the Millennial Fair, young Crono must travel through time to rescue his misfortunate companion from an intricate web of past and present perils. The swashbuckling adventure that ensues soon unveils an evil force set to destroy the world, triggering Crono's race against time to change the course of history and bring about a brighter future.",
        platform: "NDS",
        price: 40
    },
    {
        name: "Final Fantasy VI",
        background_image: "https://ucarecdn.com/b9f1b57f-a10e-477e-a44d-e72dd188d050/439600.jpg",
        Genres: [
            {
                0: "JRPG"
            } 
        ],
        description: "Final Fantasy VI is the sixth main installment in the Final Fantasy series, developed and published by Square. It was the final title in the series to feature two-dimensional graphics, and the first story that did not revolve around crystals.",
        platform: "SNES",
        price: 40
    },
    {
        name: "Persona 3",
        background_image: "https://ucarecdn.com/bd0119d2-b013-461a-b4cb-1f8b564a8b85/persona3.jpg",
        Genres: [
            {
                0: "JRPG"
            } 
        ],
        description: "Shin Megami Tensei: Persona 3 is a role-playing video game developed by Atlus. In the game, the player takes the role of a male high-school student who joins the Specialized Extracurricular Execution Squad (SEES), a group of students investigating the Dark Hour, a time period between one day and the next that few people are aware of. During the Dark Hour, the player enters Tartarus, a large tower containing Shadows, creatures that feed on the minds of humans. To fight the Shadows, each member of SEES is able to summon a Persona, a manifestation of a person's inner self. In addition to the standard elements of role-playing games, Persona 3 includes elements of simulation games, as the game's protagonist progresses day by day through a school year, making friends and forming relationships that improve the strength of his Personas in battle.",
        platform: "PlayStation 2",
        price: 30
    },
    {
        name: "Xenogears",
        background_image: "https://ucarecdn.com/9b3c3ba2-6128-4862-b0f2-7563c5436504/Xenogears1.jpg",
        Genres: [
            {
                0: "JRPG"
            } 
        ],
        description: "Xenogears follows protagonist Fei Fong Wong and several others as they journey to uncover the truth behind mysterious, cabalistic entities operating in their world. The principles and philosophies of Friedrich Nietzsche, Sigmund Freud and Carl Jung influence the plot, character design, and world of Xenogears. Additionally, the symbols, theological concepts, and devotional practices of several world religions are represented in fictionalized forms in the game. Major psychological themes are the nature of identity and human memory, particularly as these relate to the phenomenon of dissociative identity disorder. The relationship between humanity and machines is central to the game's plot, as indicated by the presence of giant robots dubbed gears, which almost each playable character can control.",
        platform: "PlayStation",
        price: 40
    },
    {
        name: "EarthBound",
        background_image: "https://ucarecdn.com/789f4b99-345c-42b5-93dc-3236ab8feb7d/531960.jpg",
        Genres: [
            {
                0: "JRPG"
            } 
        ],
        description: "A turn-based JRPG and sequel to then-Japan-only Earthbound Beginnings (1989) in which Ness, a young boy living in a land based on the USA, leaves home to go on an adventure through strange locations, get to know quirky characters and defeat an unknowable alien threat called Giygas while facing up to the realities of growing up and becoming familiar with the real world.",
        platform: "SNES",
        price: 40
    },
    {
        name: "Kingdom Hearts II",
        background_image: "https://ucarecdn.com/5c818394-fb84-4cd1-92ca-3a758529a014/Sinttulo1.jpg",
        Genres: [
            {
                0: "JRPG",
            } 
        ],
        description: "Kingdom Hearts II is an action role-playing game, and the primary entry to the series since the 2002 Disney Interactive and Square collaboration. The game's setting is a collection of various levels (referred to in-game as worlds) that the player progresses through. As in the first game, it II allows the player to travel to locales from various Disney works, along with original worlds specifically created for the series.",
        platform: "PlayStation 2",
        price: 30
    },
    {
        name: "Fallout: New Vegas",
        background_image: "https://ucarecdn.com/9e4a09a4-04fe-473c-a776-7076ecc2d9f6/apps5699513869736752294987ca050464c72a476d941dc1c814c4213d.jpg",
        Genres: [
            {
                0: "RPG",
                1: "Shooter"
            } 
        ],
        description: "In this first-person Western RPG, the player takes on the role of Courier 6, barely surviving after being robbed of their cargo, shot and put into a shallow grave by a New Vegas mob boss. The Courier sets out to track down their robbers and retrieve their cargo, and winds up getting tangled in the complex ideological and socioeconomic web of the many factions and settlements of post-nuclear Nevada.",
        platform: "PC",
        price: 10
    },
    {
        name: "Killer7",
        background_image: "https://ucarecdn.com/540087b2-e8e7-41ae-bb70-fd6cd565ced6/184041.jpg",
        Genres: [
            {
                0: "Shooter"
            } 
        ],
        description: "Sneak into a world of underground assassins as Harman Smith, a man who manifests 7 deadly personalities, the killer7. Take control of this distinct murderers' row as they hunt down the sinister Kun Lan to thwart his plan of world dominance.",
        platform: "GameCube",
        price: 20
    },
    {
        name: "Half-Life 2",
        background_image: "https://ucarecdn.com/54080e56-fa74-4619-ae47-f19de9efacb0/570284.jpg",
        Genres: [
            {
                0: "Shooter"
            } 
        ],
        description: "By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around them, from the physical environment to the behaviors even the emotions of both friends and enemies.",
        platform: "PC",
        price: 10
    },
    {
        name: "Halo 3",
        background_image: "https://ucarecdn.com/ceea3676-8289-4994-9c95-9dd6ec0cfabf/halo3.jpg",
        Genres: [
            {
                0: "Shooter"
            } 
        ],
        description: "Halo 3 is a shooter game where players primarily experience gameplay from a first-person perspective. Much of the gameplay takes place on foot, but also includes segments focused on vehicular combat. The balance of weapons and objects in the game was adjusted to better adhere to the Golden Triangle of Halo: these are weapons, grenades, and melee attacks, which are available to a player in most situations. Players may dual-wield some weapons, forgoing the use of grenades and melee attacks in favor of the combined firepower of two weapons. Many weapons available in previous installments of the series return with minor cosmetic and power alterations. Unlike previous installments, the player's secondary weapon is visible on their player model, holstered or slung across the player's back. Halo 3 introduces support weapons, which are cumbersome two-handed weapons that slow the player, but offer greatly increased firepower in return. In addition to weapons, the game contains a new class of gear called equipment; these items have various effects, ranging from defensive screens to shield regeneration and flares. Only one piece of equipment can be carried at a time. The game's vehicular component has been expanded with new drivable and AI-only vehicles.",
        platform: "Xbox 360",
        price: 10
    },
    {
        name: "Red Dead Redemption",
        background_image: "https://ucarecdn.com/a5f97229-0e8e-48b5-9fab-d833a543ca7e/elremakedereddeadredemptionescomolatrilogiadegtaelanuncioderdr2ps5esmasprobableen2022.jpg",
        Genres: [
            {
                0: "Shooter"
            } 
        ],
        description: "A modern-day Western epic, Red Dead Redemption takes John Marston, a relic from the fast-closing time of the gunslinger, through an open-world filled with wildlife, mini games and shootouts. Marston sets out to hunt down his old gang mates for the government, who have taken away his family, and meets many characters emblematic of the Wild West, heroism and the new civilization along his journey.",
        platform: "PlayStation 3",
        price: 10
    },
    {
        name: "L.A. Noire",
        background_image: "https://ucarecdn.com/355e2c52-802e-48ce-82a0-ecd3a1cb5e7a/319969.jpg",
        Genres: [
            {
                0: "Action",
                1: "Adventure"
            } 
        ],
        description: "Set in 1947 Los Angeles, the game follows detective Cole Phelps's rise among the ranks of the Los Angeles Police Department as he solves a range of cases across various bureaus. When he is tasked with investigating a morphine distribution ring involving several of his former squadmates from World War II, Phelps finds both his personal and professional life falling into turmoil, and reluctantly joins forces with his estranged former comrade, Jack Kelso, as they uncover a major conspiracy involving prominent Los Angeles figures.",
        platform: "PlayStation 3",
        price: 10
    },
    {
        name: "Metal Gear Solid 2: Sons of Liberty",
        background_image: "https://ucarecdn.com/01b3d9a8-a930-4c7e-a7b8-0d5f8bc8d03f/thumb1920502268.jpg",
        Genres: [
            {
                0: "Action",
                1: "Adventure",
                2: "Stealth",
            } 
        ],
        description: "Metal Gear Solid 2: Sons of Liberty is the sequel to the espionage action game Metal Gear Solid. Much of the gameplay remains the same, as the game's protagonist has to sneak past guards, outsmart them using various gadgets and defeat the tricky boss enemies. The game expanded its predecessor's cover mechanic, with Solid Snake or Raiden able to take cover behind walls or objects and pop out to shoot at enemies, while the improved enemy AI allowed enemies to also take cover from the player. Metal Gear Solid 2 is considered to be one of the greatest video games of all time, as well as a leading example of artistic expression in video games.",
        platform: "PlayStation 2",
        price: 30
    },
    {
        name: "Metroid Prime: Trilogy",
        background_image: "https://ucarecdn.com/bdfb8c38-5936-4f72-847f-c27f6b8081c9/mptri.jpg",
        Genres: [
            {
                0: "Adventure",
                1: "Platform",
                2: "Shooter",
                3: "Metroidvania"
            } 
        ],
        description: "In this compilation that bundles all three landmark Metroid Prime games, experience the danger and high-intense action of facing space alone as you play skilled bounty hunter, Samus Aran.",
        platform: "GameCube",
        price: 40
    },
    {
        name: "Super Metroid",
        background_image: "https://ucarecdn.com/d2685977-158e-4cda-bdcc-285d248b9dcd/db933f52fa4237da9955f19fbd4a00ba.jpg",
        Genres: [
            {
                0: "Adventure",
                1: "Platform",
                2: "Metroidvania"
            } 
        ],
        description: "The Space Pirates, merciless agents of the evil Mother Brain, have stolen the last Metroid from a research station, and once again Mother Brain threatens the safety of the galaxy! Samus Aran must don her awesome array of high-tech weaponry to retrieve the deadly Metroid hidden deep within the cave-riddled planet Zebes. Super Metroid features excellent graphics, with a huge variety of enemies and worlds to explore. The side-view action will be familiar to many players, only now there are new weapons and items, including the Grappling Beam, which allows Samus to swing across large chasms, and the X-Ray Scope, which reveals secret passages.",
        platform: "SNES",
        price: 40
    },
    {
        name: "Castlevania: Aria of Sorrow",
        background_image: "https://ucarecdn.com/d2685977-158e-4cda-bdcc-285d248b9dcd/db933f52fa4237da9955f19fbd4a00ba.jpg",
        Genres: [
            {
                0: "Adventure",
                1: "Platform",
                2: "Metroidvania"
            } 
        ],
        description: "The year is 2035 and Soma Cruz is about to witness the first solar eclipse of the 21st century when he suddenly blacks out -- only to awaken inside a mysterious castle. As Soma, you must navigate the castle's labyrinths while confronting perilous monsters at every turn. But beware, you must escape before the evil consumes you!",
        platform: "GBA",
        price: 40
    },
    {
        name: "Resident Evil 2",
        background_image: "https://ucarecdn.com/c8eaddd0-8be2-48b4-b693-0affb8ffc20b/322144.jpg",
        Genres: [
            {
                0: "Adventure",
                1: "Survival Horror"
            } 
        ],
        description: "Resident Evil 2 is a sequel to the first Resident Evil title. Like the previous game in the series, Resident Evil 2 is a 3D action-adventure using three-dimensional polygon characters over two-dimensional pre-rendered backgrounds, with the action viewed through a variety of cinematic fixed camera angles in each room. Players can choose to play as one of two possible characters, each goes through the same initial scenario but with differences in the type of weaponry they find and the people they meet along the way.",
        platform: "GameCube",
        price: 20
    },
    {
        name: "Silent Hill 2",
        background_image: "https://ucarecdn.com/7e89785c-7064-423b-ac42-a7d056cd3cdd/Sinttulo1asdsd.jpg",
        Genres: [
            {
                0: "Adventure",
                1: "Survival Horror"
            } 
        ],
        description: "The second entry in the Silent Hill franchise, Silent Hill 2 is a narrative-focused third-person psychological horror game with exploration and puzzle-solving elements which follows James Sunderland, a man who receives a letter, seemingly sent by his three-years-deceased wife Mary, in which he is beckoned to the fog-ridden town of Silent Hill at the same time as numerous other people troubled by their past.",
        platform: "PlayStation 2",
        price: 30
    },
    {
        name: "Super Mario Galaxy",
        background_image: "https://ucarecdn.com/e70d96f7-032d-4e67-8df2-0b56b9d09b41/cropped19201080320591.jpg",
        Genres: [
            {
                0: "Adventure",
                1: "Platform"
            } 
        ],
        description: "A 3D platformer and first Wii entry in the Super Mario franchise, Super Mario Galaxy sees Mario jump across planets and galaxies with varying items, enemies, geographies and gravity mechanics in order to reach his enemy Bowser, who has attacked the Mushroom Kingdom and hijacked Princess Peach's castle with her inside.",
        platform: "Wii",
        price: 40
    },
    {
        name: "The Legend of Zelda: Ocarina of Time 3D",
        background_image: "https://ucarecdn.com/2d9e7ab6-8142-46e0-97a4-e785b11ca59f/Sinsadsd1.jpg",
        Genres: [
            {
                0: "Adventure"
            } 
        ],
        description: "The Legend of Zelda: Ocarina of Time 3D is a remake of Ocarina of Time with more up-to-date graphics, streamlined UI and different additional game modes. Most textures are significantly more detailed, and many models are more faithful to the game's concept and promotional art. In addition, the frame rate has been increased to 30 FPS compared to the original's 20 FPS.",
        platform: "N3DS",
        price: 30
    },
    {
        name: "The Legend of Zelda: The Wind Waker HD",
        background_image: "https://ucarecdn.com/474d6193-3482-494e-8bc4-bb9ed065a4da/wp2061560.jpg",
        Genres: [
            {
                0: "Adventure"
            } 
        ],
        description: "The Legend of Zelda: The Wind Waker HD is a remaster of The Wind Waker with an alternate recreation of the original's art style, several gameplay adjustments, a new lighting engine and higher resolution textures.",
        platform: "Wii U",
        price: 30
    },
    {
        name: "No More Heroes",
        background_image: "https://ucarecdn.com/d7dae070-f79a-44e2-9929-0124414cdb34/descarga.jpg",
        Genres: [
            {
                0: "Brawler"
            } 
        ],
        description: "The journey to become the #1 assassin begins with a single slice. No More Heroes is the story of Travis Touchdown. He has received orders to kill a vagabond. In front of him appears the handsome assassin Helter Skelter. After a fierce skirmish, Travis eliminates Skelter, upon which Silvia Christel arrives. She informs Travis that his victory was done without UAA permission, but he nonetheless becomes the 11th best assassin. And so Travis’s journey begins. No More Heroes will offer an exhilarating action experience, a thrilling scenario, stylish visuals, and sounds.",
        platform: "Wii",
        price: 20
    },
    {
        name: "Devil May Cry 3 Special Edition",
        background_image: "https://ucarecdn.com/2ce3d744-9026-40de-8a1c-d36dbcc891a7/DevilMayCry3SpecialEditionreview.jpg",
        Genres: [
            {
                0: "Hack and slash"
            } 
        ],
        description: "Dante's past is now revealed as Devil May Cry returns to its roots. Master Dante's multiple fighting styles while battling never before seen demons and new characters as you fight your way towards a brutal confrontation with Dante's mysterious twin brother, Vergil.",
        platform: "PlayStation 2",
        price: 20
    },
    {
        name: "God Hand",
        background_image: "https://ucarecdn.com/36bdd6bc-ce21-4c3a-a9f2-b679b1beea55/657258.jpg",
        Genres: [
            {
                0: "Brawler"
            } 
        ],
        description: "Things can't get any worse after demonic thugs cut your arm off, right? Dead wrong, partner. The lady you saved from them has only gone and given you the legendary GOD HAND as a replacement - the ultimate hand-to-hand weapon. Every undead outlaw in a Stetson, rootin' tootin' demon and circus freak in the prairies is going to want to fight you for it. Welcome to the town of Asskickin... have a nice stay y'all.",
        platform: "PlayStation 2",
        price: 20
    },
    {
        name: "Mega Man Zero Collection",
        background_image: "https://ucarecdn.com/9f99edd1-ce8a-4eb4-a82c-1b6a4c8c5425/thumb1920689836.jpg",
        Genres: [
            {
                0: "Action",
                1: "Platform"
            } 
        ],
        description: "The first Mega Man ZERO game was released in 2002. It featured Zero, a popular Capcom character that was introduced in the Mega Man X series. The Mega Man ZERO series follows Zero through a dark and thrilling 2D action-adventure with high-quality visuals and action. Users can expect to make use of Zero's trademarks weapons like the Z-sabor and Buster Shot. There will also be interesting devices like the Chain Rod and Zero Knuckle. For the first time, the Mega Man ZERO series will be available for Nintendo DS, complete with all-new modes.",
        platform: "NDS",
        price: 40
    },
]

export default productos;