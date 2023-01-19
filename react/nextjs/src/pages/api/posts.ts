
export interface PostI {
    userId: string,
    id: string,
    title: string,
    body: string
}

export const getPosts = (): Promise<PostI[]> => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
}


export const getPost = (id: string): Promise<PostI> => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
}