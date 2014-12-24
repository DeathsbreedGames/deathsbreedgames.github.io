/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.MainMenu = function() {};

DeathsbreedGames.MainMenu.prototype = {
	create:function() {
		var click = this.game.add.text(this.game.width / 2, this.game.height / 2, 'Click to play!', { font: '30px Arial', fill: '#fff', align: 'center' });
		click.anchor.set(0.5);
		var version = this.game.add.text(5, 5, 'v1.5-alpha0', { font: '12px Arial', fill: '#fff' });
		var credits = 'Credits:\nDevelopment - DeathsbreedGames - GNU Affero GPLv3\nGraphics - CaptainCrunch80 - CC0\nMusic - FoxSynergy - CC-BY 3.0\nSFX - CaptainCrunch80 - CC0';
		var creditsText = this.game.add.text(5, this.game.height / 2 + 80, credits, { font: '12px Arial', fill:'#fff' });
	},
	update:function() {
		if(this.game.input.mouse.button == Phaser.Mouse.LEFT_BUTTON) {
			this.state.start('Game');
		}
	}
};
