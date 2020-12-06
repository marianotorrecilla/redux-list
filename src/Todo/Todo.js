import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Form from "./Form";
import { addTodo, deleteTodo, updateTodo } from "./../redux/actions/todoAction";
import shortid from "shortid";

const Todo = ({ addTodo, todo, deleteTodo, updateTodo }) => {
  console.log(todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: shortid(),
      name: e.target[1].value,
      description: e.target[2].value,
      url: e.target[0].value,
    };

    addTodo(obj);
   
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <Form handleSubmit={handleSubmit} />
          </Col>
          <Col md={6}>
            <h2 className="mt-3 text-center">Url's para Developers</h2>
            <ul>
              {todo.todos.length === 0 && <p>No hay elementos</p>}
              {todo.todos.map((t) => (
                <li key={t.id} onClick={() => updateTodo(t)} onChange={() => {}} className="mb-2">     
                    <h4>{t.name}</h4>     
                    <p>{t.description}</p>
                    <a href={t.url} target="_blank" rel="noopener noreferrer">Go to Website</a>
                  
                  <i
                    className="fas ml-5 fa-2x fa-times text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTodo(t)}
                  ></i>

                  

                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);