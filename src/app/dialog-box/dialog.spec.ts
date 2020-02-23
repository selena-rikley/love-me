import { getDialog, DialogText } from './dialog';

describe('getDialog', () => {
  it('should return a Dialog objest', () => {
    const dialog = getDialog();
    expect(dialog).toBeDefined();
    expect(dialog instanceof DialogText).toBeTrue(); 
  });
});
