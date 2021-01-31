const ProgressBar = (props) => {

   
  
    return (
        <div>
        <label for="customRange1" class="form-label">Trip Length</label>
            <input type="range" class="form-range" id="customRange1" onChange={(event) => props.setValue(event.target.value)}></input>
            <label for="customRange1" class="form-label">{props.value}</label>
        </div>

    );
  
};
  
export default ProgressBar;