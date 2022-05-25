import axios from 'axios';

const state = {
  weather: [],
};

const getters = {
  allWeather: (state) => state.weather,
};

const actions = {
  async fetchWeather({ commit }) {
    const key = '9e3c85d67975431bba9135323222005';
    const response = await axios.get(
      'http://api.weatherapi.com/v1/current.json?q=Lagos',
      {
        headers: {
          'Content-Type': 'application/json',
          Key: `${key}`,
        },
      }
    );
    commit('SET_WEATHER', response.data);
  },

  async searchWeather({ commit }, searchInput) {
    const key = '9e3c85d67975431bba9135323222005';
    const response = await axios.get(
      `http://api.weatherapi.com/v1/search.json?q=${searchInput}`,{
        headers: {
          'Content-Type': 'application/json',
          Key: `${key}`,
        },
      }
    );
    commit('SEARCH_WEATHER', response.data);
  }
};

const mutations = {
  SET_WEATHER: (state, weather) => (state.weather = weather),
  // SEARCH_WEATHER: (state, singleWeather) => (state.)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
