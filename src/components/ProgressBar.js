const ProgressBar = (props) => {
  return (
    <div>
      <label for="customRange1" className="form-label">
        Length in {props.currentUnit}
      </label>
      <input
        type="range"
        className="form-range"
        id="customRange1"
        min="0"
        max={props.currentUnit === "KM" ? props.max : props.max / 1.6}
        onChange={(event) => props.setValue(event.target.value)}
      ></input>
      <label for="customRange1" className="form-label">
        {Math.ceil(props.value)}
      </label>
    </div>
  );
};

export default ProgressBar;
