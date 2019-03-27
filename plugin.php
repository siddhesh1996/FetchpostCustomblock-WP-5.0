<?php
/**
 * Plugin Name: Fetchpost Block Gutenberg
 * Description: Fetchpost — is a Gutenberg plugin.
 * Author: Siddhesh K
 * Author URI: https://github.com/siddhesh1996/FetchpostCustomblock-WP-5.0
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'fetchpost/src/init.php';
