import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  inputText: string = '';
  outputWords: string[] = [];

  get outputText(): string {
    return this.outputWords.join(' ');
  }

  appendText(): void {
    const trimmed = this.inputText.trim();
    if (trimmed) {
      this.outputWords.push(trimmed);
      this.inputText = '';
    }
  }

  undoText(): void {
    if (this.outputWords.length > 0) {
      this.outputWords.pop();
    }
  }
}
