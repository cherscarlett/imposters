import axios from 'axios'

const clientUrl = process.env.CLIENT_URL

export const state = () => ({
  questions: [],
  respondents: 0,
  experience: [],
  education: [],
  race: [],
  gender: [],
  disabled: [],
  age: [],
  sexuality: [],
  familyType: [],
  industry: [],
  financialClass: [],
  responses: []
})

export const mutations = {
  update(state, { type, data }) {
    state[type] = data
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const responsesUrl = `${clientUrl}/api/responses/`
      const { data } = await axios.get(responsesUrl)
      Object.keys(data).forEach(type => {
        commit('update', { type, data: data[type] })
      })
    } catch (err) {
      console.error(err)
    }
  }
}
