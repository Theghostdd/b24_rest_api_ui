const fetchData = (method: string, json: object): Promise<any> => {
    return new Promise((resolve) => {
        try {
            BX24.callMethod(method, json, function (res: any) {
                if (res.data()) {
                    resolve(res.data());
                } else {
                    resolve({error: res.answer.error, message: res.answer.error_description});
                }
            });
        } catch (e: any) {
            resolve({error: "Unexpected error", message: 'Unexpected error'});
        }
    });
};

export default fetchData;
