import {  useState } from "react";

function Form({ addTodo,countByType}) {
  const [val, setVal] = useState("");

  function addOne(e) {
    e.preventDefault()
    addTodo(val);
    setVal('')
  }

  function handleChange(e){
    setVal(e.target.value)
  }

  function countAll(){
    countByType('All')
  }

  function countActive(){
    countByType('Active')
  }

  function countCompleted(){
    countByType('Completed')
  }


  return (
    <form>
      <h6>What needs to be done?</h6>
      <div>
        <input type="text" value={val}  onChange={handleChange}/>
      </div>
      <div className="add_outer">
        <button className="btn add_btn" type="submit" onClick={addOne}>
          Add
        </button>
      </div>
      <div>
        <button className="btn btn_all" type="button" onClick={countAll}>All</button>
        <button className="btn btn_Active" type="button" onClick={countActive}>Active</button>
        <button className="btn btn_Completed" type="button" onClick={countCompleted}> Completed</button>
      </div>
    </form>
  );
}

export default Form;
