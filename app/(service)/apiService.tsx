
export const handleSignup = async (e, formData): Promise<boolean> => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password
            })
        });

        return response.ok;
    } catch (error) {
        console.error('Error:', error);
        return false
    }
};

export const handleLogin = async (e, formData): Promise<boolean> => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            credentials: "include",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        });

        return response.ok;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};