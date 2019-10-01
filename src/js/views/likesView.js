import { elements } from "./base";

export const renderLikes = response => {
  let output;

  output = `<li>
                  <a class="likes__link" href="">
                    <figure class="likes__fig">
                      <img
                        src="https://image.tmdb.org/t/p/w500${response.poster}"
                        alt="Test"
                      />
                    </figure>
                    <div class="likes__data">
                      <h4 class="likes__name">${response.title}</h4>
                    </div>
                    <i class="fas fa-window-close deleteItem"></i>
                  </a>
                </li>`;

  elements.likesList.insertAdjacentHTML("afterbegin", output);
};

export const showLikes = () => {
  elements.likesPanel.classList.toggle("showLikes");
};

export const hideLikes = () => {
  elements.likesPanel.remove("showLikes");
};
