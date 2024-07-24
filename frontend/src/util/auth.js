import { redirect } from 'react-router-dom'

export const getTokenDuration = () => {
    const storedDuration = localStorage.getItem('expiration');
    const storedDurationDateObj = new Date(storedDuration);
    const currentTime = new Date();
    const difference = storedDurationDateObj.getTime() - currentTime.getTime();
    return difference
}
export const getAuth = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return null
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED'
    }

    return token;
}

export const tokenLoader = () => {
    return getAuth();
}

export const checkAuthLoader = () => {
    const token = getAuth();
    if (!token) {
        return redirect('/auth')
    }
    return null
}