export interface UserI {
    id: string,
    name: string,
    username: string,
    emal: string,
}

export const getUser = (id: string): Promise<UserI> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
}