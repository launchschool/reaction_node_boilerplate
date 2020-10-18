import React from "react";
const CreateBoard = () => {
  return (
    <div class="popover new-board">
      <header>
        <span>Create Board</span>
        <a href="#" class="icon-sm icon-close"></a>
      </header>
      <div class="content">
        <form>
          <dl>
            <dt>Title</dt>
            <dd>
              <input type="text" placeholder='Like "Publishing Calendar"...' />
            </dd>
          </dl>
          <button class="button" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBoard;
