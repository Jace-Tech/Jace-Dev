import {BASE_URL} from "./"

export const fetchLogin = async (body: any) => {
    try {
        const options = { method: "POST", body, headers: { 'Content-Type': 'application/json'} }
        const request = await fetch(BASE_URL + "/auth/sign-in", options)
        const response = await request.json()
        return response
    } catch (error: any) {
        return error.message
    }
}