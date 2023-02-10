function validExpanded(name) {
  if (name.length < 2 || name.charAt(0) !== name.charAt(0).toUpperCase()) {
    return false;
  }

  for (let i = 1; i < name.length; i++) {
    if (
      name.charAt(i) === "." ||
      name.charAt(i) !== name.charAt(i).toLowerCase()
    ) {
      return false;
    }
  }
  return true;
}

function validInitial(name) {
  if (
    name.length !== 2 ||
    name.charAt(0) !== name.charAt(0).toUpperCase() ||
    name.charAt(1) !== "."
  ) {
    return false;
  }
  return true;
}

function validName(name) {
  const fullName = name.split(" ");
  const [firstName, middleName, lastName] = fullName;

  switch (fullName.length) {
    case 1:
      return false;

    case 2:
      if (
        (validInitial(firstName) || validExpanded(firstName)) &&
        !validInitial(middleName) &&
        validExpanded(middleName)
      ) {
        return true;
      }
      return false;

    case 3:
      if (
        validInitial(firstName) &&
        validInitial(middleName) &&
        validExpanded(lastName)
      ) {
        return true;
      }
      if (
        validExpanded(firstName) &&
        validInitial(middleName) &&
        validExpanded(lastName)
      ) {
        return true;
      }
      if (
        validExpanded(firstName) &&
        validExpanded(middleName) &&
        validExpanded(lastName)
      ) {
        return true;
      }
      return false;

    default:
      return false;
  }
}

const isValidName = validName("Angelina. Kesya Putri");

console.log(isValidName);
