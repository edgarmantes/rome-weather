import reducer from '../../src/reducers/reducer_fiveday'

describe('FiveDay reducer test', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

	it('should handle GET_FIVE_DAY', () => {
		expect(
		  reducer({}, {
		    type: "GET_FIVE_DAY",
		    payload: {
		    	object: {
		    		list: []
		    	}
		    }
		  })
		).toEqual(
		  	{
				daysList : {
					object : {
						list : []
					}
				}
		  	}
		)

	})

})