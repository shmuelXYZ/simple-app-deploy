import "./style.css";
import {
  getAllEmploeeys,
  getEmploeeByWordSearch,
  getEmploeeById,
} from "./counter.ts";

const searchByName =
  document.querySelector<HTMLInputElement>("#searchByNameInput")!;
const searchById =
  document.querySelector<HTMLInputElement>("#searchByIdInput")!;
const clearButton = document.querySelector<HTMLButtonElement>("#clear")!;
const searchWordButton =
  document.querySelector<HTMLButtonElement>("#searchByWord")!;
const searchIdButton =
  document.querySelector<HTMLButtonElement>("#searchById")!;

const employeeList = document.querySelector<HTMLUListElement>("#employeeList")!;

// const emp = getAllEmploeeys();
// console.log(emp);

// take the value from input search and filter the list and add it to the ui.
searchWordButton.addEventListener("click", async () => {
  const searchValue =
    document.querySelector<HTMLInputElement>("#searchByNameInput")!.value;
  console.log("name:", searchValue);
  const employeeList =
    document.querySelector<HTMLUListElement>("#employeeList")!;
  employeeList.innerHTML = "";
  const employees = await getEmploeeByWordSearch(searchValue);
  console.log(employees);
  if (employees) {
    employees.forEach((employee) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="employee">
          <img src="${employee.avatar}" alt="${employee.first_name} ${employee.last_name}">
          <div>
            <h3>${employee.first_name} ${employee.last_name}</h3>
            <p>${employee.email}</p>
          </div>
        </div>
      `;
      employeeList.appendChild(li);
    });
  } else {
    employeeList.innerHTML = "<li>No results found</li>";
  }
});

// take the value from input id and filter the list and add it to the ui.
searchIdButton.addEventListener("click", async () => {
  const searchValue =
    document.querySelector<HTMLInputElement>("#searchByIdInput")!.value;
  console.log("ID:", searchValue);
  const employee = await getEmploeeById(+searchValue);
  if (employee) {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="employee">
          <img src="${employee.avatar}" alt="${employee.first_name} ${employee.last_name}">
          <div>
            <h3>${employee.first_name} ${employee.last_name}</h3>
            <p>${employee.email}</p>
          </div>
        </div>
      `;
    employeeList.appendChild(li);
  } else {
    employeeList.innerHTML = "<li>No results found</li>";
  }
});

// clear the list and input fields
clearButton.addEventListener("click", () => {
  const employeeList =
    document.querySelector<HTMLUListElement>("#employeeList")!;
  console.log("clear");
  employeeList.innerHTML = "";
  searchById.value = "";
  searchByName.value = "";
});
