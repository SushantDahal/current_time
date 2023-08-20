import React from "react";
import ReactDOM from "react-dom/client";
import ktmDuke from "../Bikes";

console.log(ktmDuke);
const [duke, Crossfire] = ktmDuke;

const {
  colorByPopularity: [color1, color2],
} = duke;

const {
  colorByPopularity: [cf_color1, cf_color2],
} = Crossfire;

const {
  speedStats: { topSpeed: dukeTopSpeed, zero_60: dukeInitial },
} = duke;

const {
  speedStats: { topSpeed: cfTopSpeed, zero_70: cf_initail },
} = Crossfire;
const root = ReactDOM.createRoot(document.getElementById("root"));

function Duke() {
  return (
    <>
      <div className="duke">
        <table>
          <tr>
            <th>Name</th>
            <th>Top Speped</th>
            <th>0-60 (k/m)</th>
            <th>Color</th>
            <th>Optional Color</th>
          </tr>
          <tr>
            <td>{duke.model}</td>
            <td> {dukeTopSpeed}</td>
            <td> {dukeInitial + " " + "sec"}</td>
            <td>{color1}</td>
            <td>{color2}</td>
          </tr>
          <tr>
            <td>{Crossfire.model}</td>
            <td>{cfTopSpeed}</td>
            <td> {cf_initail + " " + "sec"}</td>
            <td>{cf_color1}</td>
            <td>{cf_color2}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Duke;
