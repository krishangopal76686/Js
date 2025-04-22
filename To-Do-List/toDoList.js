
function addTask()
{
  // get input value
  const getinputData = document.getElementById('task-input').value;

  // select ul
  const selectUl = document.getElementById('task-list');
  // ctrate li list
  const createlist = document.createElement('li');
  // data of input set to list
  createlist.innerText=getinputData;
  
  selectUl.append(createlist);

  // create a button
  const btDelete=document.createElement('button');
  btDelete.textContent="X";
  createlist.append(btDelete);
  
  btDelete.onclick =(e)=>
  {
        createlist.remove(e)
  }


}