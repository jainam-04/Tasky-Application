const state = {
      taskList: []
};

const taskContent = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");
const htmlTaskContent = ({ id, title, type, description, url }) => `
      <div class='col-md-6 col-lg-3 mt-3' id=${id}>
            <div class='card shadow-sm task__card'>
                  <div class='card-header d-flex justify-content-end task__card__header'>
                        <button type='button' class='btn btn-outline-primary mr-1.5' name=${id}>
                              <i class='fas fa-pencil-alt' name=${id}></i>
                        </button>
                        <button type='button' class='btn btn-outline-danger mr-1.5' name=${id}>
                              <i class='fas fa-trash-alt' name=${id}></i>
                        </button>
                  </div>
                  <div class='card-body'>
                        ${url && 
                              `<img width='100%' src=${url} alt='Card Image' class='card-img-top mb-3 rounded-lg' />`
                        }
                        <h4 class='card-title task__card__title'>${title}</h4>
                        <p class='task__card__description trim-3-lines text-muted'>${description}</p>
                        <div class='tags text-white d-flex flex-wrap'>
                              <span class='badge rounded-pill text-bg-primary'>${type}</span>
                        </div>
                  </div>
                  <div class='card-footer'>
                        <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
                  </div>
            </div>
      </div>
`;

const htmlModalContent = ({ id, title, description, url }) => {
      const date = new Date(parseInt(id));
      return `
            <div id=${id}>
                  ${
                        url && 
                        `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />`
                  }
                  <strong class='text-muted text-sm'>Created on: ${date.toDateString()}</strong>
                  <h2 class='my-3'>${title}</h2>
                  <p class='text-muted'>${description}</p>
            </div>
      `
};

const updateLocalStorage = () => {
      localStorage.setItem(
            "task",
            JSON.stringify({
                  tasks: state.taskList,
            })
      );
};