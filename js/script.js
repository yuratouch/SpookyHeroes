const DATA = [
    {
        name: "Night Stalker",
        info: "Of the Night Stalker, there is no history, only stories. There are ancient tales woven into the lore of every race and every culture, of an impossible time before sunlight and daytime, when night reigned alone and the world was covered with the creatures of darkness--creatures like Balanar the Night Stalker. It is said that on the dawn of the First Day, all the night creatures perished. All, that is, save one. Evil's embodiment, Night Stalker delights in his malevolence. He created the primal role of the Night Terror, the Boogeyman, and as long as there have been younglings, his is the specter summoned to terrify them. This is a role he relishes; nor are these empty theatrics. He does indeed stalk the unwary, the defenseless, those who have strayed beyond the lighted paths or denied the warnings of their communities. Night Stalker serves as living proof that every child's worst nightmare....is true.",
        type: "streight"
    },
    {
        name: "Slardar",
        info: "Slardar is a Slithereen, one of the Deep Ones, guardian of a vast network of sunken cities and the ancient riches buried within them. In the lightless gulf of the deepest ocean abysses, the Slithereen Guard patrols secret treasure rooms, ever vigilant against the subaqueous thieves sent into the deeps by covetous dryland sorcerers. He is utterly loyal, and his taciturn nature hides deep knowledge of the most secret places of the sea. He rises to the shallows in spite of the pain caused him by brightness, to commit reconnaissance, to make sure no one is conspiring against the depths, and sometimes in relentless pursuit of the rare few who manage to steal off with an item from the Sunken Treasury. Because he has spent his whole life at great pressure, under tremendous weight of the sea, Slardar the Slithereen Guard is a creature of immense power.",
        type: "streight"
    },
    {
        name: "Lifestealer",
        info: "In the dungeons of Devarque, a vengeful wizard lay in shackles, plotting his escape. He shared his cell with a gibbering creature known as N'aix, a thief cursed by the Vile Council with longevity, so that its life-sentence for theft and cozening might be as punishing as possible. Over the years, its chains had corroded, along with its sanity; N'aix retained no memory of its former life and no longer dreamt of escape.",
        type: "streight"
    },
    {
        name: "Bounty Hunter",
        info: "When the hunted tell tales of Gondar the Bounty Hunter, none are sure of which are true. In whispered tones they say he was abandoned as a kit, learning his skill in tracking as a matter of simple survival. Others hear he was an orphan of war, taken in by the great Soruq the Hunter to learn the master's skill with a blade as they plumbed the dark forests for big game. Still others believe he was a lowly street urchin raised among a guild of cutpurses and thieves, trained in the arts of stealth and misdirection. Around campfires in the wild countryside his quarry speaks the rumors of Gondar's work, growing ever more fearful: they say it was he who tracked down the tyrant King Goff years after the mad regent went into hiding, delivering his head and scepter as proof. That it was he who infiltrated the rebel camps at Highseat, finally bringing the legendary thief White Cape to be judged for his crimes. And that it was he who ended the career of Soruq the Hunter, condemned as a criminal for killing the Prince's prized hellkite. The tales of Gondar's incredible skill stretch on, with each daring feat more unbelievable than the last, each target more elusive. For the right price, the hunted know, anyone can be found. For the right price, even the mightiest may find fear in the shadows.",
        type: "agility"
    },
    {
        name: "Bloodseeker",
        info: "Strygwyr the Bloodseeker is a ritually sanctioned hunter, Hound of the Flayed Twins, sent down from the mist-shrouded peaks of Xhacatocatl in search of blood. The Flayed Ones require oceanic amounts of blood to keep them sated and placated, and would soon drain their mountain empire of its populace if the priests of the high plateaus did not appease them. Strygwyr therefore goes out in search of carnage. But he learned the error of his judgment almost immediately, as Lich threw off the shackles and consumed him. The vital energy of any blood he lets, flows immediately to the Twins through the sacred markings on his weapons and armor. Over the years, he has come to embody the energy of a vicious hound; in battle he is savage as a jackal. Beneath the Mask of the Bloodseeker, in the rush of bloody quenching, it is said that you can sometime see the features of the Flayers taking direct possession of their Hound.",
        type: "agility"
    },
    {
        name: "Weaver",
        info: "The fabric of creation needs constant care, lest it grow tattered; for when it unravels, whole worlds come undone. It is the work of the Weavers to keep the fabric tight, to repair worn spots in the mesh of reality. They also defend from the things that gnaw and lay their eggs in frayed regions, whose young can quickly devour an entire universe if the Weavers let their attention lapse. Skitskurr was a master Weaver, charged with keeping one small patch of creation tightly woven and unfaded. But the job was not enough to satisfy. It nagged him that the original work of creation all lay in the past; the Loom had done its work and travelled on. He wanted to create rather than merely maintain—to weave worlds of his own devising. He began making small changes to his domain, but the thrill of creation proved addictive, and his strokes became bolder, pulling against the pattern that the Loom had woven.",
        type: "agility"
    },
    {
        name: "Invoker",
        info: "In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power. The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells—four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one—with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it. But among these early practitioners there was one exception, a genius of vast intellect and prodigious memory who came to be known as the Invoker. In his youth, the precocious wizard mastered not four, not five, not even seven incantations: He could command no fewer than ten spells, and cast them instantly. Many more he learned but found useless, and would practice once then purge from his mind forever, to make room for more practical invocations. One such spell was the Sempiternal Cantrap—a longevity spell of such power that those who cast it in the world's first days are among us still (unless they have been crushed to atoms). Most of these quasi-immortals live quietly, afraid to admit their secret: But Invoker is not one to keep his gifts hidden. He is ancient, learned beyond all others, and his mind somehow still has space to contain an immense sense of his own worth...as well as the Invocations with which he amuses himself through the long slow twilight of the world's dying days.",
        type: "intelegence"
    },
    {
        name: "Lich",
        info: "He only fell for a year or so before an outcrop snagged him. There he rested, dead but undecaying, until the geomancer Anhil thought to verify the legend of the supposedly bottomless Black Pool. Anhil's plumbline snarled with the ropes that bound the drowned magician, and up he hauled an unexpected prize. Thinking that by rendering the dead undead, he could question the Lich about the properties of the pool, he removed the bindings and commenced a simple rite of resurrection. Even the descendants of Ethreain's enemies were long forgotten by time, so there were none to warn Anhil against imprudence.",
        type: "intelegence"
    },
    {
        name: "Pugna",
        info: "Pugna, a mere thirteen months of age, was but one candidate among the local brats, and on the appointed day he was presented at the temple alongside two other promising tots. The lamas offered a jumble of worn relics to the children, treasured possessions of their former grandmaster. One boy reached for a porphyry wand that had belonged to the lama...and put it in his nostril. An impish girl pulled out an amulet that had also been the lama's, and immediately swallowed it. Pugna regarded the other two coolly, gave a merry laugh, and blasted them with gouts of emerald flame, reducing them to ashes in an instant. He then snatched up the wand and amulet, saying 'Mine!' The regents hoisted the beaming Pugna on their shoulders, wrapped him in their grandmaster's vestments, and rushed him to the throne before his mood could change. Within five years, the temple itself was another pile of ash, which pleased Pugna to no end.",
        type: "intelegence"
    }
]

const ACCORDION = document.querySelector("#accordionSpookyHeroes"),
    PODIUM = document.querySelector("#podium"),
    METHODS = ["renderContainer", "renderPodium", "addAccordionClick", "renderAttribute", "addAttributeHover"];

class Heroes {
    static createHeroes(arr) {
        let heroes = arr
            .map(hero => {
                if (hero.type == "streight") {
                    return new StreightHero(hero)
                }else if (hero.type == "agility") {
                    return new AgilityHero(hero)
                }else if (hero.type == "intelegence") {
                    return new IntelegenceHero(hero)
                }
            })
        
        let heroesAccordion = heroes
            .map((hero, index) => hero.renderHero(index))
            .join("");
        let heroesContainer = heroes
            .map(hero => hero.renderContainer())
            .join("");
        let heroesPodium = heroes
            .map(hero => hero.renderPodium())
            .join("");
        let heroesaddAccordionClick = heroes
            .map(hero => hero.addAccordionClick())
            .join("");
        let heroesAttribute = heroes
            .map(hero => hero.renderAttribute())
            .join("");
        let heroesaddAttributeHover = heroes
            .map(hero => hero.addAttributeHover())
            .join("");
        ACCORDION.innerHTML = heroesAccordion
    }
}

class Hero {
    constructor(hero) {
        this.createHero(hero);
    }

    createHero(hero) {
        for (let key in hero) {
            this[key] = hero[key];
        }
    }

    renderHero(index) {
        return `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${(this.name).replace(" ", "")}">
                    <button class="accordion-button ${index != 0 ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${(this.name).replace(" ", "")}" aria-expanded="${index != 0 ? "false" : "true"}" aria-controls="collapse${(this.name).replace(" ", "")}">
                        <img class="heroesAva" src="./images/${(this.name).replace(" ", "_")}-ava.png" alt="${(this.name).replace(" ", "")}">
                        ${this.name}
                    </button>
                </h2>
                <div id="collapse${(this.name).replace(" ", "")}" class="accordion-collapse collapse ${index != 0 ? "" : "show"}" aria-labelledby="heading${(this.name).replace(" ", "")}" data-bs-parent="#accordionSpookyHeroes">
                    <div class="accordion-body">
                        <img class="heroImg" src="./images/${(this.name).toLowerCase().replace(" ", "")}.jpg" alt="${this.name}">
                        <p>${this.info}</p>
                    </div>
                </div>
            </div>`;
    }

    renderContainer() {
        let heroContainer = document.createElement('div');
        heroContainer.id = `container-${(this.name).toLowerCase().replace(" ", "")}`;
        heroContainer.classList.add('heroContainer');
        PODIUM.append(heroContainer);
    }
}

class StreightHero extends Hero {
    constructor(hero) {
        super(hero);
    }

    renderPodium() {
        let hero = document.createElement('img');
        hero.id = `${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`;
        hero.src = `./images/${(this.name).toLowerCase().replace(" ", "")}.jpg`;
        hero.alt = `${(this.name)}`;

        let heroContainer = document.querySelector(`#container-${(this.name).toLowerCase().replace(" ", "")}`);
        heroContainer.append(hero);
    }

    addAccordionClick() {
        let hero = document.querySelector(`#${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`);
        hero.addEventListener('click', () => {
            let button = document.querySelector(`button[aria-controls="collapse${(this.name).replace(" ", "")}"]`);
            button.click();
        })
    }

    renderAttribute() {
        let heroContainer = document.querySelector(`#container-${(this.name).toLowerCase().replace(" ", "")}`);
        let attribute = document.createElement('div');
        attribute.id = `attribute-${(this.name).toLowerCase().replace(" ", "")}`;
        attribute.classList.add('attributeSymbol');
        attribute.style.backgroundImage = "url('../images/strength-attribute.png')";
        heroContainer.prepend(attribute);
    }

    addAttributeHover() {
        let hero = document.querySelector(`#${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`);
        hero.addEventListener('mouseenter', () => {
            let attribute = document.querySelector(`#attribute-${(this.name).toLowerCase().replace(" ", "")}`);
            attribute.classList.add('attributeAction');
        })
        hero.addEventListener('mouseleave', () => {
            let attribute = document.querySelector(`#attribute-${(this.name).toLowerCase().replace(" ", "")}`);
            attribute.classList.remove('attributeAction');
        })
    }
}

class AgilityHero extends Hero {
    constructor(hero) {
        super(hero);
    }
    
    renderPodium() {
        let hero = document.createElement('img');
        hero.id = `${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`;
        hero.src = `./images/${(this.name).toLowerCase().replace(" ", "")}.jpg`;
        hero.alt = `${(this.name)}`;
        
        let heroContainer = document.querySelector(`#container-${(this.name).toLowerCase().replace(" ", "")}`);
        heroContainer.append(hero);
    }

    addAccordionClick() {
        let hero = document.querySelector(`#${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`);
        hero.addEventListener('click', () => {
            let button = document.querySelector(`button[aria-controls="collapse${(this.name).replace(" ", "")}"]`);
            button.click();
        })
    }

    renderAttribute() {
        let heroContainer = document.querySelector(`#container-${(this.name).toLowerCase().replace(" ", "")}`);
        let attribute = document.createElement('div');
        attribute.id = `attribute-${(this.name).toLowerCase().replace(" ", "")}`;
        attribute.classList.add('attributeSymbol');
        attribute.style.backgroundImage = "url('../images/agility-attribute.png')";
        heroContainer.prepend(attribute);
    }

    addAttributeHover() {
        let hero = document.querySelector(`#${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`);
        hero.addEventListener('mouseenter', () => {
            let attribute = document.querySelector(`#attribute-${(this.name).toLowerCase().replace(" ", "")}`);
            attribute.classList.add('attributeAction');
        })
        hero.addEventListener('mouseleave', () => {
            let attribute = document.querySelector(`#attribute-${(this.name).toLowerCase().replace(" ", "")}`);
            attribute.classList.remove('attributeAction');
        })
    }
}

class IntelegenceHero extends Hero {
    constructor(hero) {
        super(hero);
    }
    
    renderPodium() {
        let hero = document.createElement('img');
        hero.id = `${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`;
        hero.src = `./images/${(this.name).toLowerCase().replace(" ", "")}.jpg`;
        hero.alt = `${(this.name)}`;
        let heroContainer = document.querySelector(`#container-${(this.name).toLowerCase().replace(" ", "")}`);
        heroContainer.append(hero);
    }

    addAccordionClick() {
        let hero = document.querySelector(`#${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`);
        hero.addEventListener('click', () => {
            let button = document.querySelector(`button[aria-controls="collapse${(this.name).replace(" ", "")}"]`);
            button.click();
        })
    }

    renderAttribute() {
        let heroContainer = document.querySelector(`#container-${(this.name).toLowerCase().replace(" ", "")}`);
        let attribute = document.createElement('div');
        attribute.id = `attribute-${(this.name).toLowerCase().replace(" ", "")}`;
        attribute.classList.add('attributeSymbol');
        attribute.style.backgroundImage = "url('../images/intelligence-attribute.png')";
        heroContainer.prepend(attribute);
    }

    addAttributeHover() {
        let hero = document.querySelector(`#${(this.type) + `-` + (this.name).toLowerCase().replace(" ", "")}`);
        hero.addEventListener('mouseenter', () => {
            let attribute = document.querySelector(`#attribute-${(this.name).toLowerCase().replace(" ", "")}`);
            attribute.classList.add('attributeAction');
        })
        hero.addEventListener('mouseleave', () => {
            let attribute = document.querySelector(`#attribute-${(this.name).toLowerCase().replace(" ", "")}`);
            attribute.classList.remove('attributeAction');
        })
    }
}

Heroes.createHeroes(DATA);
