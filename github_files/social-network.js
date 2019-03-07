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





//generate adjacency list for directed graph:
//pplUserFollows - list of ppl that a person follows {user_id: [array of ppl user_id follows]}
//pplThatFollowUser = list of ppl that follow a given user {user_id: [array of ppl that follow user_id]}
let pplUserFollows = {};
let pplThatFollowUser = {};
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
function listNames() {
  for (let u1 in pplUserFollows) {
    for (let u2 in pplThatFollowUser) {
      if (u1 === u2) {
        console.log(u1 + " follows: " + pplUserFollows[u1] + "; and is followed by: " + pplThatFollowUser[u2]);
        break;
      }
    }
  }
}

listNames();



// Identify who follows the most people
// Identify who has the most followers
function mostFollowersOrFollows(action) {
  let obj;
  action === "FollowsMost" ? obj = pplUserFollows : obj = pplThatFollowUser;
  let max = 0;
  let most = [];
  for (let user in obj) {
    if (obj[user].length > max) {
      max = obj[user].length;
      most = [user];
    }
    else if (obj[user].length == max) {
      most.push(user);
    }
  }
  let listOfUsers = most.join(" ");
  action === "FollowsMost" ? console.log(listOfUsers + " follows the most people:", max) :
  console.log(listOfUsers + " is followed by the most people:", max);
}

mostFollowersOrFollows("FollowsMost");
mostFollowersOrFollows("MostFollowers");





// Identify who has the most followers over 30
// Identify who follows the most people over 30
function over30(action) {
  let obj;
  action === "FollowsMost" ? obj = pplUserFollows : obj = pplThatFollowUser;
  let max = 0;
  let most = [];
  for (let user in obj) {
    let count = 0;
    for (i = 0; i < obj[user].length; i++) {
      let curr = obj[user][i];
      if (data[curr].age > 30) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      most = [user];
    }
    else if (count === max) {
      most.push(user);
    }
  }
  let listOfUsers = most.join(" ");
  action === "FollowsMost" ? console.log(listOfUsers + " follows the most people over 30:", max) :
  console.log(listOfUsers + " is followed by the most people over 30:", max);
}

over30("FollowsMost");
over30("MostFollowers");







// List those who follow someone that doesn't follow them back
// aka check for the existence of cycles of length 2 in the graph
function doesntFollowBack() {
  let output = [];
  for (user in pplUserFollows) {
    let check = false;
    for (i = 0; i < pplUserFollows[user].length; i++) {
      if (pplUserFollows[pplUserFollows[user][i]].includes(user)) {
        check = true;
        continue;
      }
    }
    if (!check) {
      output.push(user);
    }
  }
  let listOfUsers = output.join(" ");
  output.length === 0 ? console.log("Everyone follows someone who follows them back") :
  console.log(listOfUsers + " follow someone who doesn't follow them back");
}

doesntFollowBack();





// List everyone and their reach (sum of # of followers and # of followers of followers)
function calculateReach() {
  let reach = {};
  for (let user in pplThatFollowUser) {
    let final = pplThatFollowUser[user];
    let arr;
    for (i = 0; i < pplThatFollowUser[user].length; i++) {
      arr = pplThatFollowUser[pplThatFollowUser[user][i]];
      final = Array.from(new Set(arr.concat(final)));
    }
    console.log(user + " has a reach of " + final.length);
  }
}

calculateReach();

