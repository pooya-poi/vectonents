
import { ArrowLeftDown, ArrowRightLeft, ArrowRightUp, ArrowUp } from "@pooya-poi/vectonents";
import { ArrowDown, ArrowLeft, ArrowRight } from "@pooya-poi/vectonents";
// import styles from "./page.module.css";



export default function Home() {
  return (
    // <div className={styles.page}>
    <div >
      <ArrowDown variants="filled" />
      <ArrowDown variants="filled-1" />
      <ArrowDown variants="outlined" />
      <ArrowDown variants="outlined-1" />
      <br />

      <ArrowLeft variants="filled" />
      <ArrowLeft variants="outlined" />

      <ArrowLeftDown variants="filled" />
      <ArrowLeftDown variants="outlined" />
      <br />

      <ArrowRight variants="filled" />
      <ArrowRight variants="outlined" />
      <br />

      <ArrowRightUp variants="filled" />
      <ArrowRightUp variants="outlined" />
      <br />
      <hr />
      <ArrowRightLeft variants="filled" />
      <ArrowRightLeft variants="outlined" />
      <ArrowRightLeft />
      <hr />
      <ArrowUp />
      <ArrowUp variants="filled" />
      <ArrowUp variants="outlined" />
    </div>
  );
}


