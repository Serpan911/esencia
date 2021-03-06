'use strict';

define([
	'underscore', 'esencia/view'
], function(_, ParentView) {
	var View = {
		el: '#content',
		template: _.template(document.getElementById('tmpl-users-layout').innerHTML)
	};

	return ParentView.extend(View);
});
