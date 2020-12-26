import React, { Component } from 'react';

 function AgeComponent(props) {
  let ageTemplate = '';
  if(props.age > 5) {
    ageTemplate = <h1>you are older than 5</h1>
  } else {
     ageTemplate = <p>you are not older than 5</p>
   }
   return ageTemplate;
 }
 function UserList(props) {
   const users = props.users;
   return ( <ul>
    {users.map((user, index) => <li key={user.id}>{index} - {user.name}</li>)}
  </ul>);
 }
class App extends Component {
  render() {
    const age = 10;
    let users = [
      {id: 1, name: 'Mohammad', age: 16},
      {id: 2, name: 'Wasf', age: 34},
      {id: 3, name: 'Shad', age: 24},
    ];
   
    return (
      <div className="App">
      <AgeComponent age={age} />
      <AgeComponent age={3} />
      <UserList users={users}/>
    </div>
    );
  }
 }
export default App;