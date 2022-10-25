import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas">
      </meta>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
        egestas massa. Nullam ultricies erat a felis volutpat tempus. Ut
        tincidunt est in ultricies rutrum. Aliquam efficitur felis a aliquet
        cursus. Integer luctus ut nibh condimentum dictum. Phasellus eget turpis
        justo. Ut finibus lectus eget lectus fringilla, vel egestas magna
        cursus.{" "}
      </p>
      <p className={styles.text}>
        {" "}
        Nunc rutrum, leo non efficitur scelerisque, nulla risus elementum purus,
        sed bibendum tortor eros in erat. Maecenas ac cursus purus. Praesent
        scelerisque erat quam, egestas posuere lacus consequat quis. Nam id
        dolor ac sem euismod facilisis. Nulla volutpat purus ac elit laoreet
        rutrum. Phasellus dictum mollis tristique. Curabitur vel felis dapibus
        risus rhoncus eleifend sodales ac enim.
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
