export default class MyMod {

	prestart() { // where most of game code is loaded but almost none of it is executed

		// doubles the CP 
		sc.PlayerModel.inject({
			addSkillPoints(points, element, all, extra) {
				this.parent(points*1000, element, all, extra); 
			}
		})

		// makes monster fibula pages show a monster's internal name as well
		sc.EnemyPageGeneralInfo.inject({
			setData(...args) {
				this.parent(...args);
				if(!this.internalName) {
					this.internalName = new sc.TextGui("", {font: sc.fontsystem.smallFont})
					this.addChildGui(this.internalName);
					this.internalName.setAlign(ig.GUI_ALIGN.X_LEFT, ig.GUI_ALIGN.Y_BOTTOM);
				}
				if(args[1]) this.internalName.setText(args[2]);
				else this.internalName.setText("");
			}
		})

		// changes font
	/*	Object.keys(ig.LANG_DETAILS).forEach(key => {
			ig.LANG_DETAILS[key].systemFont = "comic";
		}) */

		console.log('Hello world!');

		// changes game aspect ratio from 16:9 to whatever:9
		const factor = 16 / 16; //change first 16
        window.IG_WIDTH *= factor;
		
	}
}
