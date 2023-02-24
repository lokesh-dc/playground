export default function CityWise({city}) {
    return (
        <div>{ city }</div>
    )
}

export async function getServerSideProps(context) {

    const { city } = context.query;

    return {
        props: {
            city
        }
    }
}