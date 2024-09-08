/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { socialLinks } from "./data";

const Footer = () => {

  return (
    <div className={styles.bg}>
      <div className={classNames(["custom-class", styles.wrapper])}>
        <div className={styles.logoAndText}>
          <div className={styles.logo}>
            <Link
              href="/"
            >
              <img src={"/walmart.png"} alt="Logo"  />
            </Link>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.link}>
            {socialLinks.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <item.icon className="lg:text-[26px] xl:text-[26px] text-white" />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottomWrapper}>
        <p>Copyright &copy; {new Date().getFullYear()} MB-Walmart <br/> All Rights reserved.</p>
      </div>
      </div>
      
    </div>

  );
};

export default Footer;
