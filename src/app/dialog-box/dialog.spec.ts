import { DialogText, getDialogForChapter } from './dialog';

fdescribe('getDialog', () => {
  // it('should return a Dialog objest', () => {
  //   const dialog = getDialog();
  //   expect(dialog).toBeDefined();
  //   expect(dialog instanceof DialogText).toBeTrue();
  // });

  it('should load xml file for chapter', () => {
    const dialog = getDialogForChapter('chapter1');
    expect(dialog).toBeDefined();
  });
});
