export interface UserI {
    id: string,
    name: string,
    username: string,
    email: string,
}

export const getUser = (id: string): Promise<UserI> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
}