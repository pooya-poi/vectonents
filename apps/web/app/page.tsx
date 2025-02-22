import { ArrowDown, ArrowLeft, ArrowRight } from "@pooya-poi/vectonents";
// import styles from "./page.module.css";
import * as icons from "@pooya-poi/vectonents";


export default function Home() {
  // const variants = ["filled", "outlined", "filled-1", "outlined-1", null]; 
  const variants = ["filled", "outlined"];
  const iconNames = Object.keys(icons);
  return (
    // <div className={styles.page}>
    <div >
      {/* <ArrowDown variants="filled" />
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
      <hr />
      <ArrowUpDown variants="filled" />
      <ArrowUpDown variants="outlined" />
      <hr />
      <ArrowUpDownCorner variants="filled" />
      <ArrowUpDownCorner variants="outlined" /> */}


      {iconNames.map((iconName) => {
        const IconComponent = icons[iconName];
        return (
          <div key={iconName}>
            <h3>{iconName}</h3>
            {variants.map((variant, index) => (
              <div key={index}>
                <IconComponent variants={variant} />
                <span>{variant || "default"}</span>
              </div>
            ))}
            <br />
          </div>
        );
      })}


    </div>
  );
}


