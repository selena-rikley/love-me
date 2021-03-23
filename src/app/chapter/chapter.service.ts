import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

import { getDialogForChapter } from '../dialog-box/dialog';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor() { }

    // Observable string sources
    private chapterContentUpdateSource = new Subject<string>();
    private chapterUpdateSource = new Subject<number>();

    // Observable string streams
    chapterContentUpdate$ = this.chapterContentUpdateSource.asObservable();
    chapterUpdate$ = this.chapterUpdateSource.asObservable();
  
    // Service message commands
    sendChapterContentUpdate(content) {
      this.chapterContentUpdateSource.next(content);
    }

    sendChapterUpdate(chapter) {
      this.chapterUpdateSource.next(chapter);
      let content = getDialogForChapter(`chapter${chapter}`, this);
    }
}

