function appendToList() {
    const input = document.querySelector('#text-box');
    const input_value = input.value.trim();
    if (input_value === "") return;

    const li = document.createElement("li");
    const li_textbox = document.createElement("input");
    li_textbox.type = "text";
    li_textbox.disabled = true;

    li_textbox.value = input_value;

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        li_textbox.style.backgroundColor = "white"
        li_textbox.disabled = false;
        li_textbox.focus;
        li_textbox.addEventListener("keydown", handleEnter);
    };
    function handleEnter(event) {
        if (event.key === "Enter") {
            li_textbox.disabled = true;
            li_textbox.removeEventListener("keydown", handleEnter); // Optional cleanup
            console.log("Text saved:", li_textbox.value);
            li_textbox.style.backgroundColor = "rgba(0, 255, 255, 0.676)"
        }
    }
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(li_textbox);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById("list").appendChild(li);

    input.value = "";
}

// To-Do List App | Created by Mohit (@Mohiit007) | June 2025
