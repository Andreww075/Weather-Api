
//     Bad     //
const atom = {
	value: 1,

	addValue: function(value) {
		return atom.value + value;
	},
};

//     Good     //
const atom = {
	value: 1,

	addValue(value) {
		return atom.value + value;
	},
};