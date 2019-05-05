import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FileElement } from '../models/file-element';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from '../modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from '../modals/rename-dialog/rename-dialog.component';
import { faFolderPlus, faFilePdf, faFolder, faBalanceScale, faFileUpload, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SimplePdfViewerComponent, SimplePDFBookmark } from 'simple-pdf-viewer';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ActionComponent } from '../modals/action/action.component';
import { NotesComponent } from '../modals/notes/notes.component';
import { NgForm } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef, MatChipInputEvent } from '@angular/material';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: '<mat-nav-list><a mat-list-item><span mat-line>Exemplo de nota adicionada</span></a><a mat-list-item><span mat-line>Uma segunda nota um pouco mais extensa</span></a></mat-nav-list>',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html'
})
export class FileExplorerComponent {

  faFolder = faFolder;
  faFolderPlus = faFolderPlus;
  faFilePDF = faFilePdf;
  faBalanceScale = faBalanceScale;
  faFileUpload = faFileUpload;
  faSearch = faSearch;
  selected = '';
  loading = false;
  nomeArquivo = '';
  showFile = false;
  searchDoc: string;
  displayedColumns = ['list', 'actions'];
  panelOpenState: boolean;

  @Input() fileElements: FileElement[]; // lista de elementos no nivel atual
  blocoDeNotas: string [];
  @Input() canNavigateUp: string;
  @Input() path: string;
  @Input() map: Map<string, FileElement>;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;
  bookmarks: SimplePDFBookmark[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private fileService: FileService
    ) {
      console.log('Construiu', this.map);
    }

  deleteElement(element: FileElement) {
    const type = (element.isFolder) ? `a pasta  ${element.name} e todos os documentos associados a esta` : `o arquivo  ${element.name}`;
    const dialogRef = this.dialog.open(
      ActionComponent,
      { data: { warning: `Tem certeza que deseja excluir ${type}?` } });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.elementRemoved.emit(element);
        this.closeDocument();
      }
    });
  }

  // utilizado para entrar numa pasta
  navigate(element: FileElement) {
    if (element.isFolder) {
      this.showFile = false;
      this.navigatedDown.emit(element);
      console.log('Navegou', this.map);
    }
  }

  navigateUp() {
    this.showFile = false;
    this.navigatedUp.emit();
    console.log('Navegou pra fora', this.map);
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element, moveTo });
    this.map = this.fileService.getMap();
  }

  openNewFolderDialog() {
    const dialogRef = this.dialog.open(NewFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
      }
    });
  }

  openRenameDialog(element: FileElement) {
    const dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

  createNotes() {
    const title = `Adicione uma anotação ao arquivo `;
    const dialogRef = this.dialog.open(
      NotesComponent,
      { data: { title } });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.blocoDeNotas.push(res);
      }
    });
  }

  async openDocument(element: FileElement) {
    this.loading = true;
    this.selected = (element.name.length >= 41) ? element.name.substr(0, 40).trim() + '...' : element.name;
    this.pdfViewer.openUrl('assets/' + element.file);
    this.pdfViewer.onLoadComplete.subscribe( res => {
      this.loading = false;
      this.showFile = true;
    });
  }


  // how to create bookmark
  createBookmark() {
    this.pdfViewer.createBookmark().then(bookmark => {
      if (bookmark) {
        this.bookmarks.push(bookmark);
      }
    })
  }

  closeDocument() {
    this.selected = '';
    this.showFile = false;
    this.pdfViewer.openUrl('');
  }

  searchDocument(f: NgForm) {
    if (f.invalid) {
      return null;
    }

    this.pdfViewer.search(f.value.searchDoc);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  logout() {
    this.router.navigate(['/logout']);
  }

}
