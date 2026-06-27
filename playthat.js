const character = ["Marisa Kirisame", "Reimu Hakurei", "Elis", "Kikuri", "Konngara", 
    "Mima", "Sariel", "SinGyoku F", "SinGyoku M", "Yuugen Magan", "Evil Eye Sigma", 
    "Genjii", "Meira", "Rika", "Chiyuri Kitashirakawa", "Ellen", "Kana Anaberal", "Kotohime",
     "Mimi-chan", "Rikako Asakura", "Ruukoto", "Yumemi Okazaki", "Elly", "Gengetsu", "Kurumi", "Mugetsu", "Orange",
      "Luize", "Sara", "Shinki", "Yuki", "Yumeko", "Cirno", "Daiyousei", "Flandre Scarlet",
       "Hong Meiling", "Koakuma", "Patchouli Knowledge", "Remilia Scarlet", "Rumia", "Sakuya Izayoi", "Alice Margatroid", "Chen", "Letty Whiterock", "Lily White", "Lunasa Prismriver", 
       "Lyrica Prismriver", "Merlin Prismriver", "Ran Yakumo", "Youmu Konpaku", "Yukari Yakumo", "Yuyuko Saigyouji", "Suika Ibuki", "Eirin Yagokoro", "Fujiwara no Mokou", "Kaguya Houraisan", 
       "Keine Kamishirasawa", "Mystia Lorelei", "Reisen Udongein Inaba", "Tewi Inaba", "Wriggle Nightbug", "Aya Shameimaru", "Eiki Shiki Yamaxanadu", "Komachi Onozuka", "Medicine Melancholy", 
       "Yuuka Kazami", "Hina Kagiyama", "Kanako Yasaka", "Minoriko Aki", "Momiji Inubashiri", "Nitori Kawashiro", "Sanae Kochiya", "Shizuha Aki", "Suwako Moriya", "Iku Nagae", "Tenshi Hinanawi",
        "Kisume", "Koishi Komeiji", "Parsee Mizuhashi", "Rin Kaenbyou", "Satori Komeiji", "Utsuho Reiuji", "Yamame Kurodani", "Yuugi Hoshiguma", "Byakuren Hijiri", "Ichirin Kumoi", "Kogasa Tatara",
         "Minamitsu Murasa", "Nazrin", "Nue Houjuu", "Shou Toramaru", "Unzan", "Hisoutensoku", "Hatate Himekaidou", "Luna Child",
          "Star Sapphire", "Sunny Milk", "Kyouko Kasodani", "Mamizou Futatsuiwa", "Mononobe no Futo", "Seiga Kaku", "Soga no Tojiko",
           "Toyosatomimi no Miko", "Yoshika Miyako", "Hata no Kokoro", "Benben Tsukumo", "Kagerou Imaizumi", "Raiko Horikawa", "Seija Kijin",
            "Sekibanki", "Shinmyoumaru Sukuna", "Wakasagihime", "Yatsuhashi Tsukumo", "Sumireko Usami", "Clownpiece", "Doremy Sweet", "Hecatia Lapislazuli",
             "Junko", "Ringo", "Sagume Kishin", "Seiran", "Joon Yorigami", "Shion Yorigami", "Aunn Komano", "Eternity Larva", "Mai Teireida", "Narumi Yatadera", 
             "Nemuno Sakata", "Okina Matara", "Satono Nishida", "Eika Ebisu", "Keiki Haniyasushin", "Kutaka Niwatari", "Mayumi Joutouguu", "Saki Kurokoma", "Urumi Ushizaki", 
             "Yachie Kicchou", "Yuuma Toutetsu", "Chimata Tenkyuu", "Megumu Iizunamaru", "Mike Goutokuji", "Misumaru Tamatsukuri", "Momoyo Himemushi", "Sannyo Komakusa", "Takane Yamashiro", 
             "Tsukasa Kudamaki", "Fortune Teller", "Hieda no Akyuu", "Kasen Ibaraki", "Kosuzu Motoori", "Miyoi Okunoda", "Reisen II", "Rinnosuke Morichika", "Tokiko", "Watatsuki no Toyohime",
              "Watatsuki no Yorihime", "Maribel Hearn", "Renko Usami", "Son Biten", "Enoko Mitsugashira", "Chiyari Tenkajin", "Hisami Yomotsu", "Zanmu Nippaku", "Mizuchi Miyadeguchi", "Ubame Chirizuka",
               "Chimi Houjuu", "Nareko Michigami"]

const SPECIES = ["Human", "Devil", "Ghost", "Yuki-onna", "Night sparrow", "Tengu", 
    "Kappa", "Tsurube-otoshi", "Tsuchigumo", "Hashihime", "Satori", "Shuchuu", "Tsukumogami", "Nyuudou", "Nue", "Daidarabotchi", 
    "Yamabiko", "Zombie", "Gashadokuro", "Kirin", "Wanyuudou", "Katawa-guruma", "Zashiki-warashi", "Hobgoblin", "Enenra", "Mermaid", "Rokurokubi", 
    "Amanojaku", "Baku", "Yamanba", "Komainu", "Haniwa", "Oomukade", "Sarugami", "Tenkajin", "Chimi", "Skaven", "Dwarf", "Fairy", "Rabbit", "Elf", "Dark Elf", "Vampire", 'Tanuki', 'Ogre', 'Oni', 'Mandrake', 
    'Dragon', 'Formless Spirit', 'Kitsune', 'Angel', 'Ogre', 'Onikuma', 'Werebear', 'Werewolf', 'Centaur', 'Ungor', 'Gor', 'Baqsen-Gor', 'Owl', 'Loxodon', 'Halfling', 'Bear'  ]

     

const PROFESSION = ["Gambler", "Jobless",  (mySPECIES) => mySPECIES === "Human" ? ["Inquisitor", "Oni Slayer", "Shrine Maiden", "Vampire Hunter",] : [], "Magician", mySPECIES => (mySPECIES === "Skaven" ? ["Warlock Engineer", "Hell Pit Abomination", "Grey Seer", "Assassin"] : []), "Blacksmith", "Runewielder", "Necromancer", "Anti-Magician", "Fortune Teller",
        'Teacher', 'Librarian', 'Arsonist', 'King', 'Advisor', 'General', 'Politician', 'Carpenter','Critic', 'Fisherman', 'Waiter', 'Slave', 'Labor Worker', 'Mechanic', 'Antique Shop Owner', 'Competitive Gamer', 'Doctor', 'Firefighter', 'Chief', 'NEET',
        'Hermit', 'Farmer', 'Tradesman', 'Boxer', 'Guard', 'Journalist', 'Keyboard Warrior', 'Sushi Master', 'Sailor', 'Beekeeper', 'Dancer', 'Street Performer', 'Serial Killer', 'Factory Meat Butcher', 'Therapist', 'Movie Producer', 'Watchman', 'Arborist',
        'Lamberjak', 'Milman',  'Knitter', 'Bookbinder', 'Dressmaker', 'Biologist', 'Spy', 'Hell Warden', 'Shikigami', 'Student', 'Disciple',  'Human Adjudicator', 'Intern in a low-paying job', "The Netherworld Prosecutor", 'Solicitor', 'Stenographer',
        'Jockey', 'Mafioso', 'Bodyguard', 'Alchemist', 'A small shop owner', 'Estate agent', 'Pharmacist', 'Insurance agent', 'Herbalist', 'Baker', 'Hayward', 'Ewery', 'Serf', "Armorer", "Executioner", "Professional music composer", "Winemaker",
        "Locksmith", 'Political Envoy', 'Gardener', 'Barber', 'Warrior',
     ] 


    
    
const LOCATIONS = ["Bamboo Forest of The Lost", "Barrier of Life and Death", "Canal of Willows", "Dream World", "Eientei", "Forest of Magic", 
        "Former Hell", "Garden of the Sun", "Genbu Ravine", "Hakurei Shrine", "Hall of Dreams Great Mausoleum", "Heaven", "Hell", "Hokkai", "Human Village", 
        "Kourindou", "Lunar Capital", "Makai", "Mayohiga", "Misty Lake", "Muenzuka", "Myouren Temple", "Nameless Hill", "Palace of the Earth Spirits", "Probability Space Hypervessel", 
        "Remains of Blazing Hell", "Scarlet Devil Mansion", "Sea of Tranquility", "Shining Needle Castle", "Spring Path" , "Netherworld", "Untrodden Valley", "Youkai Mountain", "Youkai Tanuki Forest", "Youkai Trail",
         "Higan", "Moriya Shrine",  "Land of the Back Door" ];


 
const LORES_OF_MAGIC = ["Fire", "Druid", "Wind", "Dark", "Light", "Heavenly", "Water", "Ice", "Elemental", "Summoning", "Puppet master", "Blood", "Chaos", "Psychic", "Life", "Decay", "Tzeentch", "Nurgle", "Slaanesh", "Quantum", "Metal", "Earth", "High"]
      
const WEAPONS = ['Sword', 'Axe', 'Warhammer', 'Polearm', 'Bow', 'Whip', 'Trident', 'Spear', 'Scythe', 'Mace', 'Club', 'Dagger', 'Javelin', 'Crossbow', 'Claw', 'Gauntlet', 'Rapier', 'Pan', 'Basket Ball', 'Chopstick', 'Bank Card', 'Fan', 'Wheel']
 

const characterHomesMap = {
    0: ["Fujiwara no Mokou", "Tewi Inaba", "Kagerou Imaizumi"],  
    3: ["Doremy Sweet"],  
    4: ["Eirin Yagokoro", "Kaguya Horaisan", "Reisen Udongein Inaba"],  
    5: ["Marisa Kirisame", "Alice Margatroid", "Rinnosuke Morichika"],  
    6: ["Yuugi Hoshiguma"],  
    7: ["Yuuka Kazami"], 
    8: ["Kawashiro Nitori"], 
    9: ["Reimu Hakurei"],  
    10: ["Mononobe no Futo", "Toyosatomimi no Miko"],  
    11: ["Tenshi Hinanawi", "Iku Nagae"],  
    12: ["Hecatia Lapislazuli"],  
    14: ["Keine Kamishirasawa", "Hieda no Akyuu"],  
    16: ["Sagume Kishin", "Ringo", "Seiran", "Reisen II", "Watatsuki no Toyohime", "Watatsuki no Yorihime"],  
    17: ["Elis", "Shinki"],  
    18: ["Ran Yakumo", "Chen", "Yukari Yakumo"],  
    19: ["Cirno", "Lunasa Prismriver", "Lyrica Prismriver", "Merlin Prismriver", "Wakasagihime"],  
    21: ["Byakuren Hijiri", "Ichirin Kumoi", "Minamitsu Murasa", "Nazrin", "Nue Houjuu", "Shou Toramaru", "Kyouko Kasodani", "Joon Yorigami", "Kosuzu Motoori"], // Myouren Temple
    22: ["Medicine Melancholy"],  
    23: ["Koishi Komeiji", "Rin Kaenbyou", "Satori Komeiji", "Utsuho Reiuji"],  
    26: ["Flandre Scarlet", "Hong Meiling", "Koakuma", "Patchouli Knowledge", "Remilia Scarlet", "Sakuya Izayoi"], 
    30: ["Youmu Konpaku", "Yuyuko Saigyouji"], 
    32: ["Aya Shameimaru", "Minoriko Aki", "Shizuha Aki", "Momiji Inubashiri", "Hatate Himekaidou", "Kasen Ibaraki"],  
    34: ["Mystia Lorelei"], 
    35: ["Eiki Shiki Yamaxanadu", "Komachi Onozuka", "Urumi Ushizaki"],  
    36: ["Kanako Yasaka", "Sanae Kochiya", "Suwako Moriya"],  
    37: ["Okina Matara"] 
};

const Unique_Trait = ["You've lost your left arm in battle", "You drank the Elixir of Immortality", "You ate the heavenly peaches for so long and ended up becoming an extremely strong powerhouse in Gensokyo that can even layer down mountains", "You are possessed by a demon who takes over your body when you're asleep", "You are persecuted as a criminal in the village", "You have the working wifi", "You have an amnesia and don't possess any of your previous memories after coming to village", "You are cursed to be hunted by all yokai at night against their free will", "You are cursed, everyone confesses their love to you, turns to gold","A half of your soul is now owned by Hell", "You live an impressively boring existence inside Gensokyo", "You have an allergies to water", "You have asthma", "You are always underpaid", "You have existensial dread living here", "You owe money to the Scarlet Mansion and they are mad","You play tennis and football every Saturday with a gang of yokai", "You are famous among kappa", "You are on the sages-approved house arrest permanently", 
            "You earned a trophy for saving the village from the attack of a gang of man-eating yokais", "You are pregnant", "You were castrated", "You were gifted 2 kilograms of soy beans for winning in a festival game for the second place, as the cancellation price", "You lost your right arm and it was replaced with a metal arm made of alluminum steel", "You dyed your hair blue", "You got a cool tatoo with the name of your friend on it", "Your soul got divided from an accidental magical incident and it birthed a polar opposite version of you that has escaped to Hell and is planning to return", "You are wearing an eyepatch", "You replaced your wisdom teeth with golden fillings and now you are broke",
            "You owe money to Lunarians and they are evicting all your possessions and trying to sell your body to slavery to Man-Eating Yokai", "You became mutated and grew a third arm and another eye", "You won a lottery and got a prize of 100 phosphorus dumplings", "You were cursed by satori yokai and now everyone in Gensokyo can hear your thoughts live", "You don't feel like sleeping", "You are doing quite well and got new yokai friends in the village", 
            "You found a magical umbrella that grants you flying powers and can block magical attacks, and it even talks to you like a person!",  "You found a magical talking sword but he has very high standards and speaks with tiresome snobbish british accent you cannot stand", "You forgot how to speak human languages and can only speak in Ancient Tengu Language for some unknown reasons", "You were adopted by wolf yokai and they made you the leader of the pack", "Your skin changed to orange", "One of your eyes changed color to red. Nothing else happens but it looks rad, anyway", "Your right eye changed to blue, it looks cool but it has no purpose", "You won a yearly baking contest in the village and got the first place!", "You were invited to flower viewing by Hakurei Shrine", "You were almost eaten by evil yokai but were saved by a stranger who flew away before you could see them. The scar on your face reminds you everyday that you're alive and that you owe them your life forever", "You created a library that is rivaling the one in the Scarlet Mansion but books often vanish and you can't replenish them fast enough",
            "You defeated an evil beast yokai and saved stranger's life", "You became very great baker", "Your freelance gig used to be making money by pretending to be a shrine maiden", "You became friends with a talking (european) dragon and he now comes by", "Your face mutated to look like otter", "You were cursed to have cannibal cravings during the full moon on the 13th of November, you also slowly started growing hair on your body and people think you are turning into a complete werewolf", "You bought a very cool dark hoodie", "You recieved the most amount of presents during Christmas", "You met Santa Claus", "You made friends with a skeleton clan", "You tamed a powerful Eastern dragon and he now keeps you a company, and occasionally transports you to different locations", "You tamed a nameless cat Youkai and she became your maid", "You saved the scrub-jay tengu's species of youkai from being exterminated and he became your personal battler and a good friend", "You started growing cucumbers and berry plants", "You learnt a secret forbidden technique that allows you to create blades from any part of your body in an instance though it hurts like hell",
            "You lost a friend and he now lives in New Hell", "Fairies think you're stupid", "A fairy kidnapped you once and came back home very dehydrated and discovered that you have grown a set of fairy wings", "You grew a giant lizard tail", "You found a cursed wine and made it into a weapon of sorts, now it is forever stuck on your body and doesn't want to be removed", "All fairies declared war on you", "Your reputation was slandered by some newspaper articles written by tengu yokais" , "You are constantly being pranked by Earth Rabbit and it caused you to be oftenly extremely sleep-deprived, you might not be able to handle it phychologically anymore", "You found a lucky clover", "you learnt how to extract a magical nectar from the Yokai Forest and now everyone in village wants to drink the great tea that you've brewed", "You managed to catch the Beluga Sturgeon at Misty Lake and many fishers go to you for the advice out of respect", "You caught a Giant Yokai Sea Demon god who almost destroyed all of the village in one of your fishing journeys to the Misty Lake but the village was saved, however it was greatly damaged with many lives being lost in the incident",
            "Your arm grew a mouth and eyes and now talks", "You made friends with few Earth Rabbits who often trust you to help with performing pranks on Reisen", "You became friends with a gang of one ghost yokai, 2 kappas and 1 lunar rabbit soldier, and together you often play laser tag in space on Monday afternoon", "You run a yokai nursery in spare time that takes care of weak yokai who cannot fend for themselves against human vigilante", "You become the best dancer that the village has ever seen", "You made friends with a fisherman who tells you legendary myths every now and then about the things he's seen, you are impressed and learn a lot of wisdom from his ancient tales", "You make friends with the man-eating yokai and even, organize a labor union for the kappa before getting into trouble", "Bunbunmaru Newspaper have published your half-nude photos before withot your permission which created conflict with the tengu yokai and you however they did make a formal apology, though kind of late and you hold a grudge on tengus and their newspaper reporter Aya Shameimaru", "You had part-time gig at Geidontei bar and became good friends with Miyoi Okunoda before leaving. Nowadays, she asks you for help sometimes when the bar is half-destroyed by drunk oni or mean drunk yokai. You gete these requests   very  very often.",
        "You developed a form of OCD and now barely leave home", "You have gotten great at gardening various plants", "You became a famous poet in the village", "You managed to create your first doll from being tutored by Alice", "You became the greatest alcoholic known to Gensokyo", "You lost a bet and had to climb Yokai Mountain naked in winter and survived it", "Everyone in the village trolls you", "You fixed the chairlift to the Moriya Temple and now it is fully functional which resulted in them outcompeting the Hakurei Shrine in the faiths' rivalry", "You taught the villagers the concept of a car and how the smoke of life pollutes nature leading to a dangerous loss of habitat for fairies, yokai and gods, in this world the kappa are nearly extict and the barrier is very much weakened", "You lost your driving license", "You lose your shrine license", "Your agnostism killed a lot of yokai", "You've been teleporting bread with Yukari for 3 days and caused an apocalyptic incident that led to many unfortunate turns of events that eventually led to the realm of Hell taking over the Human Village and terrorizing the remaining living humans", "You have gotten Ibuki Suika drunk", "You lost a competition in chess", "You tried to make MMO RPG with Nitori but it didn't work well and they kicked you out from the team",
        "You became an honorary citizen of the Lunar Capital", "You slayed a terrrifying vampire", "You bake very good pumpkin pies on Halloween", "You defended the village bravely against an invasion of demons from Hell", "You defended the village from a vampire invasion led by terrifying yokai", "You saved the village from fairy invasion", "You hangout with fairies", "You were lost in a cave around Misty Lake but were guided back to safety by a Spring fairy and now you feel gratitude to the fairies and want to repay them for its kindness", "You started an apple orchard and it's doing well", "You have planted a divine tree in your backyard and people often ask you to come to pray to it", "You've planted mandrakes to cast off thieves but you regret it every night when you hear them scream!", "You were almost frozen to death but somehow survived, and now you have an immunity to cold tempertures", "You've made friends with tengu yokai and are often welcome for flower viewings", "You won a monopoly game playing with Kanako and Reimu", "You have sunglasses", "You found a cool seashell but it got stolen from you by unknown", "You lost your faith in humanity", "You helped building a tree house for little fairies at the Mist Lake", "You lost at chess to Aya", "You are the biggest donator of books in Gensokyo",
        "You've become Kaguya's rival in every single gaming tournament", "You became very good player at mahjong and play with old yokai a lot", "You own a fairy mercenary squadron that guards you from all youkai that dare to approach your humble abode", "As a hobby, you started throwing rocks"
        ]

 let yourTrackDrum =  new Audio();
let victoryfile = new Audio();
victoryfile.src = 'audio/victory.mp3'

   let downloadimg  = null;
     let canvas = null;
 
async function start2hu() {  
 function convertImgToBase64(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            let reader = new FileReader();
            reader.onloadend = function() {
                resolve(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.onerror = reject;
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    });
} 
 
async function TakeScreenshot() {
    console.log("test1!");
    let mainpicture = document.getElementById("father");

    let snwidth = mainpicture.scrollWidth;
    let snheight = mainpicture.scrollHeight + 30; //this program really hates text

    let wtfclone = mainpicture.cloneNode(true);
 
    let imgs = Array.from(wtfclone.getElementsByTagName("img"));
    await Promise.all(imgs.map(async (img) => {
        if (img.src && !img.src.startsWith("data:")) {
            try {
                img.src = await convertImgToBase64(img.src);
            } catch (e) {
                console.warn("Could not bundle image: " + img.src, e);
            }
        }
    }));

 
    let originalStyles = document.querySelectorAll("style");
    originalStyles.forEach(style => {
        wtfclone.appendChild(style.cloneNode(true));
    });
 wtfclone.querySelector("#tbtn").textContent = "Add Your AVATAR?";
 
 if (tsun  >1) {  
wtfclone.querySelectorAll("#marisaaaa").forEach(element => {
    element.style.width = "150px";
}) 
}

 
    let serializer = new XMLSerializer();
    let rawfather = serializer.serializeToString(wtfclone);

    let SVGscreenhack = `<svg xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="${snwidth}" height="${snheight}">
            <div xmlns="http://www.w3.org/1999/xhtml" style="margin: 0; padding: 0; line-height: 1.2;">
                ${rawfather} 
            </div>
        </foreignObject>
    </svg>`;
 
    let svgURL = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(SVGscreenhack);
    let invc = document.createElement("img"); 
     
    invc.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = snwidth;
        canvas.height = snheight;
        
        let ctx = canvas.getContext("2d");
        ctx.drawImage(invc, 0, 0);

        let downloadimg = document.getElementById("imgdownload");
        downloadimg.download = "Touhou_Life_Roulette.png";
        downloadimg.href = canvas.toDataURL("image/png");
    };
    
    invc.src = svgURL;

}
 
    document.getElementById("tbtn").disabled = true;

    setTimeout( () =>{

document.getElementById("tbtn").disabled = false}, (13000));

document.getElementById("imgdownload").classList.add("imgdead");
  setTimeout(() => {document.getElementById("imgdownload").classList.remove("imgdead")}, (13000));


setTimeout(() => {
    TakeScreenshot();
}, 13000);
 

     let restartProgress = document.querySelectorAll(".option");

    restartProgress.forEach(element => {
        element.remove(); });
 
let mySheet = document.styleSheets[0];
Array.from(mySheet.cssRules).find(r => r.selectorText === '#marisaaaa').style.width = "300px";

    
 
 
 let bucket = new BigUint64Array(1);

 let shuffler = new Uint8Array(1); 
makeROLL = () => (crypto.getRandomValues(bucket), Number(bucket[0] % 100n) + 1);



const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

 function StartShuffling(slotName) {

let conf = shufflingSession[slotName];
 let WheelIndex = 0;
  let chosenIndex = null;
let accumulatedTime = 0;


 let heartstopMarkers = [];
  

let firstHalfLimit = Math.ceil(conf.biasHeartstop/ 2);

let activeMilestoneIndex = 0;


let timeIntervals = (1 << conf.biasHeartstop) - 1; 
    let oneUnitOfTime = conf.biasDuration / timeIntervals;

   for (let i = 0; i < conf.biasHeartstop; i++) {
        // Bitwise shift (1 << i) creates the 1, 2, 4, 8 proportional curve scale perfectly
        accumulatedTime += oneUnitOfTime * (1 << i);
        heartstopMarkers.push(accumulatedTime);
   }
let startTime = Date.now();

   function MasterShuffley() {

 conf.ticket = setTimeout(() =>  {  


 
 chosenIndex = (typeof conf.friendlyarray[WheelIndex] === "function") ? conf.friendlyarray[WheelIndex]() : conf.friendlyarray[WheelIndex];

let shufflecharacter = chosenIndex;
let shufflecharacterpath = `images/characters/${chosenIndex}.png`;
let shufflelocationcharacterpath =  `images/locations/${chosenIndex}.png`;


if (["seshMarried", "seshBF", "seshHATER",  "seshMASTER", "seshdrinkingBuddy", "seshsecretCrush", "seshKILLER"].includes(slotName))
{   
 document.getElementById(conf.yourID).innerHTML = `<img src="${shufflecharacterpath}" alt="${shufflecharacter}" class="baby option""> <div class="baby option"> ${shufflecharacter} </div> `

}   else if  (["seshDATE", "seshDATEII", "seshDATEIII"].includes(slotName)) {  
document.getElementById(conf.yourID).innerHTML = `<img src="${shufflecharacterpath}" alt="${shufflecharacter}" class="option" id="marisaaaa"> <div class="baby option"> ${shufflecharacter} </div>`
}
else if (["seshSPECIES", "seshPROFESSION", "seshChildCount", "seshuniqueweaponry", "seshMagicLores", "seshUniqueTraitors"].includes(slotName))
{document.getElementById(conf.yourID).innerHTML = ` <div class="flex option"> ${shufflecharacter}</div> ` 
 
}


else if (slotName === "seshChosenHome")
{
document.getElementById(conf.yourID).innerHTML = `<img src="${shufflelocationcharacterpath}" alt="${shufflecharacter}" style="width:300px" class="baby option"> <div class="baby option"> ${shufflecharacter} </div>`
}


WheelIndex = (WheelIndex + 1) % conf.friendlyarray.length;

let millisecondsPassed = Date.now() - startTime;
if (activeMilestoneIndex < conf.biasHeartstop && millisecondsPassed >= heartstopMarkers[activeMilestoneIndex]) {
    
 let currentHeartstopNumber = activeMilestoneIndex + 1;  

                if (currentHeartstopNumber <= firstHalfLimit) {
                     
                    conf.currentspeed += conf.biasDeAccel;
                } else {
                     
                    conf.currentspeed *= conf.biasDeAccelEnd;
                }

                 
                activeMilestoneIndex++;
            

 
}
 
 MasterShuffley();

 }, conf.currentspeed)




 }

 MasterShuffley();

setTimeout(() => {
clearTimeout(conf.ticket);}, conf.biasDuration);
}

let mySPECIES = null;
let oldPROFESSION = null;
let myPROFESSION = null;
let HATER = null;
let yourBF = null;
let yourMASTER = null;
let marriage = false;
let BF = false;
let HATEHATEHATE = false;
let yourDATE = null;
let drinkingBuddy = null;  
let secretCrush = null; 
let KILLER = null; 
let ChildCount = null;
let uniqueweaponry = null;
let MagicLores = null;
let UniqueTraitors = null;
let tsun = 0;

yourTrackDrum.src = 'audio/begin.mp3';
yourTrackDrum.loop = false;
yourTrackDrum.play();   

yourTrackDrum.onended = function() {
    yourTrackDrum.src = 'audio/loop.mp3';  
    yourTrackDrum.loop = true;             
    yourTrackDrum.play();                  
};

crypto.getRandomValues(bucket);
let defaultStartingPace = Number(bucket[0] % 24n) + 2;

//ProportionalityDeacceling function
let shufflingSession = {  
"seshSPECIES": {
    currentspeed: defaultStartingPace,   
biasHeartstop: null,
biasDeAccel: null, 
biasDuration: null,
biasDeAccelEnd: null,
friendlyarray: SPECIES,
yourID: "myspecies", 

},
"seshPROFESSION": {
 currentspeed: defaultStartingPace, 
biasHeartstop: null,
biasDeAccel: null, 
biasDuration: null,
biasDeAccelEnd: null,
friendlyarray: PROFESSION,
yourID: "yourprofession", 
}, 
  "seshMarried": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "marriagepartner", 
        mydiv: ""
    },
    "seshHATER": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "haters", 
    },
    "seshBF": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "friends", 
    },
    "seshMASTER": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "yourmasters", 
    },
    "seshDATE": {
       currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "crazy1", 
        },
            "seshDATEII": {
       currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "crazy2", 
        },
            "seshDATEIII": {
       currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID: "crazy3" , 
    },
    "seshdrinkingBuddy": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
        yourID:"alcoholist" , 
    },
    "seshsecretCrush": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
         yourID: "secretcrush", 
    },
    "seshKILLER": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: character,
         yourID: "killer" , 
    },
    "seshChildCount": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: ["None", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
         yourID: "childrens", 
    },
    "seshuniqueweaponry": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: WEAPONS,
         yourID:  "leweapon", 
    },
    "seshMagicLores": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: LORES_OF_MAGIC,
         yourID:  "legendarythieves", 
    },
    "seshUniqueTraitors": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: Unique_Trait,
         yourID:  "trait", 
    },
    "seshChosenHome": {
        currentspeed: defaultStartingPace,
        biasHeartstop: null,
        biasDeAccel: null, 
        biasDuration: null,
        biasDeAccelEnd: null,
        friendlyarray: LOCATIONS,
         yourID: "homehome", 
    }
}


 
  for (let slotName in shufflingSession) { 
    await pause(20);
let tile = shufflingSession[slotName];
crypto.getRandomValues(bucket);
tile.biasDuration = Number(bucket[0] % 4101n) + 2900;
crypto.getRandomValues(bucket);
tile.biasHeartstop = Number(bucket[0] % 3n) + 3;
crypto.getRandomValues(bucket);
tile.biasDeAccel = (Number(bucket[0] % 31n) + 40) / 100;
crypto.getRandomValues(bucket);
tile.biasDeAccelEnd = (Number(bucket[0] % 261n) + 130) / 100;

let ShuffledArray = [...tile.friendlyarray];
 for (let i = ShuffledArray.length - 1; i > 0; i--) {

    crypto.getRandomValues(shuffler);
    let j = shuffler[0] % (i + 1); 
    
    [ShuffledArray[i], ShuffledArray[j]] = [ShuffledArray[j], ShuffledArray[i]];}

tile.friendlyarray = ShuffledArray;
  } 


 
  await pause(24);


 


if (makeROLL() <=31) 
{
mySPECIES = SPECIES[0]
 } else

{  
crypto.getRandomValues(bucket);

let SPECIESnotH = SPECIES.filter(item => item !== "Human");
let randSPECIES = Number (bucket[0] %  BigInt(SPECIESnotH.length));
    
    mySPECIES = SPECIES[randSPECIES]; 
}

 
document.getElementById("orderz1").innerHTML += `<div class="baby option x-right x-bottom" style="width:302px; margin: 0px 0px 0px -245px;"><div class="baby">Species</div> <div id="myspecies" class="x-top flex option small"> </div>  </div>`;
StartShuffling("seshSPECIES");
 setTimeout(() => { document.getElementById("myspecies").innerHTML =  `<div> ${mySPECIES}</div>` } , shufflingSession["seshSPECIES"].biasDuration);
 

while (true) { 

  await pause(237);
crypto.getRandomValues(bucket);
let randPROFESSION = Number (bucket[0] %  BigInt(PROFESSION.length));
oldPROFESSION = PROFESSION[randPROFESSION];

if (typeof oldPROFESSION === "function") {

    let specialSpeciesEvent = oldPROFESSION(mySPECIES);

 if (specialSpeciesEvent.length === 0) {

     continue;

 } else {

 crypto.getRandomValues(bucket);
 let subConditioned = Number(bucket[0] % BigInt(specialSpeciesEvent.length));
myPROFESSION = specialSpeciesEvent[subConditioned];
break;
 }
} else {

myPROFESSION = oldPROFESSION;
break;
} 
}

 
     
document.getElementById("orderz1").innerHTML += `<div class="baby option x-bottom" style="width:298px"><div class="baby">Profession</div> <div id="yourprofession"  class="x-top flex option small"> </div> </div>`;
StartShuffling("seshPROFESSION"); 
setTimeout(() =>  {document.getElementById("yourprofession").innerHTML  = `<div> ${myPROFESSION} </div>`  }, shufflingSession["seshPROFESSION"].biasDuration);

console.log(myPROFESSION);
await pause(89);
 RNGmakers = makeROLL(); 
  let marriedCharacter = null;
 
if   (RNGmakers >= 14) {  

crypto.getRandomValues(bucket);

marriage = true; 

let randomIndex = Number (bucket[0] %  BigInt(character.length));

marriedCharacter = character[randomIndex];

 
let characterimagePath = `images/characters/${marriedCharacter}.png`;

console.log(marriedCharacter);

console.log(characterimagePath);


document.getElementById("orderz2").innerHTML += 
 `<div class="x-right x-bottom x-top baby option" style="margin-top: -1px"> Married To: 
 
 <div class="baby option small" id="marriagepartner" style="width:300px"> </div>
  </div>`;

  StartShuffling("seshMarried");
setTimeout(() =>  {document.getElementById("marriagepartner").innerHTML = `<img src="${characterimagePath}" alt="${marriedCharacter}" class="baby x-top option" style="width:300px">   
 <div class="baby option"> ${marriedCharacter}  </div> `}, shufflingSession["seshMarried"].biasDuration);
} 
    
 
await pause(60);
 
if (!marriage)

{
//we gotta make some manual coding after all, best friend if its on first column -> add css rule top 
// changing rng here yet again
if (makeROLL() >=7) {  
crypto.getRandomValues(bucket);
let randDATER = Number (bucket[0] %  BigInt(character.length));
yourDATE = character[randDATER];
// gotta exclude friend and such
let datePaths = `images/characters/${yourDATE}.png`;
document.getElementById("orderz2").innerHTML += `<div class="baby option x-right x-bottom x-top" style="margin-top: -1px"><div id="daaaaa"> Your Date: </div> <div id="daaa">    <div id="yourpeace" class="baby x-top small"  style="width:300px"> <div class="baby" id="roundob"> </div></div></div></div>`;

document.getElementById("roundob").innerHTML += `<div id="crazy1"> </div>`;
  StartShuffling("seshDATE");
setTimeout(() => {
document.getElementById("crazy1").innerHTML  = ` <img src="${datePaths}" alt="${yourDATE}" class="option" id="marisaaaa"> <div class="baby option"> ${yourDATE} </div>`
}, shufflingSession["seshDATE"].biasDuration);


 
tsun = 1;




if (tsun === 1) {

 


if (makeROLL() <=10) {
    await pause(175);
for (let i = 0; i < mySheet.cssRules.length; i++) {
    
    // 3. Search for the exact CSS rule you want to alter (e.g., your #marisaaaa ID rule)
    if (mySheet.cssRules[i].selectorText === "#marisaaaa") {
        
        // 🟢 TRUE OVERWRITE: Physically change the existing rule's width property
        mySheet.cssRules[i].style.width = "150px";
        
        // You can change the height property here too if you need to adjust it!
        break; // Stop looping once the change is made!
    }
}
document.getElementById("daaaaa").innerHTML = "Your Harem:"
crypto.getRandomValues(bucket);
randDATER = Number(bucket[0] % BigInt(character.length));
yourDATEII = character[randDATER];
datePathsII = `images/characters/${yourDATEII}.png`;
document.getElementById("roundob").innerHTML += `<div class="baby" id="crazy2"></div>`;
StartShuffling("seshDATEII");
setTimeout(() => {document.getElementById("crazy2").innerHTML = `<img src="${datePathsII}" alt="${yourDATEII}" class="option" id="marisaaaa"> <div class="baby option"> ${yourDATEII} </div>`},
shufflingSession["seshDATE"].biasDuration/2);

tsun = 2;  
}

}

if (tsun === 2) {

 
if (makeROLL() <=1) {
    await pause(134);
crypto.getRandomValues(bucket);
randDATER = Number(bucket[0] % BigInt(character.length));
yourDATEIII = character[randDATER];
datePathsIII = `images/characters/${yourDATEIII}.png`;
document.getElementById("yourpeace").innerHTML += `<div class="baby"  id="crazy3"> </div>`;
StartShuffling("seshDATEIII");
setTimeout (() => {document.getElementById("crazy3").innerHTML = `<img src="${datePathsIII}" alt="${yourDATEIII}" class="option" id="marisaaaa"> <div class="baby option"> ${yourDATEIII} </div>`},
shufflingSession["seshDATE"].biasDuration/2.1);

tsun = 3;}

}
}

}
// goes without saying but need to add the options there

if (makeROLL() >=2)  {  
    await pause(380);
crypto.getRandomValues(bucket);
let randBFs = Number (bucket[0] %  BigInt(character.length));
yourBF = character[randBFs];
let bfPath = `images/characters/${yourBF}.png`;
BF = true;
if (!marriage &&  tsun < 1) { 
document.getElementById("bestfriend").classList.add("x-top")
}
document.getElementById("orderz2").innerHTML += `<div id="bestfriend" class="baby option x-right x-bottom">Best Friend<div id="friends" class="x-top small" style="width:300px"> </div> </div>`;
StartShuffling("seshBF"); 
setTimeout (() => {document.getElementById("friends").innerHTML = `<img src="${bfPath}" alt="${yourBF}" class="baby option" style="width:300px"> <div class="baby option"> ${yourBF} </div> `},
shufflingSession["seshBF"].biasDuration); 


}

if (makeROLL() <=25) { 
     await pause(165);
crypto.getRandomValues(bucket);
let  arewegay = character.filter(item => ![yourDATE, marriedCharacter, yourBF].includes(item)); 
let randHATES = Number (bucket[0] %  BigInt(arewegay.length));
HATER = arewegay[randHATES];

let hatePath = `images/characters/${HATER}.png`;


if (!marriage &&  tsun < 1 && !BF) {
document.getElementById("hater").classList.add("x-top")
}
if (!marriage && tsun < 1) {
document.getElementById("hater").classList.add("x-right")
}
HATEHATEHATE = true;
document.getElementById("orderz2").innerHTML += `<div id="hater" class="baby option x-bottom"> Hates You   <div id="haters" class="x-top small" style="width:298px"> </div>  </div>`;
 StartShuffling("seshHATER");  


 
if (document.getElementById("orderz2").children.length < 3)
{   
 document.getElementById("haters").style.width="300px";
 document.getElementById("hater").classList.add("x-right");
}  

setTimeout (() => {document.getElementById("haters").innerHTML = `<img src="${hatePath}" alt="${HATER}" class="baby option" style="width:298px"> <div class="baby option"> ${HATER}   </div> `  },
shufflingSession["seshHATER"].biasDuration); 

 
}
 
if (marriage) {
 await pause(323);
 
    if (makeROLL() >=8) {


        if (makeROLL () >=8 ) {

    let ArrayforBabies = [];
    let ChildWeights = 0;

    for (let i = 2; i <= 13; i++)
    {

          let rawWeight = Math.pow(0.997, i) - (0.07 * i);

    

 let fullNumbersWeight = Math.round(rawWeight * 100);

ArrayforBabies.push({ count: i, weight: fullNumbersWeight});
   ChildWeights += fullNumbersWeight;
 }
 
await pause(12);
crypto.getRandomValues(bucket);
 
let RandomChildCount = Number (bucket[0] % BigInt(ChildWeights)) + 1;
  for (let i = 0; i < ArrayforBabies.length; i++) {
            RandomChildCount -= ArrayforBabies[i].weight;
            if (RandomChildCount <= 0) {
                ChildCount = ArrayforBabies[i].count;
                break; }
            
            }
            
        }


        else { 
            
            ChildCount = 1;

        }

    } else {
   ChildCount = "None";
 
    }
 
document.getElementById("orderz3").innerHTML += `<div class="baby option x-right x-bottom"> No. of children  <div id="childrens" class="x-top small"  style="width:300px"> </div> </div>`;
StartShuffling("seshChildCount");    
setTimeout (() => {document.getElementById("childrens").innerHTML = `<div class="baby option"> ${ChildCount} </div>`},shufflingSession["seshChildCount"].biasDuration);
    }       
 

 if (makeROLL() <=46) {    
await pause(80);
crypto.getRandomValues(bucket);
let randWEAPONS = Number (bucket[0] % BigInt(WEAPONS.length));
uniqueweaponry = WEAPONS[randWEAPONS];
 
document.getElementById("orderz3").innerHTML += `<div id="l-w" class="baby option x-right x-bottom"> The Legedary Weapon<div id="leweapon" class="x-top small" style="width:300px"> </div>  </div>`;

if  ((document.getElementById("orderz2").children.length === 1 && marriage)
     || (document.getElementById("orderz2").children.length === 0 && !marriage))  {

document.getElementById("l-w").classList.add("x-top")   }
 

StartShuffling("seshuniqueweaponry");
setTimeout (() => {document.getElementById("leweapon").innerHTML = `<div>  ${uniqueweaponry}  </div> `}, shufflingSession["seshuniqueweaponry"].biasDuration);
}



if (myPROFESSION === "Disciple") {
await pause(155);
crypto.getRandomValues(bucket);
let randMASTER = Number (bucket[0] %  BigInt(character.length));
yourMASTER = character[randMASTER];
let mastPath = `images/characters/${yourMASTER}.png`;
document.getElementById("orderz3").innerHTML += `<div id="w-1" class="baby option x-bottom" style="margin-top:-1px"> Master <div id="yourmasters"  class="x-top small" style="width:300px">  </div></div>`;
StartShuffling("seshMASTER");  
if ((document.getElementById("orderz2").children.length <3  && document.getElementById("orderz2").children.length != 0  &&  document.getElementById("orderz3").children.length === 3) || 
(document.getElementById("orderz2").children.length <2 && document.getElementById("orderz2").children.length != 0 && document.getElementById("orderz3").children.length === 2)) 
{ 
    document.getElementById("w-1").classList.add("x-top"); }
 

if (document.getElementById("orderz2").children.length <3  && document.getElementById("orderz3").children.length != 3) {
document.getElementById("w-1").classList.add("x-right");
}

if (document.getElementById("orderz3").children.length === 3)
{   
 document.getElementById("yourmasters").style.width="298px";
}  

setTimeout (() => {document.getElementById("yourmasters").innerHTML = `<img src="${mastPath}" alt="${yourMASTER}" class="baby option" style="width:300px"> ${yourMASTER} </div> `},
shufflingSession["seshMASTER"].biasDuration);  
}

if (myPROFESSION === "Magician") {  
    await pause(280);
crypto.getRandomValues(bucket);
let randWIZARD = Number (bucket[0] % BigInt(LORES_OF_MAGIC.length));
MagicLores = LORES_OF_MAGIC[randWIZARD];


document.getElementById("orderz3").innerHTML += `<div class="baby option x-bottom" style="margin-top:-1px" id="w-2"> Magic <div id="legendarythieves" style="width:300px" class="x-top small"> </div> </div>`;
if (document.getElementById("orderz2").children.length <3  && document.getElementById("orderz2").children.length != 0  &&  document.getElementById("orderz3").children.length === 3) {
document.getElementById("w-2").classList.add("x-top");
}
if (document.getElementById("orderz2").children.length <2 && document.getElementById("orderz2").children.length != 0 && document.getElementById("orderz3").children.length === 2) {
document.getElementById("w-2").classList.add("x-top");
}

if (document.getElementById("orderz2").children.length <3  && document.getElementById("orderz3").children.length != 3) {
document.getElementById("w-2").classList.add("x-right");
}

if (document.getElementById("orderz3").children.length === 3)
{   
 document.getElementById("legendarythieves").style.width="298px";
}  

StartShuffling("seshMagicLores");  
setTimeout (() => {document.getElementById("legendarythieves").innerHTML = `<div> You control the ${MagicLores} Sorcery! </div>`}, shufflingSession["seshMagicLores"].biasDuration);
}

 


let chosenHome = "";
let HOMEimagePath = "";
let foundIndex = null;
 let Characterhasahome = false;

await pause(63);

crypto.getRandomValues(bucket);
 
for (let index in characterHomesMap) {
    if (characterHomesMap[index].includes(marriedCharacter)) {
        foundIndex = index;  
        Characterhasahome = true;
        break;
    } 
}

let homeROLL = Number(bucket[0] % 100n) + 1; 

 
 


if   (homeROLL <=80 && Characterhasahome)   {  

  

      chosenHome =  LOCATIONS[foundIndex];
    HOMEimagePath = `images/locations/${chosenHome}.png`;

} else   { await pause(12);
    crypto.getRandomValues(bucket);
    
    let randomHOME = Number (bucket[0] %  BigInt(LOCATIONS.length));
    
    chosenHome = LOCATIONS[randomHOME];
    
    HOMEimagePath = `images/locations/${chosenHome}.png`;
    } 
 

console.log(chosenHome);
document.getElementById("orderz4").innerHTML += 
`<div class="baby option  x-bottom x-right" id="hhom"> Home  <div class="baby option x-top small"  id="homehome"  style="width:300px"> </div> </div>`;
StartShuffling("seshChosenHome");
 setTimeout (() => {document.getElementById("homehome").innerHTML = `<img src="${HOMEimagePath}" alt="${chosenHome}" class="baby option" style="width:300px"> <div class="baby option"> ${chosenHome} </div>`}, shufflingSession["seshChosenHome"].biasDuration);
 
if (document.getElementById("orderz2").children.length === 0 && document.getElementById("orderz3").children.length === 0) { 
document.getElementById("hhom").classList.add("x-top");
}
 await pause(37);
let Problemchild = makeROLL();


 if (Problemchild >=1) { 
 
    

    if (Problemchild  <=21) { 
        if (yourBF != null) {  

drinkingBuddy =  yourBF;

} 


    } else if   

  (Problemchild <= 46) { 
    if (marriedCharacter != null) { 
drinkingBuddy = marriedCharacter;
}  

}  


    if (drinkingBuddy == null)  {  
 await pause(12);
 crypto.getRandomValues(bucket);
let randDrunk = Number (bucket[0] %  BigInt(character.length));
drinkingBuddy = character[randDrunk];
 }

 let drunkPath = `images/characters/${drinkingBuddy}.png`;
document.getElementById("orderz4").innerHTML += `<div id="ace" class="baby option x-bottom x-right"> Drinking Buddy <div id="alcoholist" class="baby x-top small"  style="width:300px"> </div> </div>`;
StartShuffling("seshdrinkingBuddy"); 
if ((document.getElementById("orderz3").children.length <2 || document.getElementById("orderz3").children.length != 0) ||   (document.getElementById("orderz3").children.length <1 && document.getElementById("orderz2").children.length <2)) {
document.getElementById("ace").classList.add("x-top");
document.getElementById("ace").style.marginTop = "-1px";
}


setTimeout (() => {document.getElementById("alcoholist").innerHTML = `<img src="${drunkPath}" alt="${drinkingBuddy}" class="baby option" style="width:300px"> <div class="baby option"> ${drinkingBuddy} </div>`},
shufflingSession["seshdrinkingBuddy"].biasDuration); 
}

 await pause(405);
if (makeROLL() >=40) {  
crypto.getRandomValues(bucket);
let notwyife =  character.filter(item => ![yourDATE, marriedCharacter, HATER].includes(item)); 
let randCrusher = Number (bucket[0] %  BigInt(notwyife.length));
secretCrush = notwyife[randCrusher];
let crushingPath = `images/characters/${secretCrush}.png`;


document.getElementById("orderz4").innerHTML += `<div class="baby option x-bottom" id="swrd"> Secret Crush <div id="secretcrush"  style="width:298px" class="baby x-top small"> </div> </div>`;
StartShuffling("seshsecretCrush");

if ((document.getElementById("orderz3").children.length <3 || document.getElementById("orderz3").children.length != 0) ||   (document.getElementById("orderz3").children.length <1 && document.getElementById("orderz2").children.length <3)) {
document.getElementById("swrd").classList.add("x-top");
document.getElementById("swrd").style.marginTop = "-1px";
}

setTimeout (() => {document.getElementById("secretcrush").innerHTML = `<img src="${crushingPath}" alt="${secretCrush}" class="baby option" style="width:298px"> <div class="baby option"> ${secretCrush}</div> `}, 
shufflingSession['seshsecretCrush'].biasDuration);
}

if (makeROLL() >=84) {  
    await pause(141);
crypto.getRandomValues(bucket);
let randKILLER = Number (bucket[0] %  BigInt(character.length)); 
KILLER = character[randKILLER];
let killsPath = `images/characters/${KILLER}.png`;

document.getElementById("orderz5").innerHTML += `<div class="baby option x-right"> Your Killer <div style="width:297px; margin-right:3px"   id="killer" class="baby x-top small"> </div>  </div> `;
StartShuffling("seshKILLER");  
setTimeout (() => {document.getElementById("killer").innerHTML = `<img src="${killsPath}" alt="${KILLER}" class="baby option" style="width:297px"> <div class="baby option"> ${KILLER} </div>`}, shufflingSession['seshKILLER'].biasDuration);
}

  await pause(33);
crypto.getRandomValues(bucket);
let randtrait = Number (bucket[0] % BigInt(Unique_Trait.length));
UniqueTraitors = Unique_Trait[randtrait];

 

document.getElementById("orderz5").innerHTML += `<div class="baby option" id="ora"   style="width:599px"> Unique Trait <div id="trait" class="x-top small">    </div> </div> `;
StartShuffling("seshUniqueTraitors");   

if  (document.getElementById("orderz5").children.length === 1)   {
document.getElementById("ora").classList.add("x-right");
document.getElementById("ora").style.width = "602px"
}  

  if (  ( document.getElementById("orderz5").children.length === 1 && document.getElementById("orderz4").children.length < 2) ||
   (document.getElementById("orderz5").children.length === 2  && document.getElementById("orderz4").children.length < 3)  
  )
     {   document.getElementById("ora").classList.add("x-secretary");  
      document.getElementById("ora").style.marginTop = "-1px";
}  

 if  (document.getElementById("orderz5").children.length === 2  && document.getElementById("orderz4").children.length < 2) 
    { document.getElementById("ora").classList.add("x-top"); 
   document.getElementById("ora").style.marginTop = "-1px";
 }

setTimeout (() => {document.getElementById("trait").innerHTML = `<div> ${UniqueTraitors}  </div> `}, shufflingSession["seshUniqueTraitors"].biasDuration);



await pause(7215);

yourTrackDrum.loop = false;   
yourTrackDrum.src = 'audio/console-log.mp3';  
await pause(170);
victoryfile.play(); 
} 
