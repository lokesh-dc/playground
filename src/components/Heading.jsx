import Head from "next/head";

export default function Heading({title, metaContent}) {

    return (
        <Head>
            <title>{title}</title>
			<meta name="description" content={metaContent.substring(0,10)} ></meta>
        </Head>
    )
}