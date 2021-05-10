import AppConstants from "../utils/AppConstants";
import configuration from "../api/config";

import interceptorService from './interceptorService'

class PhrasesService {

    async getPhrase() {
        const api = configuration.routes.getPhrase
        const url = AppConstants.domain + api + '?animal_type=cat&amount=1';
        let response = await interceptorService.doRequest(url);
        return response
    }

}

export default new PhrasesService();
