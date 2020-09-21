import React, { Component } from "react";
import "./App.css";
import Firebase from "./conf/firebase";
import UserList from "./components/userList";
import SearchForm from "./components/searchForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      users: [],
      nameFormValue:"",
      ageFormValue:0,
      countryFromValue:'',
      genderFormValue:'',
    }
  }
  getFormValues(values){
    console.log("App")
      console.log(values);
      let userListFiltered = null;
      if(values.name!==""){
       // userListFiltered = this.state.users;
       this.setState({
         nameFormValue:values.name
       })
      }
      this.setState({ageFormValue:values.age})
      if(values.countrySelected!=null){
        this.setState({countryFromValue:values.countrySelected})
      }
      if(values.genderSelected!=null){
        this.setState({genderFormValue:values.genderSelected})
      }
      this.setState({ageFormValue:values.age})
      // if(userList!==[]){
      //    userListFiltered = userList.filter((user)=> values.name!=="" ? user.name.first === values.name:user.name.first);
      //    console.log(userListFiltered);
      //   //this.setState({users:userListFiltered})
      // }
  }
  async componentDidMount() {
    const userList = [];
      const Users= await this.fetchUsers();
      Users.forEach(doc => {
         //console.log(doc.data());
         userList.push(doc.data());
        });
        this.setState({
          users:userList
        })
     //  console.log(Users);
      // console.log(userList);
      //console.log(this.state.users);
    }
    
    
    fetchUsers() {
      //console.log(Firebase.getDb());
    // Get all the users from Users collection in firestore storage /!\
    return Firebase.getDb().collection("Users").get();
  }

  render() {
    
    return (
      <div className="App">
        <SearchForm name="ok" formValuesCallback={this.getFormValues}></SearchForm>
         <UserList list={this.state.users}></UserList>
      </div>
    );
  }
}

export default App;
