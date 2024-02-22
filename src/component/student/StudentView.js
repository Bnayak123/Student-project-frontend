import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentView = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8081/student/", {
      validateStatus: () => {
        return true;
      },
    });
    console.log(result.data);
    if (result.status === 302) {
      setStudent(result.data);
    }
  };

  return (
    <section>
      <table className="table table-bordered table hover">
        <thead className="">
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Deportment</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody classNmae="test-center">
          {student.map((student, index) => (
            <tr key={student.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.deportment}</td>
              <td className="mx-2">
                <button className="btn btn-info">View</button>
              </td>
              <td className="mx-2">
                <button className="btn btn-warning">Update</button>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentView;
