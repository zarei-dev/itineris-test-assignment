/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, mediaID, qouteBody, qouteSource },
	} = props;

    console.log(title)
    console.log(mediaID)
    console.log(mediaURL)


	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
            <section className="w-full h-full bg-right bg-no-repeat mb-16" style={{backgroundImage: mediaURL ?  `url(${mediaURL})` : ''} }>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="h-full justify-center lg:w-1/2">
                            <div className="quote p-2 lg:my-44 lg:ml-10 lg:p-4" style="color: #252B39;">
                                <RichText.Content
                                    tagName="h4"
                                    className="text-3xl font-semibold mb-4 font-gilory"
                                    value={ title }
                                />
                                <RichText.Content
                                    tagName="q"
                                    className="text-2xl block font-normal mb-10 qouteBody"
                                    value={ qouteBody }
                                />
                                <RichText.Content
                                    tagName="p"
                                    className="qouteSource text-base"
                                    value={ qouteSource }
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2"></div>
                    </div>
                </div>
            </section>
		</div>
	);
};

export default Save;