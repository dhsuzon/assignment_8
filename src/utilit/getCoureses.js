export const getCourses = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        if (!baseUrl) {
            console.error("NEXT_PUBLIC_BASE_URL is missing!");
            return [];
        }

        const res = await fetch(`${baseUrl}/courses.json`, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
            },
            cache: 'no-store' 
        });

        if (!res.ok) {
            console.error(`Fetch error! Status: ${res.status}`);
            return []; 
        }

        return await res.json();
    } catch (error) {
        console.error("Server-side fetch exception:", error);
        return [];
    }
};