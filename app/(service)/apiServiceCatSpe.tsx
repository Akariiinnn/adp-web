import {Budget} from "@/app/(models)/types";

export const getBudget = async (dateString: string): Promise<Budget[]> => {
    return await fetch(`http://localhost:3001/budget?` + new URLSearchParams({
        date: dateString
    }), {
        credentials: 'include'
    }).then((res) => {
        return res.json();
    })
}