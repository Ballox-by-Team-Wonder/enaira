const ENAIRA_USER_TOKEN = 'enaira-user-token'

export const userToken = sessionStorage.getItem(ENAIRA_USER_TOKEN);
export const setUserToken = data => sessionStorage.setItem(ENAIRA_USER_TOKEN, JSON.stringify(data))
export const removeUserToken = () => sessionStorage.removeItem(ENAIRA_USER_TOKEN);