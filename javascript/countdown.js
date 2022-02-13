const now = Date.now();
const release = new Date('2020-12-10T00:00:00');

const diff = Math.abs(release - now);

const dhm = (t) => {
	let cd = 24 * 60 * 60 * 1000,
		ch = 60 * 60 * 1000
		d = Math.floor(t / cd);
		h = Math.floor((t - d * cd) / ch),
		m = Math.round((t - d * cd - h * ch) / 60000),
		pad = (n) => n < 10 ? '0' + n : n;
	
	if ( m === 60) {
		h++;
		m = 0;
	}
	if ( h === 24 ) {
		d++;
		h = 0;
	}
	
	return [d, pad(h), pad(m)];
}

const date = dhm(diff);

console.log( `Cyberpunk 2077 will be released in ${date[0]} days, ${date[1]} hours, and ${date[2]} minutes.`);