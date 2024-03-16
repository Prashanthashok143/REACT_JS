import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
const TODO = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [edit, setEdit] = useState(null);
  const [updatemovie, setUpdatemovie] = useState("");
  const [updateactor, setUpdateactor] = useState("");

  useEffect(() => {
    BackendData();
  }, []);
  const BackendData = () => {
    axios
      .get(`http://localhost:3001/comments`)
      .then((result) => {
        setData(result.data);
        setError("");
      })
      .catch((errormsg) => {
        setData(console.log(errormsg));
      });
  };
  const handlenewmovie = (event) => {
    event.preventDefault();

    const formData = { movie: title, director: director };
    axios
      .post(`http://localhost:3001/comments`, formData)
      .then((result) => {
        console.log(result);
        BackendData();
        setTitle("");
        setDirector("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelet = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`)
      .then((result) => {
        console.log(result);
        BackendData();
      })
      .catch((errormsg) => {
        console.log(errormsg);
      });
  };
  const handleEdit = (id) => {
    axios
      .get(`http://localhost:3001/comments/${id}`)
      .then((result) => {
        console.log(result.data.movie);
        console.log(result.data);
        setUpdatemovie(result.data.movie);
        setUpdateactor(result.data.director);
        setEdit(id);
      })
      .catch((errormsg) => {
        console.log(errormsg);
      });
  };
  const update = () => {
    axios
      .put(`http://localhost:3001/comments/${edit}`, {
        id: edit,
        movie: updatemovie,
        director: updateactor,
      })
      .then((response) => {console.log(response.data)
      BackendData();
    setEdit(null)})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handlenewmovie}>
        <label>Title</label>
        <input
          type="text"
          id="nam1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Director</label>
        <input
          type="text"
          id="name2"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <button type="submit">
          <RiMenuAddLine />
        </button>
      </form>
      {data?.length !== 0 ? (
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Url</td>
              <td colSpan={2}>options</td>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, movie, director }) =>
              id === edit ? (
                <tr key={id}>
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
                    <button className="btn btn-primary" onClick={update}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{movie}</td>
                  <td>{director}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleEdit(id)}>
                      <FaEdit />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelet(id)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};

export default TODO;
