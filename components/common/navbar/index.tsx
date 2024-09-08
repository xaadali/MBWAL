/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./navbar.module.scss";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai"
import { LiaWalletSolid } from "react-icons/lia"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";


const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)
  // This function is used for the Mobile Menu toggle.

  const mobileMenuHandler = () => {
    setIsMobileMenu(!isMobileMenu)
  };

  const handleNavigate = () => {
    router.push("/")
  }

  return (
    <>
    
    <div className={styles.wrapper}>
      <div className={classNames(["custom-class", styles.container])}>
        <div className={styles.logo}>
          <Link
            href="/"
          >
            <img src={"/logo-walmart.png"} className={styles.icon} alt="light Logo" />
          </Link>
        </div>

        <div className={styles.linkWrapper}>
          <div className={styles.links}>
            <Link
              href="/"
              className={
                pathname === "/" ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.text}>Home</div>
                <div className={styles.activeBar} />
              </div>
            </Link>
            <Link
              href="/about-us"
              className={
                pathname === "/about-us" ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.text}>
                 About US
                </div>
                <div className={styles.activeBar} />
              </div>
            </Link>
            <Link
              href="/contact-us"
              className={
                pathname === "/contact-us" ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}>
                <div className={styles.text}>
                  Contact Us
                </div>
                <div className={styles.activeBar} />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.LanguageAndLogin}>
        <Link
              href="/cart"
              className={
                pathname === "/cart" ? styles.active : styles.inactive
              }
            >
              <div className={styles.link}> 
                  <FaShoppingCart className={styles.text} />
                <div className={styles.activeBar} />
              </div>
            </Link>
          <button onClick={() => handleNavigate()}>
            Buy Now
          </button>
          <RxHamburgerMenu className={styles.menuIcon} onClick={()=>mobileMenuHandler()} />
        </div>
      </div>
    </div>
    {isMobileMenu && <MobileMenu mobileMenuHandler={mobileMenuHandler}/> }
    </>
  );
};

export default Navigation;
