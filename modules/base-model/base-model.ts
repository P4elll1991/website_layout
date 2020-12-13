

export interface ResponseError {
    error: Error
    json: any
}

export interface ErrorData {
    errorText: string
}

export default class BaseModel {
    private static readonly error: {
        redirected: Error
        server: Error
        internalServer: Error
        notFound: Error
    } = {
        redirected: Error('user was redirected to dashboard'),
        server: Error('something wrong occurred on the server side'),
        internalServer: Error('internal server error'),
        notFound: Error('not found your request'),
    }

    /**
     * Get запрос.
     * @param {string} url.
     * @returns {Promise<any>}
     */
    protected get(url: string): Promise<any> {
        return this.ajax({
            url,
            method: 'GET',
        })
    }

    /**
     * Post запрос.
     * @param {string} url.
     * @param {*} [data] - данные.
     * @param {boolean} [isFormData]
     * @returns {Promise<*>}
     */
    protected post(url: string, data: any, isFormData?: boolean): Promise<any> {
        return this.ajax({
            url,
            data,
            method: 'POST',
        })
    }

    /**
     * Put запрос.
     * @param {string} url.
     * @param {*} [data] - данные.
     * @param {boolean} [isFormData]
     * @returns {Promise<*>}
     */
    protected put(url: string, data: any, isFormData?: boolean): Promise<any> {
        return this.ajax({
            url,
            data,
            method: 'PUT',
        })
    }

    /**
     * Delete запрос
     * @param {string} url
     * @param {*} [data] - данные.
     * @returns {Promise<*>}
     */
    protected delete(url: string, data?: any): Promise<any> {
        return this.ajax({
            url,
            data,
            method: 'DELETE',
        })
    }

    /**
     * Универсальный метод для отпавки запроса.
     * @param {string} url
     * @param {object} [data]
     * @param {string} [method]
     * @param {boolean} [isFormData]
     * @param {Auth} [auth]
     * @returns {Promise<any>}
     */
    private async ajax({ url, data, method }: Params): Promise<any> {
        

        let headers
        if (data !== undefined) {
            if(typeof data === "object"){
                
                data = JSON.stringify(data)
            } 
            headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return fetch(url, {
            method,
            body: data,
            credentials: 'same-origin',
            headers,
        })
            .then((r: Response) => {
                 if (r.status === 404) {
                    throw {
                        error: BaseModel.error.notFound,
                        json: r,
                    }
                } else if (r.status === 500) {
                    throw {
                        error: BaseModel.error.internalServer,
                        json: r,
                    }
                }
                return r
            })
            .then((r: Response) => {
                return r.json()
            })
            .catch((re: ResponseError) => {

                switch (re.error) {
                    
                    case BaseModel.error.server:
                        let errorData = re.json as ErrorData
                        webix.message({
                            text:'Ошибка изменения состояния',
                            type: 'error',
                            expire: -1,
                        })
                        webix.message({
                            text: errorData.errorText,
                            type: 'error',
                            expire: -1,
                        })
                        console.error(errorData.errorText)
                        break
                    case BaseModel.error.notFound:
                        webix.message({
                            text: 'Не найден путь',
                            type: 'error',
                            expire: -1,
                        })
                        // this.displayResponse(re)
                        break
                    case BaseModel.error.internalServer:
                        webix.message({
                            text: 'Ошибка сервера',
                            type: 'error',
                            expire: -1,
                        })
                        // this.displayResponse(re)
                        break
                    default:
                }
                if (re.error) {
                        webix.message({
                            text: re.error,
                            type: 'error',
                            expire: -1,
                        })
                        console.error(re.error)
                }
            })
    }
    // displayResponse - вытаскивает из отета сервера ревеловскую страницу с ошибкой и отображает ее
    private displayResponse(re: ResponseError): void {
        re.json.blob().then(
            (myBlob: any): void => {
                myBlob.text().then(
                    (html: any): void => {
                        document.body.innerHTML = html
                    }
                )
            }
        )
    }
}

interface Params {
    url: string
    data?: any
    method: string
}

