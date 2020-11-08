import React from "react";

function Composantform () {
    
    return (

        <form className="formulaire"> 
          <label className="genre">Name</label>
          <input className="entree" type="text" placeholder="John"/>
          <br />
          <label className="genre">Email</label>
          <input className="entree" type="email" placeholder="example@example.com"/> 
          <button  type="submit"> Confirm </button>
        </form>
    
      );
    }


export default Composantform;