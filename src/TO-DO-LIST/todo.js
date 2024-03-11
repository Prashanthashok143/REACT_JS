import axios from "axios";
import React, { useEffect, useState } from "react";
import "./todo.css";

const Todo = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");
  const [actor, setActor] = useState("");
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(null);
  const [updatemovie, setUpdatemovie] = useState("");
  const [updateactor, setUpdateactor] = useState("");

  useEffect(() => {
    BackendData();
  }, []);
  const BackendData = () => {
    axios
      .get(`http://localhost:3001/todo`)
      .then((result) => {
        setData(result.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handletodolist = (event) => {
    event.preventDefault();

    const formData = { movie: movie, actor: actor };
    axios
      .post(`http://localhost:3001/todo`, formData)
      .then((result) => {
        console.log(result);
        BackendData();
        setMovie("");
        setActor("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/todo/${id}`)
      .then((result) => {
        console.log(result.data);
        BackendData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEdit = (id) => {
    axios
      .get("http://localhost:3001/todo/" + id)
      .then((result) => {
        setUpdatemovie(result.data.movie);
        setUpdateactor(result.data.actor);
      })
      .catch((error) => {
        console.log(error);
      });
    setEdit(id);
  };
  const handleupdate = () => {
    axios
      .put("http://localhost:3001/todo/" + edit, {
        id: edit,
        movie: updatemovie,
        actor: updateactor,
      })
      .then((result) => {
        console.log(result.data);
        BackendData();
        setEdit(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="TodoContainer">
      <h1>To-do-list</h1>
      <form onSubmit={handletodolist}>
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <input
          type="text"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      {data?.length !== 0 ? (
        <div className="todoitems">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Movie</th>
                <th>Actor</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, movie, actor }) =>
                id === edit ? (
                  <tr>
                  <td>{id}</td>  
                    <td>
                      <input
                        className="inputedit"
                        type="text"
                        value={updatemovie}
                        onChange={(e) => setUpdatemovie(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="inputedit"
                        value={updateactor}
                        onChange={(e) => setUpdateactor(e.target.value)}
                      />
                    </td>
                    <td className="update  " colSpan={2}>
                      <button  className="btn" onClick={handleupdate}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg></button>
                    </td>
                  </tr>
                ) : (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{movie}</td>
                    <td>{actor}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit(id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};
export default Todo;
