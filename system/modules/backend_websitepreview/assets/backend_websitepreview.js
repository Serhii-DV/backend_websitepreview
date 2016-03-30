/**
 * Backend WebsitePreview module
 * Author: Sergey Dyagovchenko, 2010-2016 <https://github.com/dyaga>
 */
;(function($, window, document){
	'use strict';

	window.addEvent('domready', function() {
		var headerElem = $('header'),
			WSPData, title, icon, linkElem, blockElem;

		// do nothing if header doesn't exist
		if (headerElem === null) return;

		WSPData	= window.Contao.WSPData,
		title	= WSPData.websiteTitle;
		icon	= WSPData.useFavicon ? 'favicon.ico' : 'system/themes/default/images/root.gif';

		linkElem = new Element('a', {
			'class': 'header_preview',
			href: $(document).getElements('base').get('href'),
			target: '_blank',
			title: title,
			html: title,
			styles: { 'background-image': 'url(' + icon + ')', 'margin-left': 0 }
		});

		blockElem = new Element('span', {
			id: 'mod_backend_websitepreview',
			'class': 'header_backend_websitepreview',
			styles: { 'float': 'left' }
		});

		blockElem.grab(linkElem).inject(headerElem.getElement('.header_user_container'), 'before');
	});
})($, window, document);
