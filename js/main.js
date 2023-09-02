function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const teamMembersData = [
  {
    name: "Muhammad Hamza",
    role: "support",
    imgSrc:
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Muhammad Ahmed",
    role: "Manager",
    imgSrc:
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Muhammad Hussasin",
    role: "Engineer",
    imgSrc:
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
function generateTeamMemberCard(member) {
  return `
        <div class="card container">
          <div class="profile-picture">
            <img src="${member.imgSrc}" alt="Profile Picture" />
          </div>
          <h3 class="name">${member.name}</h3>
          <p class="topmargin"> ${member.role}</p>
        </div>
      `;
}
const teamMembersContainer = document.getElementById("teamMembers");
teamMembersData.forEach((member) => {
  const memberCardHTML = generateTeamMemberCard(member);
  teamMembersContainer.innerHTML += memberCardHTML;
});
