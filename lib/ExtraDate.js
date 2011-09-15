require('node-date');

function zeroStrip(s) {
	return s.toString().replace(/^0+/, '');
}


Date.parseDaystamp = function(daystamp) {
	daystamp = daystamp.toString();
	var da;

/*
	if (daystamp == 'yesterday') {
		da = new Date();
		da.zeroTime();
		return da.prevWorkingDay();
	}*/
	
	var y = parseInt(daystamp.substr(0,4));
	var m = parseInt(zeroStrip(daystamp.substr(4,2)));
	var d = parseInt(zeroStrip(daystamp.substr(6,2)));

	m--;
	return new Date(y,m,d);
}

Date.prototype.daystamp = function() {
	return this.toFormat('YYYYMMDD');
}

Date.parseUnixtime = function(unixtime) {
	return new Date(unixtime*1000);
}

Date.prototype.unixtime = function() {
	return this.getTime()/1000 >> 0;
}

Date.unixtime = function() {
	return new Date().unixtime();
}