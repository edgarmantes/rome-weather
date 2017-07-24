import reducer from '../../src/reducers/reducer_pollut'

describe('Pollut reducer test', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

	it('should handle GET_POLLUT_CO', () => {
		expect(
		  reducer({}, {
		    type: "GET_POLLUT_CO",
		    payload: {conc : 8.168363052618588e-8}
		  })
		).toEqual(
		  	{
		  		co: "8.17e-8"
		  	}
		)

	})

})