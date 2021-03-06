/**
 * BLOCK: fetchpost
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

//Import Custom components
import Fetchposts from '../Fetchposts/Fetchposts';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-fetchpost', {
	title: __( 'Fetchpost Widget' ), 
	icon: 'welcome-add-page',
	category: 'widgets',
	keywords: [
		__( 'Fetchpost Block' ),
	],
	edit: ( props ) => {
	return(
		<Fetchposts 
			apiurl="http://gutenblock.local.com/?rest_route=/wp/v2/posts"/>
		)},
	save: function( props ) {
		return (
			<div>Siddhesh</div>
		);
	},
} );
