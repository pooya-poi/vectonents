
import { ArrowLeftDown } from "@pooya-poi/vectonents";
import { ArrowDown, ArrowLeft, ArrowRight } from "@pooya-poi/vectonents";
// import styles from "./page.module.css";



export default function Home() {
  return (
    // <div className={styles.page}>
    <div >
      <ArrowDown variants="filled"/>
      <ArrowDown variants="filled-1"/>
      <ArrowDown variants="outlined"/>
      <ArrowDown variants="outlined-1"/>
      <br />

      <ArrowLeft variants="filled"/>
      <ArrowLeft variants="outlined"/>

      <ArrowLeftDown variants="outlined"/>
    </div>
  );
}


