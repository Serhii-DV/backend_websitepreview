<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');

/**
 * Contao Open Source CMS
 * Copyright (C) 2005-2012 Leo Feyer
 *
 * Formerly known as TYPOlight Open Source CMS.
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program. If not, please visit the Free
 * Software Foundation website at <http://www.gnu.org/licenses/>.
 *
 * PHP version 5
 * @copyright  Sergey Dyagovchenko (DyaGa), 2010-2012
 * @author     Sergey Dyagovchenko (DyaGa), http://d.sumy.ua/
 * @package    WebsitePreview
 * @license    LGPL
 * @filesource
 */

if (TL_MODE == 'BE')
{
	$useFavicon = file_exists(TL_ROOT .  '/favicon.ico');

	$GLOBALS['TL_JAVASCRIPT'][] = '/system/modules/backend_websitepreview/html/backend_websitepreview.js';
	$GLOBALS['TL_MOOTOOLS'][] = '<script>var WSPData = {websiteTitle: "'. $GLOBALS['TL_CONFIG']['websiteTitle'] .'", useFavicon: '. (int)$useFavicon .'};</script>';
	
	unset($useFavicon);
}

?>