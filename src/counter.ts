interface emploee {
  id: Number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export async function getAllEmploeeys(): Promise<emploee[]> {
  try {
    let res = await fetch(`https://reqres.in/api/users`);
    let data = await res.json();
    let users = data.data;
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

export async function getEmploeeByWordSearch(
  word: string
): Promise<emploee[] | null> {
  try {
    if (word === "") return [];

    const users = await getAllEmploeeys();
    console.log("users:", users);
    let filteredUsers = users.find(
      (user: emploee) =>
        user.first_name.toLowerCase().includes(word.toLowerCase()) ||
        user.last_name.toLowerCase().includes(word.toLowerCase())
    );
    console.log("filter:", filteredUsers);
    return filteredUsers ? [filteredUsers] : null;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

export async function getEmploeeById(id: number): Promise<emploee | null> {
  try {
    const users = await getAllEmploeeys();
    const filteredUsers = users.find((user: emploee) => user.id === id);
    console.log(filteredUsers);
    return filteredUsers || null;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
