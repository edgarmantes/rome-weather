import reducer from '../../src/reducers/reducer_getalerts'

describe('GetAlerts reducer test', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

	it('should handle GET_ALERTS', () => {
		expect(
		  reducer({}, {
		    type: "GET_ALERTS",
		    payload: {
		    	object : [
		    		{
		    			conditions: [
			    			{
			    				_id : "5966a1fb33d810006484033b",

			    				current_value : { max : 263.576}
			    			}

			    		],
		    		
	    				alerts : {
	    					aslkdfjlkasjdfljk: {
		    		         	conditions:[
									{
									   current_value:{
									      min:263.576,
									      max:263.576
									   },
									   "condition":{
									      "name":"temp",
									      "expression":"$lt",
									      "amount":273,
									      "_id":"5852816a9aaacb00153134a5"
									   }
									}
								],			
								date :1482181200000	    						
	    					},
	    					lkajsdfkjlskjdflk: {
	    						conditions:[
									{
									   current_value:{
									      min:263.576,
									      max:263.576
									   },
									   "condition":{
									      "name":"temp",
									      "expression":"$lt",
									      "amount":273,
									      "_id":"5852816a9aaacb00153134a5"
									   }
									}
								],			
								date :1482181200000	
	    					}

									
			    		}
		    	}
		    	],
		    	unit : "C"
		    }
		  })
		).toEqual(
		  	{
		  		"alerts": [
		  			{
						"date": ["Mon,", "19", "Dec", "2016", "21:00:00", "GMT"], 
						"hi": "-9"

		  			}
		  		]
		  	}
		)

	})

})