class AstShip extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'LightSteelBlue', 'white');

		this.dialog = [
			/* this number is the index in the dialog list, advanced by dialogIndex */
			/* 0 */ { npc: "Your Ship" },

			/* ab response, two options, either index number for dialog or options 
				tries each index in order to see if it is available
				if none are chosen go to default
			*/
			/* 1 */ { npc: "Do you need something from your Ship?", response: 1, a: [10, 11, 12, 13, 16], b: 2, default: 4 },
			/* 2 */ { npc: "Do you need to know what else you need before you take off or Do you want to take off? ", response: 1, a: 3, b: 0 },

			/* requirements are for the ship to display what is done */
			/* 3 */ { npc: "You'll need certain things:", requirements: true, next: 0, },
			/* 4 */ { npc: "(You don't seem to need anything else right now)", next: 0, },
			/* 5 */ { npc: "Take off?", response: 1, a: 0, b: 1 },
			/* 6 */	{},
			/* 7 */	{},
			/* 8 */	{},
			/* 9 */ {},

			/* item will give item to character 
				surface will surface an item 
				needs -- item must be surfaced
				maybe just needsSurfaced: 'icepick' ... */
			/* 10 */ { item: 'icepick', needsSurfaced: 'icepick', npc: '(You received the cutting tool)', next: 1, },
			/* 11 */ { item: 'emptyBattery', needsSurfaced: 'emptyBattery', npc: '(You received the empty battery)', next: 1, },
            // Issue encountered: after surfacing and recieving your journal you will endlessly get it and not be able to get anything else. reordering items to see if that can get around the issue.
			/* 12 */ { item: 'backupLog', needsSurfaced: 'backupLog', npc: "(You recieved your (non-functional) backup tech)", next: 0, },
			/* 13 */ { item: 'log', needsSurfaced: 'log', npc: 'You need to take a log', response: ' [1] Take real log (your only actual record of your travels) || [2] Take fake log (with inaccuarate misleading information) || [3] Cancel Interaction ', a: 14, b: 15, c: 0  },
			/* 14 */ { human: " *Takes the real log* ", item: 'realLog',  next: 0 },
			/* 15 */ { human: " *Takes the fake log* ", item: 'fakeLog', next: 0 },
			/* 16 */ { item: 'astJournal', needsSurfaced: 'astJournal', npc: 'You received your journal.', next: 1 },

		];

		this.requirements = [
			{ needed: "You need ship repairs", achieved: "You're ship has been repaired", done: false },
			{ needed: "You need your ship uprighted", achieved: "Your ship has been uprighted", done: false },
			{ needed: "You need a battery with energy", achieved: "Your battery has energy", done: false },
			{ needed: "You need an unfrozen, marked map", achieved: "You're map's marked.", done: false },
		];

	}
}