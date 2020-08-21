import React from "react";

function FormTwo(props) {
    // console.log(props)
  return (
      <>
      <div className="tableCenter">
    <div className="col coWidth">
        <form onSubmit={(e)=>props.submitForm(e, props.id)}>
          <div className="input-field col s12">
            <i className="material-icons prefix">person</i>
            <input
              type="text"
              id="name-id"
              className="autocomplete"
              onChange = {(e)=> props.nameChange(e)}
              value={props.name}

            />
            <label htmlFor="name-id">Name</label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">mail</i>
            <input
              type="email"
              id="mail-id"
              className="autocomplete"
              onChange = {(e)=> props.emailChange(e)}
              value={props.email}

            />
            <label htmlFor="mail-id">Email</label>
          </div>

             
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              type="password"
              id="password-id"
              className="autocomplete"
              onChange = {(e)=> props.passwordChange(e)}
              value={props.password}

            />
            <label htmlFor="password-id">Password</label>
          </div>
          <div className="input-field col s12">

          <button className="btn waves-effect waves-light submitBtn" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>
  </div>
        </form>
        </div>
        </div>
        </>
      
  );
}

export default FormTwo;
