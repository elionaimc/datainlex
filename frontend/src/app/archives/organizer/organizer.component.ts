import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileElement } from 'src/app/archives/models/file-element';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  title = 'DATAinLex';
  fileElements: Observable<FileElement[]>;
  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  constructor(public fileService: FileService) {}

  ngOnInit() {
    const folderA = this.fileService.add({ name: 'Processo 001-2019', isFolder: true, parent: 'root' });
    this.fileService.add({ name: '1.1.- Negativamente a causa compleja.pdf', isFolder: false, parent: 'root', file: '01.pdf' });
    this.fileService.add({ name: 'Processo 002-2019', isFolder: true, parent: 'root' });
    this.fileService.add({ name: '1.3.- Recurso de apelación contra Auto de 26 de mayo.pdf', isFolder: false, parent: 'root', file: '02.pdf' });
    this.fileService.add({ name: '1.5.- Recurso de reforma y sub. de apelación contra auto de 30 de mayo.pdf', isFolder: false, parent: folderA.id, file: '03.pdf' });
    this.fileService.add({ name: '1.6.- Pidiendo notificación auto incoación dil. prev. y nulidad de lo actuado.pdf', isFolder: false, parent: folderA.id, file: '04.pdf' });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  addFolder(folder: { name: string }) {
    this.fileService.add( { isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }

  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName} /`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    const split = p.split('/');
    split.splice(split.length -2, 1);
    p = split.join('/');
    return p;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

}
