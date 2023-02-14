const findTheOldest = function(people) {
  people.sort(function(a,b) {
    const firstguy = a.yearOfDeath - a.yearOfBirth;
    const nextguy = b.yearOfDeath - b.yearOfBirth;
    return (firstguy > nextguy) ? 1:-1;
    });
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
