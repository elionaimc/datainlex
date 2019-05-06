import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FileExplorerComponent, BottomSheetOverviewExampleSheet } from './file-explorer/file-explorer.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';
import { MatBottomSheetModule, MatCardModule, MatTableModule, MatButtonToggleModule, MatChipList, MatChipsModule, MatProgressBarModule, MatRadioModule } from '@angular/material';
import { OrganizerComponent } from './organizer/organizer.component';
import { MaterialModule } from '../core/material/material.module';
import { ActionComponent } from './modals/action/action.component';
import { NotesComponent } from './modals/notes/notes.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    FileExplorerComponent,
    RenameDialogComponent,
    NewFolderDialogComponent,
    OrganizerComponent,
    ActionComponent,
    NotesComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    SimplePdfViewerModule,
    MaterialModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatRadioModule
  ],
  exports: [FileExplorerComponent],
  entryComponents: [
    NewFolderDialogComponent,
    RenameDialogComponent,
    ActionComponent,
    NotesComponent,
    BottomSheetOverviewExampleSheet
  ]
})
export class FileExplorerModule { }
