/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developer = arr.map(employee => {
      if(employee.profession === 'developer')return employee;
  });

  for(let dev of developer){
    console.log(dev);
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  for(let dev of arr){
    if(dev.profession === 'developer'){
      console.log(dev);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {id: 4, name:"susan", age:"20", profession:"intern"};
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
   
   arr.sort((a,b)=>{
    if(a.profession === 'admin')return -1;
    else if(b.profession === 'admin')return 1;
   });
   let index = 0;
   while(arr[index].profession === 'admin'){
    console.log(arr[index]);
    arr.shift();
   }
   console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
}
