import React from "react";
const Form = ({ handleSubmit }) => {
  return (
    
    <form className="card card-body mt-3" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder="url" name="url" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text" className="form-control" placeholder="Website Name" name="name" />
                
            </div>
            <div className="form-group">
                <textarea name="description" rows="3" className="form-control" placeholder="Write a description"></textarea>
            </div>
            <button className="btn btn-primary btn-block">Agregar</button>
    </form>
  );
};

export default Form;


/*<form onSubmit={handleSubmit}>
      <input type="text" className="form-control" placeholder="url" />
      <button>Agregar tarea</button>
    </form>
    
    
    <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder="tarea" onChange={handleSubmit} />
            </div>
            <button className="btn btn-primary btn-block">Agregar</button>
    </form>*/