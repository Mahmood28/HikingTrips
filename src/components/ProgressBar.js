const ProgressBar = (props) => {

   
  
    return (
        <div>
        <label for="customRange1" class="form-label">Trip Length</label>
            <input type="range" class="form-range" id="customRange1" onChange={(event) => props.setValue(event.target.value)}></input>
            <label for="customRange1" class="form-label">{props.value}</label>
        </div>
    //   <Form>
    //     <Form.Group as={Row}>
    //       <Form.Label column sm="4">
    //         Trip Length
    //       </Form.Label>
    //       <Col sm="8">
    //         <RangeSlider
    //           value={value}
    //           onChange={e => setValue(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //   </Form>
    );
  
};
  
export default ProgressBar;