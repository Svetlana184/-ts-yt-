import axios, {AxiosResponse} from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const responce : AxiosResponse<Todo> = 
        await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Todo: " + responce.data)
    } catch (error:any) {
        if (axios.isAxiosError(error)){
            console.error("Axios error ", error.message)
            if (error.response) {
                console.log("status: ", error.response.status);
                 console.log("data: ", error.response.data);
            }
        } else {
            console.error("Error ", error.message)
        }
    }
};

fetchData();