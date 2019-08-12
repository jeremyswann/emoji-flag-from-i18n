// @ts-check
import pick from 'lodash.pick'
/** Array of regional indicator symbol letters */
const RegionalIndicatorSymbolLetters = {
	A: `\uD83C\uDDE6`,
	B: `\uD83C\uDDE7`,
	C: `\uD83C\uDDE8`,
	D: `\uD83C\uDDE9`,
	E: `\uD83C\uDDEA`,
	F: `\uD83C\uDDEB`,
	G: `\uD83C\uDDEC`,
	H: `\uD83C\uDDED`,
	I: `\uD83C\uDDEE`,
	J: `\uD83C\uDDEF`,
	K: `\uD83C\uDDF0`,
	L: `\uD83C\uDDF1`,
	M: `\uD83C\uDDF2`,
	N: `\uD83C\uDDF3`,
	O: `\uD83C\uDDF4`,
	P: `\uD83C\uDDF5`,
	Q: `\uD83C\uDDF6`,
	R: `\uD83C\uDDF7`,
	S: `\uD83C\uDDF8`,
	T: `\uD83C\uDDF9`,
	U: `\uD83C\uDDFA`,
	V: `\uD83C\uDDFB`,
	W: `\uD83C\uDDFC`,
	X: `\uD83C\uDDFD`,
	Y: `\uD83C\uDDFE`,
	Z: `\uD83C\uDDFF`,
}
/**
 * @function
 * @name getFlag
 * Country flag from a region string defined by a specific i18n locale
 * `Combine 2 regional indicator symbol letters to form flag emoji`
 * @param {string} locale [locale=en-AU] - i18n locale code
 * @returns {string} flag emoji as Regional Indicator Symbol Letter's
 */
export default function getFlag(locale) {
	const i18n = locale
	const object = RegionalIndicatorSymbolLetters
	try {
		if (!i18n) throw '@param {string} locale - is empty'
		const split = i18n.split(`-`)
		const region = [...split[1]]
		/** Lodash's _.pick(object, [paths]) */
		const pickLetters = pick(object, region)
		const arrayOfSymbols = Object.values(pickLetters)
		const flag = arrayOfSymbols.join('')
		return flag
	} catch (err) {
		throw err
	}
}

