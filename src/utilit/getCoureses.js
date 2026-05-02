export const getCourses = async() => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/courses.json`,
        );
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Course fetch failed:", error);
        return [];
    }
};