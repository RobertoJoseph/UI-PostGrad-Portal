import Axios from "axios";

export const getStudents = () => async (dispatch) => {
  return Axios.get("http://localhost:9000/students")
    .then((response) => {
      //response.data.haga takecare
      console.log(response.data);
      dispatch(showStudents(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const showStudents = (students) => ({
  type: "SHOW_STUDENTS",
  payload: students,
});

export const addStudent =
  (firstName, lastName, email, password, faculty, address, isGucian) =>
  (dispatch) => {
    console.log("HAHAHAHahh in the action");
    const newStudent = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      faculty: faculty,
      address: address,
      isGucian: isGucian,
    };
    return Axios.post("http://localhost:9000/students/addStudent", newStudent)
      .then((res) => {
        alert("Successfuly Added an Student");
      })
      .catch((err) => {
        console.log(err);
      });
  };

// export const loginStudent = (email, password) => async (dispatch) => {
//   return Axios.post("http://localhost:9000/students/login", {
//     email: email,
//     password: password,
//   })
//     .then((response) => {
      
//       console.log(response.data);
//       dispatch(loginStudentSuccess(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };