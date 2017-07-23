import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getCurrentData from '../../src/actions/getCurrentData';
import nock from 'nock';
import fetch from 'isomorphic-fetch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions for getCurrentData', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET_CURRENT_DATA when fetching CurrentData has been resolved', () => {

    nock("http://api.openweathermap.org")
      .get("/data/2.5/weather?q=Rome,IT&units=Metric&APPID=698009a4dde62e48490582289f422bd2")
      .reply(200, {"object": {}, "unit": "C"})

    const expectedActions = [
      { type: "GET_CURRENT_DATA", payload: { unit : "C", object: {} } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(getCurrentData('Metric')).then(() => {

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})