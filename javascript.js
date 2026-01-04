const API = "http://localhost:3000/guests";

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("employeeList");
  const form = document.getElementById("employeeForm");

  // Load employees
  fetch(API)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(emp => {
        const li = document.createElement("li");
        li.textContent = `${emp.name} | ₹${emp.salary} | Age: ${emp.age}`;
        list.appendChild(li);
      });
    })
    .catch(err => console.error("Fetch error:", err));

  // Add employee
  form.addEventListener("submit", e => {
    e.preventDefault();

    const employee = {
      name: document.getElementById("name").value,
      salary: document.getElementById("salary").value,
      age: document.getElementById("age").value
    };

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee)
    })
    .then(() => location.reload());
  });
});
