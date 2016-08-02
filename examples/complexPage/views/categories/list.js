'use strict';

define([
	'underscore', 'esencia', 'text!./list.html'
], function(_, esencia, template) {
	var View = {template: _.template(template)};

	View.initialize = function() {
		setTimeout(this.wait(), 300);
	};

	View.isUnchanged = function() {
		return false;
	};

	return esencia.View.extend(View);
});
