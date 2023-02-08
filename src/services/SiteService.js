import axios from 'axios';

const SITES_API_BASE_URL = "http://localhost:8080/sites";

class SiteService {

    getSites(cityName) {
        return axios.get(SITES_API_BASE_URL + "?cityFilter=" + cityName);
    }

    createSite(site) {
        return axios.post(SITES_API_BASE_URL, site);
    }

    getSiteById(siteId) {
        return axios.get(SITES_API_BASE_URL + '/' + siteId);
    }

    addCommentToSite(siteId, comment) {
        return axios.post(SITES_API_BASE_URL + '/' + siteId, comment);
    }
}

export default new SiteService()