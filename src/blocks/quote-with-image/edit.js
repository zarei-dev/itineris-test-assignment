/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


const Edit = ( props ) => {
	const {
		attributes: { title, mediaID, mediaURL, qouteBody, qouteSource },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.sizes.full.url,
			mediaID: media.id,
		} );
	};
	const onChangeQuoteSource = ( value ) => {
		setAttributes( { qouteSource: value } );
	};

	const onChangeQuoteBody = ( value ) => {
		setAttributes( { qouteBody: value } );
	};

	return (
		<div { ...blockProps }>
			<h3>{ __( 'Quote Title', 'itineris-test-assignment' ) }</h3>
			<RichText
				tagName="h4"
				placeholder={ __(
					'Write Quote title…',
					'itineris-test-assignment'
				) }
				value={ title }
				onChange={ onChangeTitle }
			/>
			<h3>{ __( 'Quote Body', 'itineris-test-assignment' ) }</h3>
			<RichText
				tagName="div"
				placeholder={ __(
					'Write Quote Body…',
					'itineris-test-assignment'
				) }
				value={ qouteBody }
				onChange={ onChangeQuoteBody }
				className="qouteBody"
			/>
			<h3>{ __( 'Quote Source', 'itineris-test-assignment' ) }</h3>
			<RichText
				tagName="div"
				className="qouteSource"
				placeholder={ __(
					'Write the bottom line…',
					'itineris-test-assignment'
				) }
				value={ qouteSource }
				onChange={ onChangeQuoteSource }
			/>
			<div className="quote-image">
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes="image"
					value={ mediaID }
					render={ ( { open } ) => (
						<Button
							className={
								mediaID ? 'image-button' : 'button button-large'
							}
							onClick={ open }
						>
							{ ! mediaID ? (
								__( 'Upload Image', 'itineris-test-assignment' )
							) : (
								<img
									src={ mediaURL }
									alt={ __(
										'Upload Quote Image',
										'itineris-test-assignment'
									) }
									style={ { width: '100px' } }
								/>
							) }
						</Button>
					) }
				/>
			</div>
		</div>
	);
};

export default Edit;
