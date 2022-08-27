import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';

function App() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    // console.log(task);
    const { value } = e.target;
    setTask({
      ...task,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('tasks', JSON.stringify(task));
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
      <div className="w-6/12 border-gray-400 bg-gray-200 flex flex-wrap justify-center">
        <div className="w-full flex flex-wrap justify-center ">
          <TextField
            id="outlined-basic"
            name="title"
            label="Title"
            variant="outlined"
            value={task.title}
            onChange={handleChange}
            className="w-6/12 bg-teal-200"
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
              className="w-6/12 bg-teal-200"
            />
          </div>

        </div>
        <div className="w-3/12 flex justify-between">
          <Button
            variant="contained"
            startIcon={<AddTaskIcon />}
            className="bg-teal-300 text-black hover:bg-teal-700 hover:text-white"
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button
            variant="contained"
            startIcon={<CancelIcon />}
            className="bg-teal-300 text-black  hover:bg-teal-700 hover:text-white"
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
