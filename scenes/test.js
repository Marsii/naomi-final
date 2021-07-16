class marsii extends Scene {
	preload() {

		const anims = {};
		//Main character - Astronaut
		anims.walkright = loadSpriteSheet('images/marsii/astwalkr.png', 64, 128, 8);
		anims.walkleft = loadSpriteSheet('images/marsii/astwalkl.png', 64, 128, 8);
		anims.walkup = loadSpriteSheet('images/marsii/astwalku.png', 64, 128, 8);
		anims.walkdown = loadSpriteSheet('images/marsii/astwalkd.png', 64, 128, 8);
		anims.idle = loadSpriteSheet('images/marsii/astidle.png', 64, 128, 15);

		const scenery = {};

		var trailSheet = loadSpriteSheet('images/marsii/scenery/crashtrail.png', 546, 90, 1);
		scenery.shipTrail = new Scenery(1177, 552, trailSheet);

		var treeSheet = loadSpriteSheet('images/marsii/scenery/treeoverlayed.png', 1370, 1342, 1);
		scenery.treeOverlay = new Scenery(-1950, 80, treeSheet);

		var caveSheet = loadSpriteSheet('images/marsii/scenery/caveoverlay.png', 1808, 830, 1);
		scenery.caveOverlay = new Scenery(-1365, 1577, caveSheet);

		var pondSheet = loadSpriteSheet('images/marsii/scenery/pond.png', 848, 810, 5);
		scenery.pond = new Scenery(50, 1595, pondSheet);

		var lightningSheet = loadSpriteSheet('images/marsii/scenery/lightning.png', 1480, 560, 8);
		scenery.lightning = new Scenery(220, -700, lightningSheet);

		var watertreeSheet = loadSpriteSheet('images/marsii/scenery/watertree.png', 470, 640, 6);
		scenery.watertree = new Scenery(597, 1225, watertreeSheet);

		this.anims = anims;
		this.scenery = scenery;

		// add npcs here to loop through and display
		const npcs = {};

		const astShipSheet = loadSpriteSheet('images/marsii/npcs/brokenship.png', 353, 188, 1);
        //const astShipSheetFixedside = loadSpriteSheet('images/marsii/npcs/fixedshipSide.png', 300, 152, 1);
        //const astShipSheetQC = loadSpriteSheet('images/marsii/npcs/fixedship.png', 152, 344, 1);

		npcs.astShip = new AstShip(730, 500, astShipSheet);
        //npcs.astShip.addAnimation('repaired', astShipSheetFixedside);
        //npcs.astShip.addAnimation('uprighted', astShipSheetQC);


		//Liquid Alien States
		const liquidAlienNormal = loadSpriteSheet('images/marsii/npcs/liquidAlien.png', 64, 128, 4);
		const liquidAlienFrozen = loadSpriteSheet('images/marsii/npcs/liquidAlienF.png', 64, 128, 1);
		const liquidAlienFrozenCut = loadSpriteSheet('images/marsii/npcs/liquidAlienFC.png', 64, 128, 1);

		npcs.liquidAlien = new LiquidAlien(150, 1200, liquidAlienNormal);
		npcs.liquidAlien.addAnimation('frozen', liquidAlienFrozen);
		npcs.liquidAlien.addAnimation('cut', liquidAlienFrozenCut);

		const staticAlienNorm = loadSpriteSheet('images/marsii/npcs/staticAlien.png', 64, 128, 8);
		const staticAlienQC = loadSpriteSheet('images/marsii/npcs/staticAlienqc.png', 64, 128, 8);
		const staticAlienBad = loadSpriteSheet('images/marsii/npcs/staticAlienbqc.png', 64, 128, 8);

		npcs.staticAlien = new StaticAlien(400, -600, staticAlienNorm);
		npcs.staticAlien.addAnimation('QC', staticAlienQC);
		npcs.staticAlien.addAnimation('Bad', staticAlienBad);

		//const cosmicAlienNorm = loadSpriteSheet('images/marsii/npcs/cosmicAlien.png', 64, 130, 6));
		//const cosmicAlienQC = loadSpriteSheet('images/marsii/npcs/cosmicAlienqc.png', 64, 130, 6);

        //npcs.cosmicAlien = new CosmicAlien(-2700, -570, cosmicAlienNorm);
        //npcs.cosmicAlien.addAnimation('cosmicQC', cosmicAlienQC);

		this.npcs = npcs;

		this.map = new Map();
		this.map.preload('data/marsii.json');
	}

	setup() {

		this.character = new Character({
			walkright: loadAnimation(this.anims.walkright),
			walkleft: loadAnimation(this.anims.walkleft),
			walkup: loadAnimation(this.anims.walkup),
			walkdown: loadAnimation(this.anims.walkdown),
			idle: loadAnimation(this.anims.idle)
		});
		this.character.changeAnimation('idle');
		this.character.items['icepick'] = new Item(true); // character starts icepick surfaced
		this.character.items['emptyBattery'] = new Item(true); // and battery


		this.map.setup();

		for (const k in this.npcs) {
			this.npcs[k].setup()
		}

		for (const k in this.scenery) {
			this.scenery[k].setup()
		}
	}

	start() {
		this.map.start();
	}


	draw() {
		if (mouseIsPressed) camera.zoom = 0.3;
		else camera.zoom = 1;

		this.map.collide(this.character);
		this.map.move(this.character);
		this.map.display();

		for (const k in this.npcs) {
			this.npcs[k].display()
			if (this.npcs[k].overlap(this.character)) {
				this.npcs[k].displayDialog(this.character);
				this.npcs[k].updateDialog(this.character);
			}
		}

		for (const k in this.scenery) {
			this.scenery[k].display();
		}

		this.character.update();
		this.character.display();
	}
}