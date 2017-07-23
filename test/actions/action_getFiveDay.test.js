import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getFiveDay from '../../src/actions/getFiveDay';
import nock from 'nock';
import fetch from 'isomorphic-fetch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions for getFiveDay', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET_FIVE_DAY when fetching FiveDay has been resolved', () => {

    nock("http://api.openweathermap.org")
      .get("/data/2.5/forecast/daily?q=Rome,IT&cnt=5&units=Metric&appid=698009a4dde62e48490582289f422bd2")
      .reply(200, {})

    const expectedActions = [
      { type: "GET_FIVE_DAY", payload: { unit : "Metric", object: {} } }
    ]
    const store = mockStore()

    return store.dispatch(getFiveDay('Metric')).then(() => {

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})