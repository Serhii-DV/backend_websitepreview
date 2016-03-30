<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2016 Leo Feyer
 * Copyright (c) 2010-2016 Sergey Dyagovchenko <https://github.com/dyaga>
 *
 * @license LGPL-3.0+
 */

if (TL_MODE === 'BE')
{
	$useFavicon = file_exists(TL_ROOT .  '/favicon.ico');

	$GLOBALS['TL_JAVASCRIPT'][] = '/system/modules/backend_websitepreview/assets/backend_websitepreview.min.js';
	$GLOBALS['TL_MOOTOOLS'][] = '<script>Contao.WSPData = {websiteTitle: "'. $GLOBALS['TL_CONFIG']['websiteTitle'] .'", useFavicon: '. (int)$useFavicon .'};</script>';

	unset($useFavicon);
}
