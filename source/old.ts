// intFormat(amount, countryCode, style)
Number.prototype.toIntlCurrency = function(
	locales: string,
	currencyType: string,
): string {
	return new Intl.NumberFormat(locales, {
		style: 'currency',
		currency: currencyType,
	}).format(this)
}
