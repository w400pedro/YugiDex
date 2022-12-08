import axios from "axios";

// const BASE_API = "";
const BASE_API = "https://yugidex-production.up.railway.app";

const token = localStorage.getItem('token')

export async function CreateUser(nome ,email, senha) {
    try {
        const response = await axios.post(`${BASE_API}/user/cadastrar`, {
            nome:nome,
            email: email,
            senha: senha
        })
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function LoginUser(email, senha) {
    try {
        const response = await axios.post(`${BASE_API}/user/auth`, {
            email: email,
            senha: senha
        })
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function GetUserById(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users/${id}`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function UpdateUserImg(file) {
    let formData = new FormData();
    formData.append("img", file);
    
    const requestConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        }
    }

    try {
        const response = await axios.put(`${BASE_API}/users/`, formData, requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function UpdateUserName(name) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.put(`${BASE_API}/users/`,{
            name:name
        },requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function UpdateUserPassword(password) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.put(`${BASE_API}/users/`,{
            password:password
        },requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function DeleteUser(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.delete(`${BASE_API}/users/`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function GetUsers({limit=10,offset=0,search}) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users?limit=${limit}&offset=${offset}${search ? '&search='+search : ''}`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function SearchUsers(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users/search`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function CreateGame({ name, publisher, genres, img}) {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("publisher", publisher);
    formData.append("genre", genres);
    formData.append("game_img", img);

    const requestConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        }
    }

    try {
        const response = await axios.post(`${BASE_API}/games`, formData, requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getGames(limit=10, offset=0, search=null) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/games?limit=${limit}&offset=${offset}${search && "&search="+search}`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function AddToCollection(id_game, evidence) {
    let formData = new FormData();
    formData.append("evidence_img", evidence);
    formData.append("id_game", id_game);

    const requestConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        }
    }

    try {
        const response = await axios.post(`${BASE_API}/collection`, formData, requestConfig)
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function GetCollection(limit=10, offset=0, id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        if(id){
            const response = await axios.get(`${BASE_API}/collection?limit=${limit}&offset=${offset}&id=${id}`, requestConfig)            
            return response.data;
        }else {
            const response = await axios.get(`${BASE_API}/collection?limit=${limit}&offset=${offset}`, requestConfig)
            return response.data;
        }
    } catch (error) {
        return null;
    }
}

export async function DeleteItem(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };

    try {
        const response = await axios.delete(`${BASE_API}/collection/${id}/delete`, requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function AddStar(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.post(`${BASE_API}/stars`, {
            id_collection: id
        },requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function DelteStar(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.delete(`${BASE_API}/stars`, {
            id_collection: id
        },requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function MostStaredItens() {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/stats/more-stared-items`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function MostPossesedItens() {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/stats/more-possesed-items`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function MostUsersItens() {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/stats/users-most-items`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}
