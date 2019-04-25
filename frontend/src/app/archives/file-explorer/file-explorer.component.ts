import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FileElement } from '../models/file-element';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from '../modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from '../modals/rename-dialog/rename-dialog.component';
import { faFolderPlus, faFilePdf, faFolder, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { SimplePdfViewerComponent, SimplePDFBookmark } from 'simple-pdf-viewer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent {

  faFolder = faFolder;
  faFolderPlus = faFolderPlus;
  faFilePDF = faFilePdf;
  faBalanceScale = faBalanceScale;
  selected = '';
  nomeArquivo = '';
  showFile = false;
  displayedColumns = ['list', 'actions'];

  constructor(public dialog: MatDialog, private router: Router) { }

  @Input() fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
  }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.showFile = false;
      this.navigatedDown.emit(element);
      console.log('elemento: ', element);
    }
  }

  navigateUp() {
    this.showFile = false;
    this.navigatedUp.emit();
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element, moveTo });
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

  @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;
  bookmarks: SimplePDFBookmark[] = [];

  openDocument(document: string, name: string) {
    this.selected = name;
    this.showFile = true;
    this.pdfViewer.openUrl(document);
  }


  // how to create bookmark
  createBookmark() {
    this.pdfViewer.createBookmark().then(bookmark => {
      if (bookmark) {
        this.bookmarks.push(bookmark);
      }
    })
  }

  fechar() {
    this.selected = '';
    this.showFile = false;
  }

  logout() {
    this.router.navigate(['/']);
  }

}
