<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (C) 2005-2012 Leo Feyer
 *
 * @package   backend_websitepreview
 * @author    Sergey Dyagovchenko (DyaGa), http://d.sumy.ua
 * @license   LGPL
 * @copyright Sergey Dyagovchenko 2010-2012
 */

if (TL_MODE == 'BE')
{
	$useFavicon = file_exists(TL_ROOT .  '/favicon.ico');

	$GLOBALS['TL_JAVASCRIPT'][] = '/system/modules/backend_websitepreview/html/backend_websitepreview.js';
	$GLOBALS['TL_MOOTOOLS'][] = '<script>var WSPData = {websiteTitle: "'. $GLOBALS['TL_CONFIG']['websiteTitle'] .'", useFavicon: '. (int)$useFavicon .'};</script>';

	unset($useFavicon);
}
