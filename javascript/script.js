console.log("JS is here");

const serviceOptions = document.querySelectorAll(".service-option");

console.log(serviceOptions);

serviceOptions.forEach((serviceOption) => {
  serviceOption.addEventListener("click", generateRoute);
});

function generateRoute() {
  console.log("click registered");
  const serviceTitle = document.getElementById("service-title");
  const serviceContainer = document.getElementById("service-container");
  const routingTitle = document.getElementById("routing-title");
  const routingContainer = document.getElementById("routing-container");
  const profileHead = document.getElementById("profile-head");

  // hide service elements
  serviceTitle.style.display = "none";
  serviceContainer.style.display = "none";
  profileHead.style.display = "none";

  // show routing elements
  routingTitle.style.display = "block";
  routingContainer.style.display = "block";

  console.log(
    "generateRoute function is activated and service elements should be gone and routing elements should be showing"
  );
}
