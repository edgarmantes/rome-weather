import reducer from '../../src/reducers/reducer_currentdata'

describe('CurrentData reducer test', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

	it('should handle GET_CURRENT_DATA', () => {
		expect(
		  reducer({}, {
		    type: "GET_CURRENT_DATA",
		    payload: {
		    	main : {
		    		temp : 80,
		    		humidity : 60,
		    		temp_max : 90,
		    		temp_min : 60,
		    	}
		    }
		  })
		).toEqual(
		  {
			temp : 80,
			humidity : 60,
			hi : 90,
			lo : 60,
		  }
		)

	})

	it('should handle CONVERT_CURRENT_DATA if Celcius is selected', () => {
		expect(
		  reducer({}, {
		    type: "CONVERT_CURRENT_DATA",
		    payload: {
				temp: 80,
				humidity: 60,
				hi: 90,
				lo: 60,
				unit: 'C'
		    }
		  })
		).toEqual(
		  {
			temp : 27,
			humidity : 60,
			hi : 33,
			lo : 16,
			unit : 'C'
		  }
		)

	})

	it('should handle CONVERT_CURRENT_DATA if Fahrenheit is selected', () => {
		expect(
		  reducer({}, {
		    type: "CONVERT_CURRENT_DATA",
		    payload: {
				temp: 26,
				humidity: 60,
				hi: 32,
				lo: 15,
				unit: 'F'
		    }
		  })
		).toEqual(
		  {
			temp : 79,
			humidity : 60,
			hi : 90,
			lo : 59,
			unit : 'F'
		  }
		)

	})

	it('should handle CONVERT_CURRENT_DATA if Both is selected', () => {
		expect(
		  reducer({
			temp: 79,
			humidity: 60,
			hi: 90,
			lo: 59,		  	
		  	unit: 'F'
		  }, {
		    type: "CONVERT_CURRENT_DATA",
		    payload: {
				temp: 79,
				humidity: 60,
				hi: 90,
				lo: 59,
				unit: 'Both'
		    }
		  })
		).toEqual(
		  {
			temp : "79/27",
			humidity : 60,
			hi : "90/33",
			lo : "59/15",
			unit : 'Both'
		  }
		)

	})	

	it('should handle CONVERT_CURRENT_DATA if Both is selected', () => {
		expect(
		  reducer({
			temp: 27,
			humidity: 60,
			hi: 33,
			lo: 15,		  	
		  	unit: 'C'
		  }, {
		    type: "CONVERT_CURRENT_DATA",
		    payload: {
				temp: 27,
				humidity: 60,
				hi: 33,
				lo: 15,
				unit: 'Both'
		    }
		  })
		).toEqual(
		  {
			temp : "81/27",
			humidity : 60,
			hi : "92/33",
			lo : "59/15",
			unit : 'Both'
		  }
		)

	})	

})