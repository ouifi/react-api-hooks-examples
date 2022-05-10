async function asJSON(res: Response) {
    return res.json();
}

async function isOk(res: Response) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(res.statusText);
    }
}

async function get(url: string | Request, opts?: Record<string, any>) {
    const trueOptions = {
        method: "GET",
        ...opts
    };

    return fetch(url, trueOptions);
}

async function post(url: string | Request, body: Record<string, any>, opts?: Record<string, any>) {
    const trueOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
        ...opts
    };

    return fetch(url, trueOptions);
}

const API = {
    get, post, isOk, asJSON
}

export default API;