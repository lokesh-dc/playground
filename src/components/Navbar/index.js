import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import MenuItem from "./MenuItem";
import MobileNavbar from "./MobileNavbar";

const menu = [
	{ title: "Doctors" },
	{
		title: "Condition",
		submenu: [
			{ title: "Doctors" },
			{ title: "Practology" },
			{ title: "Practology" },
			{
				title: "Practology",
				submenu: [
					{
						title: "Sub Menu 1",
						submenu: [
							{ title: "Sub Menu 2" },
							{
								title: "Sub Menu 2",
								submenu: [
									{
										title: "Sub Menu 3",
										submenu: [
											{ title: "Sub Menu 4" },
											{ title: "Sub Menu 4" },
											{ title: "Sub Menu 4" },
											{ title: "Sub Menu 4" },
										],
									},
								],
							},
						],
					},
					{ title: "Anal Fissure" },
					{ title: "Anal Fissure" },
				],
			},
			{
				title: "Practology",
				submenu: [
					{ title: "Gall Stones" },
					{ title: "Anal Fissure" },
					{ title: "Anal Fissure" },
				],
			},
		],
	},
	{ title: "Treatments" },
	{ title: "Hospitals" },
];

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<Link href="/">
					<img
						className={styles.logo}
						src="/icons/logo.png"
						alt="HexaHealth logo"
					/>
				</Link>
				<ul>
					{menu?.map((item, index) => (
						<MenuItem key={index} item={item} depth={1} />
					))}
				</ul>
			</div>

			<MobileNavbar />
		</>
	);
}
