import React from "react";

import Input from "../../elements/Input";
import Button from "../../elements/Button";

const CreateUser = () => {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <Input label="Name" name="name" required />
        <Button title="Submit" />
      </div>
    </form>
  );
};

export default CreateUser;
