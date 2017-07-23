import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getPollutCO from '../../src/actions/getPollutCO';
import nock from 'nock';
import fetch from 'isomorphic-fetch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions for getPollutCO', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET_POLLUT_CO when fetching PollutCO has been resolved', () => {

    nock("http://api.openweathermap.org")
      .get("/pollution/v1/co/41,12/current.json?appid=698009a4dde62e48490582289f422bd2")
      .reply(200, {data: [{value: "200"}]})

    const expectedActions = [
      { type: "GET_POLLUT_CO", payload: { conc: "200" } }
    ]
    const store = mockStore()

    return store.dispatch(getPollutCO()).then(() => {

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})