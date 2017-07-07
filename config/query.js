const moment = require('moment')

const parseIsraelDate = x => moment(x, 'DD/MM/YYYY')

module.exports = {
	searchArea: [
		{latitude: 32.086111, longitude: 34.769027},
		{latitude: 32.084575, longitude: 34.785463},
		{latitude: 32.073346, longitude: 34.782014},
		{latitude: 32.062221, longitude: 34.773691},
	],
	minimumEntranceDate: parseIsraelDate('15/08/2017'),
	apartment: {
		cat: 2,
		subcat: 2,
		fromPrice: 4500,
		toPrice: 6500,
		city: 1800,
		fromRooms: 2,
		toRooms: 3.5,
		fromSquareMeter: 60,
		toSquareMeter: 85,

		parking: 0,
		elevator: 0,
		airConditioner: 1,
		bars: 0,
		shelter: 0,
		renovated: 0,
		balcony: 0,
		sunProch: 0,
		warhouse: 0,
		accessibility: 0,
		Immediate: 0,
		furniture: 0,
		pandorDoors: 0,
		pets: 0,
		forPartners: 0,
		longTerm: 0,
		priceOnly: 0,
		imgOnly: 1,
	},
}