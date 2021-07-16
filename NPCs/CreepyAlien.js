class CreepyAlien extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'LightCoral', 'LightCyan');
//currently untested - computer unreliable but I still want to try to make progress and migrate the dialogue from the old code. Likely contains mistakes/errors. 
		this.dialog = [ 

			/* 0 */ { npc: "Greetings! I'm suprised you approached me." },
			/* 1 */ { human: "Oh? Why is that?" },
			/* 2 */ { npc: "Most beings are too intimidated by my appearance. It's pretty saddening. But it's whatevs, I like a nice chat. Why did you approach me?" },
			/* 3 */ { human: "I need to get off this planet. Do you have anything I could use?"  },
			/* 4 */ { npc: "Oh so you only approached me because you needed something... I see :(" },
			/* 5 */ { human: "I'm... sorry? I didn't mean to cause you offense, I just really want to get home." },
			/* 6 */ { npc: "It's fine I guess :/. Anyway, I doubt I could help you, unless you needed something heated up." },
			/* 7 */ { human: "You look strong, do you think you can lift and upright a ship?" },
            /* 8 */ { npc: "Probably, but it would take a lot of effort, I wouldn't do it unless it was worth it" },
			/* 9 */ { human: "Would a... simple, polite conversation be worth it?" },
            /* 10 */ { npc: "No, since you'd just be doing it for your own gain rather then for the joy of the conversation itself >:(" },
			/* 11 */ { human: " Ugghh fine! If I get you something that makes it worth it will you do it?" },
			/* 12 */ { npc: "Of course." },
			/* 13 */ { human: "( I'll have to find something to make him less intimidating)", surface: 'alienDevice',  },


            /* 14 */ { npc: "(He has nothing else to say to you for now)", auto:[15, 18], default:14 },
            

            /* 15 */ { needsCollected: ['badDevice'], human: "Here's a device that should make you less intimaidating. Hopefully people will be less scared to approach you." },
            /* 16 */ { npc: "Ah, thank you :D! I'll upright after it's been repaired, let me know if you need anything else in the meanwhile.", remove:'badDevice'}, 
			/* 17 */ { human: "Alright, thanks", auto: 21 },

            /* 18 */ { needsCollected: ['goodDevice'], human: "Here's a device that should make you less intimidating. Hopefully people will be less scared to approach you." },
            /* 19 */ { npc: "Ah, thank you :D! I'll upright your ship by the time you get back to it.", remove:'goodDevice'}, // Alt dialogue: "Ah, thank you :D! I'm a ~̸̱̳̜̍͝c̶̱̪̳̕ȑ̷̩͚̀̿e̵̝̦̭̽̚ą̷͖͖͖̋͋̚t̶̡͉̩͔́̂̍͝u̵̦̞̇͘r̵̯̭̀é̸̩̘̰̌͋~̵̧̏͠ of my word, I'll upright it by the time you get back since it's been repaired." - ignore this
			/* 20 */ { human: "Thank you", auto: 25 }, // or maybe auto: 21? Depends on if player could wait for fixed device and still steal ship
            

            /* 21 */ { human: "(You have nothing else to say to him currently)", auto: 22, default:21},
            /* 22 */ { needsCollected: ['frozenMap', 'frozenKey'], human: "Can you please melt the ice around this map and key for me?" },
            /* 23 */ { npc: "Sure, no problem.", item: ['unmarkedMap', 'frozenMap'], item: ['unfrozenKey', 'frozenKey'] },
			/* 24 */ { human: "Thanks", auto: 25 },


            
            /* 25 */ { npc: " (He seems content and has nothing else to say)", isEnd: true, }

            



		];


	}
}