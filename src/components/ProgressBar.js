const ProgressBar = (props) => {

    return (
        <div>
        <label for="customRange1" className="form-label">Trip Length</label>
            <input type="range" className="form-range" id="customRange1" onChange={(event) => props.setValue(event.target.value)}></input>
            <label for="customRange1" className="form-label">{props.value}</label>
        </div>

    );
  
};
  
export default ProgressBar;