import { FC } from "react";
import styles from  "./header.module.scss"
import HeaderProps from "./header.interface";
import Link from "next/link";
import combineClasses from "@/helpers/combineClasses";
import Image from "next/image";
import Logo from "@/assets/burger_icon_png.png"

const Header: FC<HeaderProps> = () => {


    return <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
            <Image src={Logo} alt="" className={styles.logo_img} fetchPriority="high" />
            <span>Burger Frontend 1.0™</span></Link>
        <nav className={styles.navigation}>
            <Link href={"/discover"} className={styles.nav_link}><span>Discover</span></Link>
            <Link href={"/"} className={styles.nav_link}><span>Map</span></Link>
            <Link href={"/"} className={combineClasses(styles.nav_link, styles.special_link)}><span>Sign In</span></Link>
        </nav>
    </header>
}

export default Header;