var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//generate adjacency list - pplUserFollows - list of ppl that a person follows {user_id: [array of ppl user_id follows]}
//pplThatFollowUser = list of ppl that follow a given user {user_id: [array of ppl that follow user_id]}
let pplUserFollows = {};
let pplThatFollowUser = {}
for (var user in data) {
  pplUserFollows[user] = data[user].follows.slice();
  for (i = 0; i < data[user].follows.length; i++) {
    if (pplThatFollowUser[data[user].follows[i]]) {
      pplThatFollowUser[data[user].follows[i]].push(user);
    }
    else {
      pplThatFollowUser[data[user].follows[i]] = [];
      pplThatFollowUser[data[user].follows[i]].push(user);
    }
  }
}

// List everyone and for each of them, list the names of who they follow and who follows them


// Identify who follows the most people


// Identify who has the most followers


// Identify who has the most followers over 30


// Identify who follows the most people over 30


// List those who follow someone that doesn't follow them back


// List everyone and their reach (sum of # of followers and # of followers of followers)

function calculateReach() {

}

calculateReach();

