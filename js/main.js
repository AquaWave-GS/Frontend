document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const loginWrapper = document.getElementById("login-wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const btnPopup = document.querySelector(".btnLogin-popup");
    const iconClose = document.querySelector(".icon-close");
  
    registerLink.addEventListener("click", () => {
      console.log("passou aqui registerlink");
      wrapper.classList.add("active");
    });
  
    loginLink.addEventListener("click", () => {
      console.log("passou aqui loginlink");
      wrapper.classList.remove("active");
    });
  
    btnPopup.addEventListener("click", () => {
      loginWrapper.style.display = "flex";
      wrapper.classList.add("active-popup");
      document.querySelector(".form-box.login").classList.remove("active");
      document.querySelector(".form-box.register").classList.add("active");
    });
  
    iconClose.addEventListener("click", () => {
      wrapper.classList.remove("active-popup");
      wrapper.classList.remove("active");
      document.querySelector(".form-box.login").classList.remove("active");
      document.querySelector(".form-box.register").classList.remove("active");
      setTimeout(() => (loginWrapper.style.display = "none"), 800);
    });
  
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      setTimeout(function () {
        loginForm.reset();
      }, 1500);
    });
  
    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("register-username").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
  
      setTimeout(function () {
        registerForm.reset();
      }, 1500);
    });
  
    const infoForm = document.getElementById("infoForm");
    const infoContainer = document.getElementById("infoContainer");
  
    infoForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      const imageFile = document.getElementById("image").files[0];
  
      const reader = new FileReader();
      reader.onload = function () {
        const infoCard = document.createElement("div");
        infoCard.classList.add("info-card");
  
        const img = document.createElement("img");
        img.src = reader.result;
        infoCard.appendChild(img);
  
        const infoDetails = document.createElement("div");
        infoDetails.classList.add("info-details");
  
        const infoName = document.createElement("h3");
        infoName.textContent = name;
        infoDetails.appendChild(infoName);
  
        const infoDesc = document.createElement("p");
        infoDesc.textContent = description;
        infoDetails.appendChild(infoDesc);
  
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.addEventListener("click", function () {
          infoCard.remove();
        });
        infoDetails.appendChild(removeBtn);
  
        infoCard.appendChild(infoDetails);
        infoContainer.appendChild(infoCard);
      };
  
      reader.readAsDataURL(imageFile);
      infoForm.reset();
    });
  
    const linksInternos = document.querySelectorAll('a[href^="#"]');
  
    linksInternos.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const scrollOptions = {
            top: offsetTop,
            behavior: 'smooth'
          };
  
          window.scrollTo(scrollOptions);
        }
      });
    });
  });
  