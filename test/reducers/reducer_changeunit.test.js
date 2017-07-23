import reducer from '../../src/reducers/reducer_changeunit'


describe('ChangeUnit reducer test', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer({}, {
        type: "CHANGED_UNIT",
        payload: 'C'
      })
    ).toEqual(
      {
      	unit : 'C'
      }
    )

   })
})