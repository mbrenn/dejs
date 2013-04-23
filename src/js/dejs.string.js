"use strict";

define([],
	function () {
		var methods = {
			encodeHtml: function (text) {
				return $("<div></div>").text(text).html();
			}
		};

		return methods;
	});