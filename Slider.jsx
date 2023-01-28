import ReactSlider from "react-slider";
import "./slider.css"; // import the CSS file

export default function Slider() {
  return (
    <div>
      {" "}
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        marks={10}
        step={10}
        markClassName="example-mark"
        min={0}
        max={100}
        renderThumb={(props, state) => (
          <div {...props}>{state.valueNow + "%"}</div>
        )}
      />
    </div>
  );
}
