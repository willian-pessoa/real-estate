import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '00d0205031msh9947ee579315e73p1dc924jsn49ee403af8f0'
          },
    });

    return data;
}
