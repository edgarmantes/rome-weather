import convertData from '../../src/actions/convertData'


describe('actions convertData', () => {
  it('should create an action to convert data', () => {
    const data = 'C'
    const expectedAction = {
      type: 'CONVERT_CURRENT_DATA',
      payload: data
    }
    expect(convertData('C')).toEqual(expectedAction)
  })
})