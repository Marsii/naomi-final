class badend extends Scene {
//these scenes will either be pictures or short gifs that go over what happened after you got home with sentences describing the affects of your actions.  
	setup() {
		this.hitEnter = false;
        let img1 = loadImage('images/marsii/endings/alienship_ending.gif');
        let img2 = loadImage('images/marsii/endings/.gif');
        let img3 = loadImage('images/marsii/endings/ceremony_ending.gif');
        let img4 = loadImage('images/marsii/endings/rooftop_ending.gif');
        let img5 = loadImage('images/marsii/endings/.gif');
        let img6 = loadImage('images/marsii/endings/.gif');
        
}
	}

	draw() {
		background(0);
		textSize(60);
		noFill();
		textAlign(CENTER, CENTER  - 150);
		strokeWeight(2);
		stroke('pink')

		textSize(20);


		if (keyIsPressed) {
			if (keyCode == ENTER) this.hitEnter = true;
		} else {
			if (this.hitEnter) {
				this.hitEnter = false;
			}
		}
/*
        image(img1, CENTER, CENTER);
		text('You got off the planet, but you screwed a lot of beings over in the process', width/2, 200);

        image(img2, CENTER, CENTER);
        text('When you get to earth, you change the story of how you got back, making it sound like one of triumph over a group who meant to do you harm, rather than one where you harmed others out of convience.', width/2, 200);

        image(img3, CENTER, CENTER);
        text('Although you are welcomed as a hero, some people are skeptical of your tales', width/2, 200);

        image(img4, CENTER, CENTER);
        text('The ship and information and technology you stole introduces new things to the world.', width/2, 200);

        image(img5, CENTER, CENTER);
        text('People study the information you brought home, some places use it to prepare to possibly attack aliens, others use it defensively, or use it just to learn.', width/2, 200);

        image(img6, CENTER, CENTER);
        text('Later on, the earth is attacked. Numerous aliens invade the planet. Though many people remain safe, the earth is now subject to new rulers. Earth begins a darker era.', width/2, 200);


*/
		
	}
}