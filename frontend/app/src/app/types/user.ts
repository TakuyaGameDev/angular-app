export type User = {
    id: number,
    name: string,
    account_id: string
}

export type LoginRes = {
    loginUser: User,
    message: string
}