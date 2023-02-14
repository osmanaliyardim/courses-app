function formatCreationDate() {
  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return date;
}

export default formatCreationDate;
