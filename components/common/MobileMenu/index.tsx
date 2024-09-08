import React from "react";
import styles from "./mobileMenu.module.scss";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


export type Props = {
  mobileMenuHandler: () => void;
}
const MobileMenu = ({ mobileMenuHandler }: Props) => {


  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const pathname = usePathname()

  const togglePopup = () => {
    setPopupVisible((preview) => !preview);
  };



  return (
    <>

      <div className={styles.wrapper}>
        <div className={styles.closeRow} onClick={mobileMenuHandler}>
          <CgClose className={styles.closeIcon} />
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>

            <Link
              href="/"
              onClick={mobileMenuHandler}
              className={
                pathname === "/" ? styles.active : styles.inactive
              }
            >
              Home
            </Link>
          
            <Link
              href="/about-us"
              className={
                pathname === "/about-us" ? styles.active : styles.inactive
              }
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={
                pathname === "/contact-us" ? styles.active : styles.inactive
              }
            >
              Contact Us
            </Link>
            <Link
              href="/cart"
              className={
                pathname === "/cart" ? styles.active : styles.inactive
              }
            >
              Add To Cart
            </Link>

          </div >
        </div >
      </div >
    </>
  );
};
export default MobileMenu;
