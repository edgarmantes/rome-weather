import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getAlerts from '../../src/actions/getAlerts';
import nock from 'nock';
import fetch from 'isomorphic-fetch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions for getAlerts', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET_ALERTS when fetching Alerts has been resolved', () => {

    nock("http://api.openweathermap.org")
      .get("/data/3.0/triggers?appid=698009a4dde62e48490582289f422bd2")
      .reply(200, {})

    const expectedActions = [
      { type: "GET_ALERTS", payload: { unit : "C", object: {} } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(getAlerts('C')).then(() => {

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})