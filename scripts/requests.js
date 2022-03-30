const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("can not get the puzzle");
  }
};

const getCountry = async (codeCountry) => {
  const response = await fetch("https://restcountries.com/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === codeCountry);
  } else {
    throw new Error("can not fetch the country api");
  }
};

const getLocation = async () => {
  const response = await fetch(`https://ipinfo.io/json?token=3911f91f6009fa`);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("can't get the location");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country.name;
};
