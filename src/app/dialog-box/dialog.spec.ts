import { getDialog } from './dialog';

describe('getDialog', () => {
  it('should return a dialog list', () => {
    const dialog = getDialog();
    expect(dialog).toBeDefined();  
  });
});
