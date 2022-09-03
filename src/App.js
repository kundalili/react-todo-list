import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';

function App() {
 // states - task holds the input value and taskArray all input toDos
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const [taskArray, setTaskArray] = useState([])

  // useEffect - set localStorage ---------------------------------------
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskArray))
  }, [taskArray])
  
  //store each keypress in the task depending on the field entered-------
  const handleChange = (e) => {
    const { value } = e.target;
    setTask({
      ...task,
      [e.target.name]: value,
    });
  };

  //on submit
  const handleSubmit = () => {
    setTaskArray(prevState =>  [...prevState, task])
    handleCancel();
  }

  const handleCancel = () => {
    setTask({
      title: '',
      description: '',
    })
  }
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full flex flex-wrap justify-center ">
          <TextField
            id="outlined-basic"
            name="title"
            label="Title"
            variant="outlined"
            value={task.title}
            onChange={handleChange}
            className="w-9/12 bg-gray-200"
          />
          <div className="w-full flex flex-wrap justify-center">
            <TextField
              id="standard-multiline-flexible"
              name="description"
              label="Description"
              multiline
              minRows={4}
              value={task.description}
              onChange={handleChange}
              variant="outlined"
              className="w-9/12 bg-gray-200"
            />
          </div>

        </div>
        <div className="w-6/12 gap-2 flex justify-between mt-5">
          <Button
            variant="contained"
            startIcon={<AddTaskIcon />}
            className="bg-teal-200 text-black hover:bg-teal-700 hover:text-white"
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button
            variant="contained"
            startIcon={<CancelIcon />}
            className="bg-teal-200 text-black  hover:bg-teal-700 hover:text-white"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>

      </div>

    </div>
  );
}

export default App;
