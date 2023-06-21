function generateTeams() {
  var names = [
    "John",
    "Alice",
    "Michael",
    "Emily",
    "David",
    "Olivia",
    "Daniel",
    "Sophia",
    "James",
    "Isabella",
    "Jacob",
    "Emma",
  ];
  var teams = [[], [], [], []];
  while (names.length > 0) {
    for (var i = 0; i < teams.length; i++) {
      if (names.length > 0) {
        var randomIndex = Math.floor(Math.random() * names.length);
        var randomName = names[randomIndex];
        teams[i].push(randomName);
        names.splice(randomIndex, 1);
      }
    }
  }

  var teamContainer = document.getElementById("teamContainer");
  teamContainer.innerHTML = "";
  for (var i = 0; i < teams.length; i++) {
    var teamHeading = document.createElement("h2");
    teamHeading.textContent = "Team " + (i + 1);
    teamContainer.appendChild(teamHeading);

    var teamList = document.createElement("ul");
    for (var j = 0; j < teams[i].length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = teams[i][j];
      teamList.appendChild(listItem);
    }

    teamContainer.appendChild(teamList);
  }
}
