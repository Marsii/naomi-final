class CreepyAlien extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'LightCoral', 'LightCyan');
// partially tested - i think i need certain parts of the plant alien's dialogue/route to do further testing
		this.dialog = [ 

			/* 0 */ { npc: "Greetings! I'm suprised you approached me." },
			/* 1 */ { human: "Oh? Why's that?" },
			/* 2 */ { npc: "Most beings are too intimidated by my appearance. It's pretty saddening. But it's whatevs, I like a nice chat. What's up?" },
			/* 3 */ { human: "Well, I need to get off this planet. Do you have anything I could use?"},
			/* 4 */ { npc: "Oh so you only approached me because you needed something... I see :(" },
			/* 5 */ { human: "I'm... sorry? I didn't mean to cause you offense, I just really want to get home." },
			/* 6 */ { npc: "It's fine I guess :/. Anyway, I doubt I could help you, unless you needed something heated up." },
			/* 7 */ { human: "You look strong, do you think you can lift and upright a ship?" },
            /* 8 */ { npc: "Probably, but it would take a loooot of effort, I wouldn't do it unless it was worth it" },
			/* 9 */ { human: "Would a... simple, polite conversation be worth it?" },
            /* 10 */ { npc: "No, since you'd just be doing it for your own gain rather then for the joy of the conversation itself >:(" },
			/* 11 */ { human: " Ugghh fine. If I get you something that makes it worth it will you do it?" },
			/* 12 */ { npc: "Of course." },
			/* 13 */ { human: "( I'll have to find something to make him less intimidating)", surface: 'alienDevice'},


            /* 14 */ { npc: "(He has nothing else to say to you for now)", auto:[15, 19], default:14 },
            

            /* 15 */ { needsCollected: ['badDevice'], npc : "Do you want to give him the faulty device?", response: ' [1] Yes || [2] No ', a: 16, b: 14 }, 

            /* 16 */ {human: "Here's a device that should make you less intimidating. Hopefully beings might be less scared to approach you." },
            /* 17 */ { npc: "Ah, thank you :D! I'm a ~̸̱̳̜̍͝c̶̱̪̳̕ȑ̷̩͚̀̿e̵̝̦̭̽̚ą̷͖͖͖̋͋̚t̶̡͉̩͔́̂̍͝u̵̦̞̇͘r̵̯̭̀é̸̩̘̰̌͋~̵̧̏͠ of my word, I'll upright after it's been repaired. Let me know if you need anything else in the meanwhile.", remove:'badDevice'}, 
			/* 18 */ { human: "Alright, thanks", auto: 22 },

            /* 19 */ { needsCollected: ['goodDevice'], human: "Here's a device that should make you less intimidating. Hopefully beings will be less scared to approach you." },
            /* 20 */ { npc: "Ah, thank you :D! I'll upright your ship by the time you get back to it.", remove:'goodDevice'}, // Alt dialogue: "Ah, thank you :D! , I'll upright it by the time you get back since it's been repaired." - ignore this, I'm not sure if that text in the middle would work
			/* 21 */ { human: "Thank you", auto: 22 },
            

            /* 22 */ { human: "(You have nothing else to say to him currently)", auto: 23, default:22},

            /* 23 */ { needsCollected: ['frozenMap', 'frozenKey'], human: "Can you please melt the ice around this map and key for me?" },
            /* 24 */ { npc: "Sure, no problem!", item: ['unmarkedMap', 'unfrozenKey'], item: ['frozenMap', 'frozenKey'] },
			/* 25 */ { human: "Thanks", auto: 26 },


            
            /* 26 */ { npc: " (He seems content and has nothing else to say)", isEnd: true, }

            



		];


	}
}