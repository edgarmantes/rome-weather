import changeUnit from '../../src/actions/changeUnit'


describe('actions_changeData', () => {
  it('should create an action to change unit', () => {
    const unit = 'C'
    const expectedAction = {
      type: 'CHANGED_UNIT',
      payload: unit
    }
    expect(changeUnit('C')).toEqual(expectedAction)
  })
})