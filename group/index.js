 //Dummy data for demonstration
const groups = [
    { 
        name: "Goal Digger", 
        registrationDate: "2022-01-01", 
        registrationNumber: 123,
        members: ["1) Lina Barve", "2) Kiran Chaware", "3) Pranita Dhakate"]
    },
    { 
        name: "Tech Star", 
        registrationDate: "2022-02-15", 
        registrationNumber: 456,
        members: ["1) Rohini Neware", "2) Pratiksha Khakse", "3) Vanshari Temburne"]
    },
    { 
        name: "Star Coder", 
        registrationDate: "2022-03-10", 
        registrationNumber: 789,
        members: ["1) Nigam", "2) Nilesh", "3) Shrilekha"]
    },
    { 
        name: "Coding Queens", 
        registrationDate: "2022-04-1", 
        registrationNumber: 798,
        members: ["1) Rajita", " 2)Anishta", " 3) Atiya"]
    },
    { 
        name: "Coding Ninjas", 
        registrationDate: "2022-06-7", 
        registrationNumber: 111,
        members: ["1) Mia", " 2) Nathan", " 3) Olivia"]
    },
    // Add more groups as needed
];

// Function to display groups on the page
function displayGroups(groupArray) {
    const groupList = document.getElementById("group-list");
    groupList.innerHTML = "";

    groupArray.forEach(group => {
        const row = document.createElement("tr");
        row.classList.add("group-item");

        // Group Name column
        const nameCell = document.createElement("td");
        nameCell.textContent = group.name;
        row.appendChild(nameCell);

        // Group Members column
        const membersCell = document.createElement("td");
        membersCell.textContent = group.members.join(", "); // Display members as a comma-separated string
        row.appendChild(membersCell);

        // Registration Date column
        const dateCell = document.createElement("td");
        dateCell.textContent = group.registrationDate;
        row.appendChild(dateCell);

        // Registration Number column
        const numberCell = document.createElement("td");
        numberCell.textContent = group.registrationNumber;
        row.appendChild(numberCell);

        groupList.appendChild(row);
    });
}

// Function to search and filter groups based on input
function searchGroups() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredGroups = groups.filter(
        group =>
            group.name.toLowerCase().includes(searchTerm) ||
            group.members.some(member => member.toLowerCase().includes(searchTerm)) ||
            group.registrationDate.includes(searchTerm) ||
            group.registrationNumber.toString().includes(searchTerm)
    );
    displayGroups(filteredGroups);
}

// Initial display of all groups
displayGroups(groups);